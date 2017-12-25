import React                   from 'react';
import TextField               from '../common/text-field';
import SimpleButton            from '../common/simple-button';
import { startNewGame }        from '../../actions/game-actions';
import { addPlayer }           from '../../actions/leaderboard-actions';
import { isEmpty, isEmptyObj } from '../../utils/utility';
import { connect }             from 'react-redux';

class SavePlayerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formFields     : {
                playerName : ''
            },
            isPlayerSaved  : false,
            errors         : {}
        };

        this.onChange        = this.onChange.bind(this);
        this.addPlayerToHall = this.addPlayerToHall.bind(this);
    }

    onChange(e) {
        const changes = {[e.target.name] : e.target.value};
        this.setState((prevState) => {
            return { formFields  : {...prevState.formFields, ...changes } };
        });
    }

    validateInput(formFields) {
        let errors = {};

        Object.keys(formFields)
            .forEach((stateKey) => {
            isEmpty(formFields[stateKey]) ? (errors[stateKey] = `*required` ) : null;
        });

        return {
            errors,
            isValid : isEmptyObj(errors)
        };
    }

    isInputValid() {
        const { errors, isValid } = this.validateInput(this.state.formFields);

        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    addPlayerToHall(e) {
        e.preventDefault();
        this.setState({errors : {}});

        if (this.isInputValid()) {
            const { playerName }       = this.state.formFields;
            const { currentGameLevel } = this.props.game;

            this.props.onPlayerSave({playerName, levelReached : currentGameLevel});
            this.setState({isPlayerSaved : true});
        }

    }

    getInputFormComponent = () => {
        const {totalLevels, currentGameLevel} = this.props.game;
        const { playerName }                  = this.state.formFields;
        const { errors }                      = this.state;

        return (
            <form onSubmit={this.addPlayerToHall} className="player-form">
                <h2> Save player details </h2>
                <fieldSet>
                    <br/>
                    <h3>Level Reached: {currentGameLevel}</h3>
                    <h3>Total Levels: {totalLevels}</h3>
                    <legend>Enter The Hall of fame</legend>
                    <br/>
                    <TextField
                        name     = "playerName"
                        label    = "Player Name"
                        value    = {playerName}
                        error    = {errors.playerName}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <SimpleButton
                        classNames  = "themebtn btn-cta-green"
                        inputType   = "submit"
                    >
                        Save
                    </SimpleButton>

                    <SimpleButton
                        classNames  = "themebtn btn-cta-purple"
                        whenClicked = {this.props.onStartNewGame}
                    >
                        Skip
                    </SimpleButton>

                </fieldSet>
            </form>
        );
    }

    getAfterSaveComponent = () => {

        const { playerName } = this.state.formFields;

        return (
            <div className="player-saved">
                <h2> Save player details </h2>

                <h3> Howdy {playerName},</h3>
                <br/>
                <br/>
                <h4> Your details has been saved successfully.</h4>
                <br/>
                <SimpleButton
                    classNames  = "themebtn btn-cta-green"
                    whenClicked = {this.props.onStartNewGame}
                >
                    Play Again
                </SimpleButton>

                <p>*<i>Only top 10 players are shown at Hall of fame</i></p>
            </div>
        )
    }

    render() {
        return (
            <div className="player-page">
                {
                    this.state.isPlayerSaved ? this.getAfterSaveComponent() : this.getInputFormComponent()
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    game : state.game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPlayerSave : newPlayer => {
        dispatch(addPlayer(newPlayer))
    },
    onStartNewGame : () => {
        dispatch(startNewGame())
    }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(SavePlayerPage);

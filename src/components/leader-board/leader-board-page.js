import React       from 'react';
import { v4 }      from 'uuid';
import PropTypes   from 'prop-types';
import Player      from '../leader-board/player';

function generatePlayerLists(top10Player=[]) {

    return top10Player.map((player) => {
        return (
            <Player {...player} key={v4()} />
        );
    });
}

export default class LeaderBoardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLeaderBoardExpanded : true
        };

        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(e) {
        const changes = {[e.target.name] : e.target.value};
        this.setState((prevState) => {
            return { isLeaderBoardExpanded  : !prevState.isLeaderBoardExpanded};
        });
    }

    render() {
        const { top10Player }= this.props;
        const style = this.state.isLeaderBoardExpanded ? {display: 'block'} : {display : 'none'};

        return (
            <div>
                <div className="leader-board-container" onClick={this.onToggle}>
                    <div className="leader-board-heading">
                        <p className="center">
                            <b>Leader Board</b>
                        </p>
                        <p className="left" title="Player"><i className="material-icons">account_circle</i>
                        </p>
                        <p className="right" title="ranking"><i className="material-icons">sort</i></p>
                    </div>
                </div>
                <div className = "leader-board-players" style={style}>
                    { generatePlayerLists(top10Player) }
                </div>
            </div>
        );
    }
}


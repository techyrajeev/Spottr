import React        from 'react';
import { playGame } from '../../actions/game-actions';
import { connect }  from 'react-redux';

function getBackgroundColor(cellId, colors) {
    if(colors[`${cellId}`]) {
        return colors[`${cellId}`];
    } else {
        return colors["baseColor"];
    }
}

const Cell = ({width, cellId, colors, onCellClick}) => {

    const backgroundColor = getBackgroundColor(cellId, colors);

    const style = {
        width           : `${width}%`,
        paddingBottom   : `${width}%`,
        backgroundColor
    };

    return (
        <div
            style     = {style}
            className = "cell"
            onClick   = {() => onCellClick(cellId)}
        >
        </div>
    );
}

const mapStateToProps = state => {
    return {
        colors : state.game.colors
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onCellClick : id => {
      dispatch(playGame(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);


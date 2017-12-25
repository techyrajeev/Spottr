import React, { Component } from 'react';
import Grid                 from '../common/grid';
import { playGame }         from '../../actions/game-actions';
import { connect }          from 'react-redux';

const GamePage = ({game}) => {
    return (
        <div className="game-page">
            <div className="game-level-container">
                <h3 className="center">Game levels</h3>
                <h3 className="left">Current Level: {game.currentGameLevel}</h3>
                <h3 className="right">Total Levels: {game.totalLevels}</h3>
            </div>
            <div className="grid-container">
                <Grid gridSize={game.currentGameLevel + 2} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
  return {
    game : state.game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCellClick : id => {
      dispatch(playGame(id))
    }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(GamePage);

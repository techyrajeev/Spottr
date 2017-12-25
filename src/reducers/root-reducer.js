import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import leaderBoard         from './leaderboard';
import game                from './game';

const rootReducer = combineReducers({leaderBoard, game, routing : routerReducer});

export default rootReducer;


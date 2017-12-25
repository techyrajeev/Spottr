import * as types               from '../actions/action-types';
import { getWinKey, getColors } from '../utils/utility';

let winKey  = getWinKey(0);

const initialState = {
    totalLevels      : 8,
    currentGameLevel : 0,
    gameActive       : true,
    colors           : getColors(winKey)
};


function getNextGameState(state, action) {

    if(state.currentGameLevel === state.totalLevels) {
        return {
            ...state,
            gameActive : false
        }
    }

    if (action.chosenKey === winKey) {

        if(state.currentGameLevel + 1 === state.totalLevels) {
            return {
                ...state,
                currentGameLevel : state.currentGameLevel + 1,
                gameActive       : false
            }
        }

        winKey = getWinKey(state.currentGameLevel + 1);
        return {
            ...state,
            currentGameLevel : state.currentGameLevel + 1,
            colors           : getColors(winKey),
            gameActive       : true
        }

    } else {
        return {
            ...state,
            gameActive : false
        }
    }
}

function validateChosenMove(state, action) {

    if (action.chosenKey === winKey) {
        return {
            ...state,
            willGameContinue : true
        }

    } else {
        return {
            ...state,
            willGameContinue : false
        }
    }
}

function setGameLevels(state, action) {
    return {
        ...state,
        totalLevels : action.levels,
    }
}


function startNextGameLevel(state) {

    winKey = getWinKey(state.currentGameLevel + 1);
    return {
        ...state,
        colors           : getColors(winKey),
        currentGameLevel : state.currentGameLevel + 1
    };
}

function startNewGameLevel() {

    winKey = getWinKey(0);
    return {
        ...initialState,
        colors : getColors(winKey)
    };
}


function game(state = initialState, action) {
  switch (action.type) {
    case types.START_NEW_GAME:
        return startNewGameLevel();
        break;

    case types.START_NEXT_LEVEL_GAME:
        return startNextGameLevel(state);
        break;

    case types.PLAY_GAME:
        return getNextGameState(state, action);
        break;

    case types.VALIDATE_MOVE:
        return validateChosenMove(state, action);
        break;

    case types.SET_GAME_LEVELS:
        return setGameLevels(state, action);
        break;

    default:
      return state;

    }
}

export default game;

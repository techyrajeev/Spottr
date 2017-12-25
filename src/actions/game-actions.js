import { PLAY_GAME, START_NEW_GAME,
    VALIDATE_MOVE, SET_GAME_LEVELS }  from './action-types';

export function playGame(chosenKey) {
    return {
        type : PLAY_GAME,
        chosenKey
    };
}

export function isValidMove(chosenKey) {
    return {
        type : VALIDATE_MOVE,
        chosenKey
    };
}

export function startNewGame() {
    return {
        type : START_NEW_GAME
    };
}

export function setGameLevels(levels) {
    return {
        type : SET_GAME_LEVELS,
        levels
    };
}


import { UPDATE_TOP_10_PLAYER, GET_TOP_10_PLAYER }  from './action-types';

export function addPlayer(newPlayer) {
    return {
        type : UPDATE_TOP_10_PLAYER,
        newPlayer
    };
}

export function getTop10Player() {
    return {
        type : GET_TOP_10_PLAYER
    };
}

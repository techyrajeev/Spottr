import * as types          from '../actions/action-types';
import { findInsertIndex } from '../utils/utility';

const initialState = { top10Player : [] };

function updateTop10PlayersList(top10Player, newPlayer) {
    let insertIndex = findInsertIndex(top10Player, newPlayer, "levelReached");
    console.log("In:"+insertIndex);
    let newTop10PlayerList = [
        ...top10Player.slice(0, insertIndex),
        newPlayer,
        ...top10Player.slice(insertIndex)
    ].slice(0, 10);

    return newTop10PlayerList;
}

function search(state = initialState, action) {

  switch (action.type) {

    case types.UPDATE_TOP_10_PLAYER:
        return {
            ...state,
            top10Player : updateTop10PlayersList(state.top10Player, action.newPlayer),
        };

    case types.GET_TOP_10_PLAYER:
      return state.top10Player;

    default:
      return state;
    }
}

export default search;

import { expect }                 from 'chai';
import store                      from '../src/store/store';

test('reducers', () => {
    let state = store.getState();
    let {currentGameLevel, totalLevels} = state;
    let onRowMove = currentGameLevel + 2;

    console.log(JSON.stringify(state));
});

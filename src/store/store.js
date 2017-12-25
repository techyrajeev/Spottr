import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore }                  from 'react-router-redux';
import { browserHistory }                        from 'react-router'
import rootReducer                               from '../reducers/root-reducer';
import thunk                                     from 'redux-thunk';
import { loadGameState, saveGameState }          from '../utils/api';
import throttle                                  from 'lodash/throttle';

const persistedGameState = loadGameState();

const store = createStore(
    rootReducer,
    persistedGameState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

store.subscribe(throttle(() => {
    saveGameState({leaderBoard : store.getState().leaderBoard});
}, 1500));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

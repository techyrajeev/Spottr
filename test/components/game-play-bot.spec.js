import { expect }                              from 'chai';
import store                                   from '../../src/store/store';
import {isValidMove, playGame, setGameLevels } from '../../src/actions/game-actions';

let state;
let game;
let currentGameLevel = 0;
let totalLevels = 5;

beforeAll(() => {
    store.dispatch(setGameLevels(totalLevels));
    state = store.getState();
    game  = state.game;
});

function playGameAtGivenLevel(levelToPlay) {
    let moves    = 0;
    let levelWon = false;

    while(currentGameLevel < levelToPlay) {
        moves = currentGameLevel + 2;
        for(let i = 0;i<moves;i++) {
            for(let j=0;j<moves;j++) {
                let chosenKey = `${i}${j}`;
                store.dispatch(isValidMove(chosenKey));
                game = store.getState().game;
                if(game.willGameContinue) {
                    store.dispatch(playGame(chosenKey));
                    game = store.getState().game;
                    currentGameLevel = game.currentGameLevel;
                    levelWon = true;
                    break;
                } else {
                    levelWon = false;
                }
            }

            if(levelWon) {
                break;
            }
        }
    }

    return levelWon;
}


describe('Playing KulrSpottr game using bot: 5 Level Game', () => {

    test(`Total no of levels in the game ${totalLevels}`, () => {
        expect(5, `No of levels to reach : ${totalLevels}`).to.equal(totalLevels);
    });

    test(`Start level is from ${currentGameLevel}`, () => {
        expect(currentGameLevel, `Start level : ${currentGameLevel}`).to.equal(0);
    });

    test(`Playing Level 0, Next Level to reach 1`, () => {
        let gameWon = playGameAtGivenLevel(1);
        expect(gameWon, `Won at level 0, reached at level 1`).to.be.true;
    });

    test(`Current reached level should be 1`, () => {
        expect(currentGameLevel, `Level reached : ${currentGameLevel}`).to.equal(1);
    });

    test(`Playing Level 1, Next Level to reach 2`, () => {
        let gameWon = playGameAtGivenLevel(2);
        expect(gameWon, `Won at level 1, reached at level 2`).to.be.true;
    });

    test(`Current reached level should be 2`, () => {
        expect(currentGameLevel, `Level reached : ${currentGameLevel}`).to.equal(2);
    });

    test(`Playing Level 2, Next Level to reach 3`, () => {
        let gameWon = playGameAtGivenLevel(3);
        console.log(currentGameLevel);
        expect(gameWon, `Won at level 2, reached at level 3`).to.be.true;
    });

    test(`Current reached level should be 3`, () => {
        expect(currentGameLevel, `Level reached : ${currentGameLevel}`).to.equal(3);
    });

    test(`Playing Level 3, Next Level to reach 4`, () => {
        let gameWon = playGameAtGivenLevel(4);
        expect(gameWon, `Won at level 3, reached at level 4`).to.be.true;
    });

    test(`Current reached level should be 4`, () => {
        expect(currentGameLevel, `Level reached : ${currentGameLevel}`).to.equal(4);
    });

    test(`Playing Level 4, Next Level to reach 5`, () => {
        let gameWon = playGameAtGivenLevel(5);
        expect(gameWon, `Won at level 4, reached at level 5`).to.be.true;
    });

    test(`Current reached level should be 5`, () => {
        expect(currentGameLevel, `Level reached : ${currentGameLevel}`).to.equal(5);
    });

    test('Game Finished!', () => {
        expect(currentGameLevel, `Current game level : ${currentGameLevel}, Max levels : ${totalLevels}`).to.equal(totalLevels);
    });

});

//test('reducers', () => {
    //let game = state.game;
    //let {currentGameLevel, totalLevels} = game;
    //let moves = currentGameLevel + 2;

    //console.log(currentGameLevel +":"+ totalLevels);

    //while(currentGameLevel <= 4) {
        //for(let i = 0;i<moves;i++) {
            //for(let j=0;j<moves;j++) {
                //let chosenKey = `${i}${j}`;

                //console.log(`---> Current Level: ${currentGameLevel}`);
                //console.log(`---> Selecting Cell: [${i}][${j}]`);
                //store.dispatch(isValidMove(chosenKey));
                //game = store.getState().game;
                //console.log(game);
                //if(game.willGameContinue) {
                    //console.log("Won");
                    //store.dispatch(playGame(chosenKey));
                    //game = store.getState().game;
                    //currentGameLevel = game.currentGameLevel;
                    //moves = currentGameLevel + 2;
                    //expect(game.willGameContinue, `---> Selected Cell[${i}][${j}] is correct move : reached level ${currentGameLevel}`).to.be.true;
                    //break;
                //} else {
                    //console.log(`---> Selected Cell[${i}][$[j]] is not a valid move !`);
                //}
            //}
        //}
    //}
    //expect(currentGameLevel, `Game finished! reached level ${currentGameLevel}, total levels : ${currentGameLevel}`).to.equal(currentGameLevel);
//});

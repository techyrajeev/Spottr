export const loadGameState = () => {
    try {
        const serializedState = localStorage.getItem('gameState');
        if(!serializedState) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveGameState = (gameState) => {
    try {
        const serializedState = JSON.stringify(gameState);
        localStorage.setItem('gameState', serializedState);
    } catch ( error ) {
        console.log(error);
    }
}

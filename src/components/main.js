import React           from 'react';
import Header          from './header';
import LeaderBoardPage from './leader-board/leader-board-page';
import GamePage        from './game/game-page';
import SavePlayerPage  from './save-player/save-player-page';
import Footer          from './footer';
import { connect }     from 'react-redux';

const Main = ({top10Player, gameActive}) => {
    return (
        <div id="main_container">
            <Header />
            <aside  id="sidebar">
                <LeaderBoardPage top10Player = { top10Player } />
            </aside>
            <section id="content">
                {
                    gameActive ? <GamePage /> : <SavePlayerPage />
                }
                </section>
                <Footer />
            </div>
    );
}

const mapStateToProps = state => {
  return {
      gameActive  : state.game.gameActive,
      top10Player : state.leaderBoard.top10Player
  }
}

export default connect(mapStateToProps , null)(Main);

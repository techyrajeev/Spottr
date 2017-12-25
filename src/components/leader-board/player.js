import React        from 'react';
import PropTypes    from 'prop-types';

const Player = ({playerName, levelReached}) => {
    return (
        <div className="player-detail">
            <p className="left" title="Player">
                <b>{playerName}</b>
            </p>
            <p className="right" title="Level Reached">
                {levelReached}
            </p>
        </div>
    );
}

export default Player;


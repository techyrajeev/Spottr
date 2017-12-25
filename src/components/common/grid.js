import React       from 'react';
import Cell        from './cell';

const Grid = ({gridSize}) => {
    return (
        <div className="grid">
            {
                Array(gridSize).fill().map((_,i) => <GridRow
                    rowId     = {i}
                    key       = {i}
                    cellCount = {gridSize}
                />)
            }
        </div>
    );
};

const GridRow = ({rowId, cellCount}) => {
    const width = (100/cellCount) - 1;
    return (
        <div className="grid-row">
            {
                Array(cellCount).fill().map((_,i) => <Cell
                    cellId = {`${rowId}${i}`}
                    key    = {`${rowId}${i}`}
                    width  = {width}
                />)
            }
        </div>
    );
}

export default Grid;

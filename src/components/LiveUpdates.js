import React from 'react';
import '../style/LiveUpdates.scss';
import LivePlot from './LivePlot';

const LiveUpdates = props => {
    return (
        <div className="LiveUpdates">
            <div className="header2">
                <h1>Live Updates</h1>
                <hr/>
                <div className="graphs">
                    <LivePlot />
                </div>
            </div>
        </div>
    )
}

export default LiveUpdates;
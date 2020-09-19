import React from 'react';
import '../style/Group.scss';
import Machine from './Machine';

const Group = props => {
    var machs=[];
    for(var i=0; i<props.creds.machines.length; i++){
        machs.push(<Machine creds={ props.creds.machines[i] } num={i+1} />);
    }
    return (
        <div className="Group">
            <div className="innerDiv" style={{borderLeft: `25px solid ${props.creds.color}` }}>
                <h2>{props.creds.name}</h2>
                <h4>{props.creds.desc}</h4>
                
            <div className="machDiv">
                    {machs}
                </div>
            </div>
        </div>
    )
}

export default Group;
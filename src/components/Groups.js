import React from 'react';
import '../style/Groups.scss';
import Group from './Group';

const Groups = props => {
    var elements=[];
    for(var i=0; i<props.groups.length; i++){
        elements.push(<Group creds={ props.groups[i] } />);
    }
    return (
        <div className="Groups">
            {props.groups.length > 0 ? <div className="header1">
                <h1>Groups</h1>
                <hr/>
                {elements}
            </div> : null}
        </div>
    )
}

export default Groups;
import React from 'react';
import '../style/Machine.scss';

const Machine = props => {
    console.log(props);
    return (
        <div className="Machine">
            <h3>Machine {props.num}</h3>
            <h5>MAC Address: {props.creds.macAddress}</h5>
            <h5>IPV4: {props.creds.ipv4}</h5>
            <h5>Message Length: {props.creds.message_length}</h5>
            <h5>Packet Size: {props.creds.packet_size}</h5>
            <img src="./demoMachine.png" width="200px"/>
        </div>
    )
}

export default Machine;
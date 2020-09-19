import React from 'react';
import '../style/Pictures.scss';

const Pictures = props => {
    return (
        <div className="Pictures">
            <div className="header3">
                <h1>Data Analytics</h1>
                <hr/>
                <img src="./pic1.png" width='500px'></img>
                <img src="./pic2.png" width='500px'></img>
                <img src="./pic3.png" width='500px'></img>
                <img src="./pic4.png" width='500px'></img>
            </div>
        </div>
    )
}

export default Pictures;
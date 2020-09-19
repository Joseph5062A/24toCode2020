import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../style/AuthPage.scss';
import Alert from './Alert';

let Auth = props => {
    const [pword, setPword] = useState('');
    const [showPasswordAlert, setShowPasswordAlert] = useState(false);
    const onPwordChange = event => {
        setPword(event.target.value);
    }

    return (
        <div>
            {showPasswordAlert ? <Alert handleClose={() => setShowPasswordAlert(false)} message="Incorrect password, please retry."/> : null}
            <Form className="loginBox">
                <img
                        src="/24toCodeLogo.png"
                        className="d-inline-block align-top"
                        alt="24toCode"
                />
                <Form.Group controlId="formBasicEmail" className="group" >
                    <Form.Control type="email"
                    placeholder="Email"
                    className="text-center"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="group">
                    <Form.Control type="password"
                    placeholder="Password"
                    className="text-center"
                    value={pword}
                    onChange={onPwordChange.bind(this)}/>
                </Form.Group>
                <Button variant="outline-success" type="submit" onClick={pword === "msoe4me" ? props.logIn : () => setShowPasswordAlert(true)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Auth;
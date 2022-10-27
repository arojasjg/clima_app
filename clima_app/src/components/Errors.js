import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = (props) => {

    const errorMessage = props.errorMessage;

    if (!errorMessage) {
        return (
            <div></div>
        )
    }

    if (errorMessage.includes('API')) {
        return (
            <Alert variant='danger'>
                <Alert.Heading>{errorMessage}</Alert.Heading>
            </Alert>
        )
    }

    return (
        <Alert variant='danger'>
            <Alert.Heading>{errorMessage}</Alert.Heading>
            <p>correct the city name, then try again.</p>
        </Alert>
    );
}

export default Error;
import React from 'react';
import Alert from 'react-bootstrap/Alert';


function AlertCustom (props) {

    const styles = {
        alert: {
            marginTop:"10px"
        }  
    };

    return(
        <Alert  variant= {props.variant} style= {styles.alert}>
            {props.text}
        </Alert>
    );
}

export default AlertCustom;
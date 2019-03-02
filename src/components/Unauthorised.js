import React, { Component } from 'react';
import firebase from "firebase"
import styled from 'styled-components'

class Unauthorised extends Component {
    render() {
        return(
            <div>
                <h1>You are not authorised to be here!</h1>
            </div>
        )
    }
}

export default Unauthorised
import React, { Component } from 'react';
import firebase from "firebase"
import styled from 'styled-components'

class ManagerDashboard extends Component {
    /* componentWillMount() {
        if (this.props.user!== "islam.sayed8@gmail.com") {
            window.history.pushState(null,"", "/not-enough-authority")
            window.history.go()
        }
    } */
    render() {
        return(
            <div>Iam manager</div>
        )
    }
}

export default ManagerDashboard
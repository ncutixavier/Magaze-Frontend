import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <h1>Forgot Password</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Shops extends Component {
    render() {
        return (
            <div>
                <h1>Shops</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Shops)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button } from '@material-ui/core';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class RegisterUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    // handleClose = () => {
    //     this.setState({ open: !this.props.open })
    // };

    render() {
        return (
            <div>
                <Dialog open={this.props.open}>
                    <DialogTitle id="customized-dialog-title"
                        onClose={() => this.handleClose}>
                        <Typography variant="h3" color="primary">Register a user</Typography>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus color="primary" onClick={this.handleClose}>
                            <Typography variant="h6" color="primary">Save</Typography>
                        </Button>
                        <Button autoFocus color="error" onClick={this.handleClose}>
                            <Typography variant="h6" color="error">Close</Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUsers)

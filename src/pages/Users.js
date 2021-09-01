import React, { useState } from 'react';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import GetUsers from '../components/GetUsers'
// import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import RegisterUsers from '../components/RegisterUsers';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        button: {
            fontSize: '1.5rem',
        },
        buttonGrid: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
        }
    };
});

const Users = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container className={classes.root}>
            <Grid container alignItems="center">
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Typography variant="h3" color="primary">
                        USERS
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}
                    className={classes.buttonGrid}
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        startIcon={<Add />}
                        onClick={handleOpen}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <GetUsers />
            <RegisterUsers open={open} handleClose={handleClose}/>
            {/* <Dialog open={open}>
                <DialogTitle id="customized-dialog-title"
                    onClose={() => setOpen(!open)}>
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
                    <Button autoFocus onClick={() => setOpen(!open)} color="primary">
                        <Typography variant="h6" color="primary">Save</Typography>
                    </Button>
                    <Button autoFocus onClick={() => setOpen(!open)} color="error">
                        <Typography variant="h6" color="error">Close</Typography>
                    </Button>
                </DialogActions>
            </Dialog> */}
        </Container>
    );
}

export default Users;

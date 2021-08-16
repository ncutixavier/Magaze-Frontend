import React from 'react';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import GetProducts from '../components/GetProducts'

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

const Products = () => {

    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <Grid container alignItems="center">
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Typography variant="h3" color="primary">
                        PRODUCTS
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
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <GetProducts />
        </Container>
    );
}

export default Products;

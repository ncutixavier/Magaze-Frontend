import React from 'react'
import { makeStyles, Grid, Container } from '@material-ui/core'
import StatsCard from '../components/StatsCard'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        }
    }
})

function Homepage() {
    const classes = useStyles()
    const stats = [
        {
            icon: <BeachAccessIcon />,
            text: 'Total Users',
            count: 300
        },
        {
            icon: <BeachAccessIcon />,
            text: 'Total Shops',
            count: 150
        },
        {
            icon: <BeachAccessIcon />,
            text: 'Total Users',
            count: 301
        },
        {
            icon: <BeachAccessIcon />,
            text: 'Total Shops',
            count: 151
        }
    ]
    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                {stats.map(stat=> (
                    <Grid key={stat.count} item xs={12} sm={6} md={3} lg={3}>
                        <StatsCard stat={stat} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Homepage

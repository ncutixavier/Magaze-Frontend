import React from 'react'
import { Card, IconButton, Avatar } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import SpaIcon from '@material-ui/icons/Spa';
import { makeStyles } from '@material-ui/core'
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
// import { blue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => {
    return {
        avatar: {
            color: ''
        },
        grey: {
            color: '#084298',
            backgroundColor: '#cfe2ff'
        },
        cardheader: {
            fontSize: '2rem'
        }
    }
})
const StatsCard = ({ stat }) => {
    const classes = useStyles()

    return (
        <div>
            <Card elevation={0}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.grey}>
                            <BeachAccessIcon />
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <SpaIcon color="secondary"/>
                        </IconButton>
                    }

                    title={<h3>{stat.count}</h3>}
                    subheader={<h4>{stat.text}</h4>}
                />
            </Card>
        </div>
    )
}

export default StatsCard

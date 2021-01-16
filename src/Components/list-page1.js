import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames'
import CasinoIcon from '@material-ui/icons/Casino';

const pageStyles = makeStyles((theme) => ({
    root : {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: "100vh"
      },
    
    sidebar : {
        backgroundColor: "#384B52",
        color : "white"
    },
    icon : {
        fontSize : "100rm"
    }
}))

export default function ListPage(){


    const classes = pageStyles();
    const [users,setUsers] = useState([]);
    const [mydata,setData] = useState([])
    useEffect(() => {
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            .then(data => data.json())
            .then(data => {setUsers(data); setData(data)});
    },[])
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <Paper className={ classNames(classes.sidebar, classes.paper)  } elevation={1}>
                      <CasinoIcon style={{fontSize : "500%",WebkitTransform : 'rotate(45deg)' }} /> 

                      <h4>Playing 9</h4>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper} elevation={1}>xs=12</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
import React from 'react'
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#14213d',
      },
      gridList: {
        width: 500,
        height: 450,
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
  }));

function Output(props) {
    const classes = useStyles();
    return (
        <div>
        {
            props.giphy[0] ?
            props.giphy[0].map(el=>{
                return(
                    <div className={classes.root}>
                    <GridList className={classes.gridList} cols={3}>
                        <GridListTile>
                        <iframe 
                            src={el.embed_url}
                            frameBorder="0" 
                            style={{width: '300px', height: '200px'}}
                        ></iframe>
                        </GridListTile>
                    </GridList>
                    <div>
                    <Avatar alt="Remy Sharp" src="./images/avatar.jpeg" className={classes.large} />
                    <p
                    styles={{
                        fontSize: '30px',
                        marginLeft: '5%',
                    }}
                    >@e_bekeshev</p>
                    </div>
                    </div>
                    
                )
            })
            :<h1>Данных нет</h1>
        }
        </div>
    )
}
function mapStateToProps({giphy}){
    return {giphy}
}
export default connect(mapStateToProps)(Output)

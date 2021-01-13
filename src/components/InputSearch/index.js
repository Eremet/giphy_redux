import React, { useState} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGiphy } from '../../action'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
}));

function InputSearch(props) {
    const classes = useStyles();
    const [val, setVal]=useState('')
    const searchGiphyByName = event => {
        event.preventDefault();
        props.getGiphy(val)
        setVal('')
    }
    return (
        <div 
            style={{
                backgroundColor: '#fca311',
                marginTop: '-4%'
            }}
        >
            <div style={{
                backgroundColor: '#e5e5e5'
            }}>
                <p
                style={{
                    fontSize: '50px',
                    marginLeft: '40%',
                    paddingTop: '2%',
                    paddingBottom: '2%',
                }}
                >Giphy world!</p>
            </div>
            <form 
                onSubmit={searchGiphyByName}
            >
                <TextField 
                style={{
                    marginTop: '-2%',
                    marginLeft: '42%',
                    marginBottom: '1%'
                }}
                id="outlined-basic"
                label="enter name by Giphy" 
                variant="outlined"
                type="text"
                value={val}
                onChange={(event)=>{
                    setVal(event.target.value)
                }} />
                <Button
                    style={{
                        marginLeft: '45%',
                        marginBottom: '2%',
                    }}
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </form>        
        </div>
    )
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getGiphy}, dispatch)
}
export default connect(null, mapDispatchToProps)(InputSearch)
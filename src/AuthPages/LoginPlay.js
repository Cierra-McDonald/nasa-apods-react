import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signUpNewUser } from '../ApodsPages/apiUtilis';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      background: '',
    },
  },
}));


export function BasicTextFields( props ) {
    const classes = useStyles();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const handleEmail = async (e) => { 
        e.preventDefault();
     
        await setEmail(e.target.value);
       
    }
    const handlePassword = async (e) => { 
        e.preventDefault();
        await setPassword(e.target.value);
        
    }

    const handleChange = async (e) => {
        e.preventDefault();
       
        try {
            const user = await signUpNewUser(email, password);

            props.handleUserChange(user);
            props.history.push('/')
        } catch(e) { setError(e.response.body.error)

        }
    } 

  return (
    <form className={classes.root} noValidate autoComplete="off">
        {error && <h5 style={{ color: 'red'}}>Uh oh, {error}, please try again!</h5>}
      <TextField id="standard-basic" label="Email" onChange={handleEmail} />
      <TextField id="standard-basic" label="Password" onChange={handlePassword}/>
        <Button variant="contained" color="primary" onClick={handleChange}>
        SignUp!
        </Button>
   
    </form>
  );
}


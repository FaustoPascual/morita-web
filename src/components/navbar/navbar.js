import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './navbar.css';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  function fausto(){
    console.log("hola")
  }

  return (
    <div className={classes.root}>
      <AppBar className="fondoVioleta" position="static">
        <Toolbar>
          <IconButton onClick={ () => { fausto() } } edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         
          
            <Typography variant="h6" className={classes.title}>
              <Link className="sacarDecorador" to="/">
                Morita natural :)
              </Link> 
            </Typography>
         

          <Link className="sacarDecorador" to="/contacto">
            <Button className="fuenteBlanca " color="inherit">Contacto</Button>
          </Link> 

        </Toolbar>
      </AppBar>
    </div>
  );
}
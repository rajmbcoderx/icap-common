import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import ArrowBackIcon            from '@material-ui/icons/ArrowBack';
import { Link}                  from 'react-router-dom'
import  Logo                    from './images/logo.png' 
import Navbar                   from './Navbar' 


/** Main view of the application to display all the targeted use cases */
const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:       1, 
    },
    container:  {
        display:        'grid',
        gridGap:        theme.spacing(2),
    },
    gridItem:   {
      border:           '1px solid lightblue',
      padding:          theme.spacing(2),
      boxShadow:        '1px 1px 2px #ccc',
      margin:           '20px 4%',
      borderRadius:     '5px',
      borderBottom:     '5px solid lightblue',
      position:         'relative'
    },
    header:{
        background:     '#0c3451',
        width:          '100%',
        float:          'left',
        marginBottom:   '10px'    
    },
    logoSection:{
        float:           'left'
    },
    logo:{
        height:         '60px',
        padding:        '0 20px'
    },
    anchBtn: {
        color:          '#fff',
        padding:        '20px 10px 20px 20px',
        float:          'left'
    }
  }));


function Header({showBack}){
    const classes = useStyles(); 
    return(        
        <div className={classes.header} >
            {
                showBack && <Link to="/home"><ArrowBackIcon  className={classes.anchBtn}/></Link>
            }
            <div className={classes.logoSection}>
                <img src={Logo}  className={classes.logo}></img> 
            </div> 
            <Navbar></Navbar>
        </div>
        
    )
}

export default Header;

import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import BugReportIcon            from '@material-ui/icons/BugReport';

const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:               1, 
    },
    navbar:{
        float:                  'right',
            '& ul':{
                padding:        '10px 30px',
                margin:         '0'
            }
    },
    navItem:{
        listStyle:              'none',
        position:               'relative',
        float:                  'left',
            '&:hover':{
                background:     '#144e78',
                borderRadius:   '2px'
            },       
    },   
    navBtn:{
        color:                  '#fff',
        background:             'transparent',
        border:                 'none',       
        float:                  'left',    
        fontSize:               '15px',
        borderRadius:           '3px',
        padding:                '10px 10px',
        textDecoration:         'none',
            '&:focus':{
                border:         '0',
                outline:        '0'
            }     
    },
    matIcon:{
        float:                  'left',
        fontSize:               '20px',
        marginRight:            '3px'
    }        
 }));
 
//onClick={() => shell.openExternal('https://github.com/k8-proxy/glasswall-desktop/issues/new')}
function Navbar(){
    const classes = useStyles();
   return(
        <div className={classes.navbar}>                
            <ul>
                <li className={classes.navItem}> 
                    <a className={classes.navBtn}  ><BugReportIcon className={classes.matIcon}/> Report issue </a>
                </li>
              </ul>
        </div> 
    )
}

export default Navbar;
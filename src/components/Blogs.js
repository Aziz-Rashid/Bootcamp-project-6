import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Server from './loadd.gif'
import Servers from './ser.gif'
import loading from './loding.gif'
import nice from './com.gif'
import k from './k.gif'
import Glhy from './Glhy.gif'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './Nav.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [istrue, settrue] = useState(false)

    setTimeout(()=>{
      settrue(true)
    },5000)
    useEffect(() =>{
      Aos.init({duration: 2000})
  },[])
  return (
    <div>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} data-aos="flip-left">
            {istrue === false? <div><img width="100%" src={Server} alt=""/></div>: <div><img src={Servers} alt=""/></div>}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} data-aos="fade-up-right">
              <p className="txt">It is a long establishedor Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old non-characteristic words etc. dummy text of the printing and type of power lorem empson fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). or non-characteristic words etc. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}  data-aos="flip-left">
        {istrue === false? <div><img width="100%" src={loading} alt=""/></div>: <div><img src={nice} alt="" width="100%" /></div>}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} data-aos="flip-up">
          <p className="txt">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical  interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </Paper>
      </Grid>
    </Grid>
  </div>
  <div className={classes.root}>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} data-aos="flip-left">
      {istrue === false? <div><img width="100%" alt="" src={k} /></div>: <div><img src={Glhy} width="100%" alt=""/></div>}
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} data-aos="fade-up-right">

      <p className="txt"> Accompanied English versions from the 1914 translation by H. Rackham. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </Paper>
    </Grid>
    <Grid item xs={12}>
            <p className="footer">Copyright © 2020 Muhammad Aziz, Inc.</p>
    </Grid>
  </Grid>
</div>
</div>
  );
}
import React,{useState} from 'react';
import Nav from './components/Nav'
import Body from './components/Body'
import Animation from './components/Animation'
import Blogs from './components/Blogs'
import load from './components/page.gif'
function App() {
  const [loader,setloader] = useState(false)
  setTimeout(()=>{
    setloader(true)
  },5000)
  if(loader === false){
      return (
        <div>
        <img src={load} width="100%" alt=""/>
        </div>
      )
  }else{

  
  return (
    <div >
      <Nav />
      <Body />
      <Animation />
      <Blogs />
      
    </div>
  );
}
}

export default App;

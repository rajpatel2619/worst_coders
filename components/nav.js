import React from 'react'
import 'tachyons'
import wc1 from '../assets/logo/wc23.png'
import { Link } from 'react-router-dom';

export default class Nav extends React.Component{
    render(){
        return(
          
              <header className="bg-transparent white-80 tc pv1 avenir overflow-hidden " style={{zIndex:2000,}}>
<img src={wc1} width="200" className="grow" />
{/* <p className="f1">\ ( o . o ) /</p> */}
  <h1 className="mt2 mb0 baskerville grow fw1 f1 green  b "  style={{fontFamily:'Recursive'}}>Worst Coders</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked grow hover-red">The Worst Place for coders</h2>
  <nav className="bt bb  tc mw7 center mt4">
  <Link to="/"> <a className="f6 f5-l link bg-animate blue  hover-green dib pa3 ph4-l" >Home</a></Link>
 
  <Link>  <a className="f6 f5-l link bg-animate blue hover-green dib pa3 ph4-l">About</a></Link>
  <Link><a className="f6 f5-l link bg-animate blue  hover-green dib pa3 ph4-l" >Courses</a></Link>
  <Link> <a className="f6 f5-l link bg-animate blue  hover-green dib pa3 ph4-l" >Join Us</a></Link>
  </nav>
</header>

        )
    }
}
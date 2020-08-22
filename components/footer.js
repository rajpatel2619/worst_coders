import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
          <div style={{textAlign:'center',color:"white"}} className="mt5">

				  <br /><br />
				  <a href="https://www.instagram.com/worstcoders/" target="__blank"><i className="white pink f3 fab grow fa-instagram"></i></a>
				  <a href="https://www.facebook.com/Worst-coders-105388321265189" target="__blank"><i className="white blue f3 mh3 grow fab fa-facebook"></i></a>
				  <a href="https://wa.me/918543832619?text=I'm%20interested%20in%20your%20car%20for%20sale" target="__blank"><i className="white green f3 mr3 grow fab fa-whatsapp"></i></a>
				  <i className="white red f3 grow fab fa-youtube"></i>
		<br/><br/>
      <p  className="lh-copy">
          &copy; Copyright | All Rights Reserved <br />Designed with &nbsp;
				  <i className="white red  fas fa-heart"></i>
      </p>
          </div>
        )
    }
}
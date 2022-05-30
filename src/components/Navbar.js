import React from 'react'

export default function Navbar() {

 
 

  return (
    <nav className="navbar navbar-expand-lg" style={{background: "white"}} id="nav">
     <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong className="m">M</strong><strong className="u">U</strong>
    <strong className="d">D</strong><strong className="a">A</strong><strong className="s">S</strong>
    <strong className='I'>I</strong><strong className='r'>R</strong>  <strong className='b'>B</strong>
    <strong className='h'>H</strong><strong className='a2'>A</strong><strong className='t'>T</strong>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
       
        
        
      </ul>
      <form className="d-flex" role="search">
    
        <a href="https://wa.me/+919622752412" className="btn btn-outline-success" id="navHire" data-bs-toggle="tooltip"  
        data-bs-placement="right"  title="Let's talk on Whatsapp" type="submit">
          <i className="fa fa-whatsapp" aria-hidden="true"> Contact Me</i></a>
      </form>
    </div>
  </div>
</nav>
  )
}



import React from 'react'

export default function Welcome() {
  return (
  <>
   <div className="back">
       <div className="card text-center" id="card">
          <div className="card-body">
            <img src="my-img.jpg" alt="My Image" id="my-photo"></img>
            <h5 className="card-title"></h5>
            <h1 className="card-text">Hello, I'm Mudasir</h1>
            <h3 className="text">Welcome to my portfolio website.</h3>
          </div>
       </div>
   </div>
   <div className="back2" id="back2">
       <div className="card text-center" id="card2">
          <div className="card-body">
            
            <h1 className="card-title" id="title2">Who am I?</h1>
           
            <p className="text2" id="t2">My name is Mudasir. I have a Master's degree in Information and Technology from University
            of Kashmir. I am a passionate Web designer cum developer. I love to create beautiful, responsive and user 
            friendly user interfaces(UI's). I have an experience of more than 2 years in the field of Web development. 
            <br/>In the mean time I have developed many websites and web applications for a number of clients and more 
            importantly they were very satisfied with my work.</p>
          </div>
       </div>
   </div>
   <div className="back3" id="back3">
       <div className="card text-center" id="card3">
          <div className="card-body">
            
            <h1 className="card-title" id="title2">What are my skills?</h1>
             <div class="all-skills">
              <div class="skills">
              <h3 className="skillH3">Languages which I speak:</h3>
              <ul className="skillSet">
                <li>&#9995;HTML</li>
                <li>&#9995;CSS</li>
                <li>&#9995;Javascript</li>
                <li>&#9995;Typescript</li>
                <li>&#9995;Bootstrap</li>
                <li>&#9995;React</li>
                <li>&#9995;PHP</li>
                <li>&#9995;MySql</li>
                <li>&#9995;Outsystems</li>
              </ul>
              </div>
              <div class="tools">
              <h3 className="skillH3">Tools and resources which I use mostly:</h3>
              <ul className="skillSet">
                <li>&#10150;Visual Studio</li>
                <li>&#10150;Git</li>
                <li>&#10150;Github</li>
                <li>&#10150;Stackoverflow</li>
                <li>&#10150;Linux</li>
                <li>&#10150;Windows</li>
                <li>&#10150;Google</li>
                <li>&#10150;Jira</li>
              </ul>
              </div>
              <div class="soft-skills">
              <h3 className='skillH3'>Analytical and Interpersonal skills:</h3>
              <ul className="skillSet">
                <li>&#10004;Logical thinking</li>
                <li>&#10004;Problem solving</li>
                <li>&#10004;Research</li>
                <li>&#10004;Creativity</li>
                <li>&#10004;Responsibility</li>
                <li>&#10004;Communication skills</li>
                <li>&#10004;Active listening</li>
                <li>&#10004;Flexibility</li>
                <li>&#10004;Patience</li>
                <li>&#10004;Positivity</li>
              </ul>
             </div>
            </div>
          </div>
       </div>
   </div>
   <div className="cr">
   <h1 style={{textAlign: "center", marginTop: "20px", color: "white", fontFamily: "cursive"}}>What clients say about me?</h1>
   </div>
   <div className="back4">
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="card text-center" id="card-review">
        <div className="card-body">
        <h5 className="card-title" >Prakash Agarwal</h5>
        <p className="card-text" id="text-review">"Mudasir is a wonderful guy to work with. 
        We hired him a number of times and he worked exactly 
        as per our expectation and requirement. I highly recommend this guy."</p> 
        </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="card text-center" id="card-review">
        <div className="card-body">
        <h5 className="card-title" >Zentori Walsi</h5>
        <p className="card-text" id="text-review">"It was worth paying money to this man for the lovely crafted website 
        that he developed for
        me. He is a guinness. Would love to work with him in future."</p> 
        </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="card text-center" id="card-review">
        <div className="card-body">
        <h5 className="card-title" >Micheal Gray</h5>
        <p className="card-text" id="text-review">"I was so amazed to see the dedication of this man. 
        He always replied immediately and 
        delivered the quality product on time. Huge thanks to you Mudasir."</p> 
        </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button"  data-bs-target="#carouselExampleControls" 
  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button"  data-bs-target="#carouselExampleControls" 
  data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>
   <div className="footer">
   <div className="card text-center">
  <div className="card-body" id="footer-card">
    <h5 className="card-title" id="footer-head">Get in touch on the Internet</h5>
    <a href="https://www.facebook.com/profile.php?id=100014368146725" className="icon"><i className="fa fa-facebook-square" aria-hidden="true" data-bs-toggle="tooltip" 
    data-bs-placement="right" title="Visit Mudasir's Facebook account" style={{color: "#4267B2"}}></i></a>
    <a href="https://twitter.com/MudasirBhat007" className="icon"><i className="fa fa-twitter-square" aria-hidden="true" data-bs-toggle="tooltip" 
    data-bs-placement="right" title="Visit Mudasir's Twitter account" style={{color: "#1DA1F2"}}></i></a>
    <a href="https://www.instagram.com/7mikial/" className="icon"><i className="fa fa-instagram" aria-hidden="true" data-bs-toggle="tooltip" 
    data-bs-placement="right" title="Visit Mudasir's Instagram account" style={{color: " #833AB4"}}></i></a>
    <a href="https://youtube.com/channel/UCDOq9N8tKqRjm1Ps1tdXTGw" className="icon">
      <i className="fa fa-youtube-square" aria-hidden="true" data-bs-toggle="tooltip" 
    data-bs-placement="right" title="Visit Mudasir's Youtube channel" style={{color: "#FF0000"}}></i></a>
    <a href="https://github.com/MuddyonGit/" className="icon"><i className="fa fa-github-square" aria-hidden="true" data-bs-toggle="tooltip" 
    data-bs-placement="right" title="Visit Mudasir's Github account" style={{color: "#171515"}}></i></a>
  </div>
  <div className="card-footer text-muted">
  <i className="fa fa-envelope" aria-hidden="true" id="foot-email"> mudasirmailg@gmail.com</i>
  </div>
</div>
   </div>
  </>
 )
}


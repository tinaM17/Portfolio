import "./home.css"

function Home() {
  return (
    <div id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="name">Tina</span>
        </span>
        <span>FullStack Developer👩🏻‍💻</span>
        <p className="introPara">
          I'm a full-stack web developer specializing in building and 
          <br/>
          designing exceptional digital experiences in both front-end and
          <br />
          back-end web application
        </p>
        <div className="btn">
          <button className="hireMe"
          onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:"smooth"});
          }}
          >
            <img src="./hiring.png" alt="" className="icon" />
            Hire Me
          </button>
          <a className="download" href="./Tina_Majumder_Resume.pdf" download="Tina_Majumder_Resume.pdf">
            <img src="./resume.png" alt="" className="icon" />
            Download Resume
          </a>
        </div>
      </div>
      <img src="./Myimage.png" alt="myImg" className="bg" />
    </div>
  );
}

export default Home

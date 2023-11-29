import "./about.css";
import React, { useRef, useEffect } from "react";

function About() {
  const aboutRef = useRef(null);
  const cardDetails = [
    {
      image: "./frontend.jpeg",
      title: "Frontend Developer",
      description: `I am skilled in HTML, CSS, and
          JavaScript, as well as popular front-end frameworks such as React. I
          have a keen eye for design and am able to create visually appealing
          and intuitive user interfaces.`,
    },
    {
      image: "./backend.png",
      title: "Backend Developer",
      description: `I am experienced in server-side languages
          such as Node.js, Java and am familiar with popular databases such as
          MySQL, MongoDB.`,
    },
  ];
  // Intersection Observer setup
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a class to trigger the transition effect
        aboutRef.current.classList.add("in-view");
      } else {
        // Remove the class if not in view
        aboutRef.current.classList.remove("in-view");
      }
    });
  };
  return (
    <div id="about" ref={aboutRef} className="about">
      <div className="aboutText">
        <h2 className="title">About Me</h2>
        <span className="who">Who I am</span>
        <span className="detail">I am a Full-Stack Developer</span>
        <p className="description">
          As a full-stack web developer, I have the skills and experience to
          build web applications from start to finish. I am proficient in both
          front-end and back-end development, and have a deep understanding of
          how these two components work together to create a seamless user
          experience. I am able to architect scalable and
          secure systems that can handle large amounts of data and traffic. In
          addition to my technical skills, I am also an excellent communicator
          and collaborator. I am able to work effectively with designers,
          product managers, and other developers to ensure that projects are
          delivered on time and to the highest standard. Overall, I am
          passionate about creating high-quality web applications that provide
          real value to users. I am always learning and expanding my skills, and
          am excited to take on new challenges and projects.
        </p>
      </div>
      <div className="cards">
        {cardDetails.map((card) => (
          <Card
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  const { image, title, description } = props;
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default About;

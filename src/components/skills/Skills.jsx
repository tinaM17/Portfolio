import './skill.css'

function Skills() {
  const skillsArray = [
    {
      key: 1,
      name: "JAVA",
      image: "./java.png",
    },
    {
      key: 2,
      name: "JAVASCRIPT",
      image: "./java-script.png",
    },
    {
      key: 3,
      name: "HTML",
      image: "./html-5.png",
    },
    {
      key: 4,
      name: "CSS",
      image: "./css-3.png",
    },
    {
      key: 5,
      name: "REACT",
      image: "./science.png",
    },
    {
      key: 6,
      name: "NODE JS",
      image: "./nodejs.png",
    },
    {
      key: 7,
      name: "GIT",
      image: "./github.png",
    },
    {
      key: 8,
      name: "MySQL",
      image: "./mysql.png",
    },
  ];
  return (
    <div className='skills'>
      <div className="heading">
        <h3>Skills</h3>
        <h2>What I Can Do</h2>
      </div>
      <div className='skillCard'>
        {skillsArray.map((skill)=>(
             <div key={skill.key} className="skill">
                <img src={skill.image} alt="" />
                <span>{skill.name}</span>
             </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

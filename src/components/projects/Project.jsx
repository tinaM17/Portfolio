import './project.css'

function Project() {
 const projects = [
   {
     id: 1,
     name: "CoursePro",
     tech: "Mern Stack",
     image: "./CourseApp.png",
     link: "https://github.com/tinaM17/CoursePro",
   },
   {
     id: 2,
     name: "User Management Dashboard",
     tech: "Mern Stack",
     image: "./User.png",
     link: "https://github.com/tinaM17/UserManagementFrontend",
   },
   {
     id: 3,
     name: "Daily Planner",
     tech: "Spring boot, Jsp",
     image: "./DailyPlanner.png",
     link: "https://github.com/tinaM17/DailyPlanner",
   },
   {
     id: 4,
     name: "Simon Game",
     tech: "Html, Css, Javascript",
     image: "./SimonGame.png",
     link: "https://github.com/tinaM17/SimonGame",
   },
 ];
  return (
    <div className="projects">
      <div className="heading">
        <h3>Projects</h3>
        <h2>What I've Built</h2>
      </div>
      <div className="projectCards">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.image} alt="" />
            <div className="details">
              <div>
                <h3 className="projectName">{project.name}</h3>
                <span className="desc">{project.tech}</span>
              </div>
              <div className="info">
                <a href={project.link} target='_blank' className="more">
                  More Info
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project

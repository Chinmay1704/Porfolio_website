/* eslint-disable react/jsx-key */
import "../components/Project-Descr/ProjectDes.css";
import projects from "../components/projects.json";

function ProjectDes() {
  return (
    <>
      <main>
        <section className="project-section container-fluid">
          <div className="container">
            <div className="project-heading row">
              <span className="H1-U">More Projects</span>

              <p className="Para-M">
                I had pleasure of working on these Awesome Projects.
              </p>
            </div>

            <div className="project-content row">
              {projects.map((item) =>{
                return <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex">
                    <img
                      src={item.image}
                      className="img rounded-start"
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mx-4">
                      <h5 className="card-title H2-U">
                        {item.title}
                      </h5>
                      <p className="card-text Para-U">
                        {item.description}
                      </p>

                      <a
                        className="card-links Para-U"
                        href={item.Github_Link}
                        target="_blank"
                        rel="noreferrer"
                      >
                      {item.title}
                      </a>

                      <div className="card-tech-stack">
                        {item.tech.map((skill) =>{ return <button type="button" className="btn btn-sm">
                          {skill}
                        </button>})}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>})}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProjectDes;

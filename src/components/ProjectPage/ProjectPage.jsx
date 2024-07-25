import "./ProjectPage.css";
import images from "../projects.json"
import Corousel from "./Corousel"

function ProjectPage() {
  return (
    <>
      <section className="projects">
        <div className="project-container container-fluid">
          <div className="container">
            <div className="project-heading row">
              <span className="H1-U">Works</span>

              <p className="Para-M">
                I had pleasure of working on these Awesome Projects.
              </p>
            </div>
          </div>
          <Corousel projects={images} />
        </div>

        
      </section>
    </>
  );
}

export default ProjectPage;

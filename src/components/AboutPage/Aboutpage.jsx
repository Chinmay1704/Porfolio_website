import "./AboutPage.css";
// import AboutImg from "../media/About.png"
import AboutImg from "D:/Personal/Full Stack Development/PortFolio website/Portfolio_react_vite/src/assets/About.png"

function AboutPage() {
  return (
    <>
      <section className="body">
        <div className="about-sec container-fluid">
          <div className="container">
            <div className="row">
              <div className="about-heading col-12">
                <span className="H2-U">About Me</span>
              </div>
            </div>

            <div className="about-container row">
              <div className="about-content col-lg-7 col-md-sm-12">
                <p className="Code-M">&lt;p&gt;</p>

                <span className="greeting Logo-M">Hello !</span>

                <div className="paras Para-M">
                  <p>
                    My name is Chinmay and I specialize in web developement that
                    utilizes <span className="skill">HTML</span>,
                    <span className="skill">CSS</span>,
                    <span className="skill">JS</span>,and{" "}
                    <span className="skill">REACT</span> etc.
                  </p>

                  <p>
                    I am a highly motivated individual and eternal optimist
                    dedicated to writing clear, concise, robust code that works.
                    Striving to never stop learning and improving.
                  </p>

                  <p>
                    When I&apos;m not coding, I am reading bolgs, or picking up some
                    new hands-on art project like{" "}
                    <span className="skill">Photography</span>.
                  </p>
                  <p>
                    I like to have my perspective and belief systems challenged
                    so that I see the world through new eyes.
                  </p>
                </div>

                <p className="Code-M">&lt;/p&gt;</p>
              </div>

              <div className="about-img col-lg-4 col-md-sm-12">
                <img
                  src={AboutImg}
                  alt="coding-on-laptop.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;

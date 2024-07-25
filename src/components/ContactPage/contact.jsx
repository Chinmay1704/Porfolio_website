
import "./contact.css";

function ContactMe() {
  return (
    <>
      <section id="formSection" className="contact">
        <div className="contact-container container-fluid">
          <div className="container">
            <div className="contact-heading">
              <span className="H1-U">Contact</span>

              <p className="Para-M">Tell me how can I help you...</p>
            </div>

            <div className="contact-line row">
              <span className="Logo-M">Send me a message</span>
            </div>
          </div>

          <div className="contact-form container">
              <div className="conc-name row">
                <div className="form-item col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name please"
                    />
                  </div>
                </div>

                <div className="form-item col-6">
                  <div className="Para-U form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email ID here" 
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-10 ">
                  <div className="Para-U form-group">
                    <textarea
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item  d-flex col-12 ">
                <a
                    href="/"
                    
                  >
                    <button type="button" className="btn Bottom-U">
                      Send Message <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;

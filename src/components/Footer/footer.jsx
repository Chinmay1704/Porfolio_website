import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer container-fluid Para-U">
          <span>&copy;2023 Chinmay K. All rights reserved.</span>

          <span>Privacy Policy</span>

          <span>Terms and Conditions</span>

          <div className="icons">
            <a href="/">
              <i className="fa-brands fa-instagram"></i> 
            </a>

            <a href="/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="/">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <span>
            Developed By <span className="name">Chinmay K</span>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

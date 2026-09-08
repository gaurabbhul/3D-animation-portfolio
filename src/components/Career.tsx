import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Broadway Infosys</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Full Stack Developer (MERN) training-built and deployed
              a live e-commerce platform with JWT authentication, role-based access
              control, admin dashboard, and a full product-to-cart-to-checkout flow.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon CertifyNow</h4>
                <h5>2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and delivered CertifyNow, a certificate status and verification
              system, in a 48-hour hackathon. Worked in a 3-person team owning
              frontend structure, form validation, and conditional rendering across
              sign-in and status-check flows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Training</h4>
                <h5>Broadway Infosys</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Frontend Developer training covering React.js, Next.js, Tailwind CSS,
              Bootstrap, and responsive design fundamentals. Built reusable component
              structures and UI-first projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. Information Technology</h4>
                <h5>Padmashree College, Kathmandu</h5>
              </div>
              <h3>2024–</h3>
            </div>
            <p>
              Currently pursuing a Bachelor's degree in Information Technology at
              Padmashree International College, Kathmandu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

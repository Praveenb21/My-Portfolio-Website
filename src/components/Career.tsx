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
                <h4>Event Management Head</h4>
                <h5>Alumni Association - GLA University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led the planning and execution of alumni events, 
              coordinating teams, logistics, and stakeholder 
              engagement to deliver successful programs and networking opportunities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design Head</h4>
                <h5>National Service Scheme</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Directed creative design efforts for NSS campaigns 
              and events, developing impactful visuals that strengthened 
              awareness and community involvement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Developer</h4>
                <h5>To - Let Globe</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and enhanced web application features using 
              modern technologies, contributing to responsive UI 
              development, API integration, and performance optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

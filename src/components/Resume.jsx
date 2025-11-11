import { FaFilePdf } from "react-icons/fa";

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header style={{ display: "flex" }}>
        <h2 className="h2 article-title">Resume</h2>
        <ul  style={{marginTop: "14px", marginLeft:"10px"}}>
          <li className="social-item">
            <a href="https://drive.google.com/file/d/1xWxma6PUn0MtYHvAxmXOt0QDiuGr2TE5/view" className="social-link" target='_blank'>
              <FaFilePdf /> (View)
            </a>
          </li>
        </ul>
      </header>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Delhi Technological University (Formerly DCE)
            </h4>
            <span>Dec 2020 — June 2024</span>
            <p className="timeline-text">
              Bachelor of Technology (CGPA: 8.78).  
             </p> 
             <p className="timeline-text">
              Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management, Operating Systems, Web Technology, Software Engineering.
            </p>
          </li>
        </ol>
      </section>

      {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Zupee — Software Development Engineer (Test)
            </h4>
            <span>Mar 2025 — Present | Gurugram</span>
            <p className="timeline-text">
              • Built the frontend of an automation tool (Essence) with automated test case creation, execution, and analytics using React.js, TypeScript, and Material-UI.  
              </p> <p className="timeline-text">
              • Developed ZTV Console (CMS) with content management, user administration, real-time analytics, and activity tracking.  
               </p><p className="timeline-text">
              • Leveraged modern frontend stack (React.js, Redux, Node.js, MongoDB, Tailwind CSS) for scalable applications.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Ibnheft — Software Engineer Intern
            </h4>
            <span>Aug 2024 — Feb 2025 | Remote</span>
            <p className="timeline-text">
              • Integrated APIs, designed reusable UI components, and improved modularity, achieving a 30% boost in development speed.  
              <p className="timeline-text">
              </p>
              • Delivered clean, maintainable, and scalable code using React.js, Redux, and Tailwind CSS.
            </p>
          </li>
        </ol>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React.js / Frontend Development</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Node.js & Express.js (Backend)</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">MongoDB & SQL</h5>
              <data value="75">75%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Data Structures & Algorithms</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Resume

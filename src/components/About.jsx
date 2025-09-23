
const About = ({ openModal }) => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
      <p>
      I'm a Software Development Engineer (Currently working at Zupee) with strong expertise in Full-Stack Development, specializing in building scalable and
      responsive web applications. I enjoy solving complex problems and transforming ideas into efficient, user-friendly products.
    </p>
    <p>
      My work spans across frontend and backend development, with hands-on experience in React.js, Node.js, Express, MongoDB, and
      modern UI frameworks like Tailwind CSS and Material-UI. I take pride in writing clean, maintainable code and creating
      intuitive interfaces that deliver seamless user experiences. 
      Having contributed to multiple impactful projects and solved 1200+ DSA problems, my aim is to bring technical excellence and creativity 
      together to build innovative solutions.
    </p>

      </section>

      {/* Services */}
    <section className="service">
  <h3 className="h3 service-title">What I'm doing</h3>
  <ul className="service-list">
    <li className="service-item">
      <div className="service-icon-box">
        <img src="/assets/images/icon-dev.svg" alt="frontend icon" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">Frontend Development</h4>
        <p className="service-item-text">
          Building responsive, scalable, and modern user interfaces using React.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </li>
    <li className="service-item">
      <div className="service-icon-box">
        <img src="/assets/images/icon-dev.svg" alt="backend icon" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">Backend Development</h4>
        <p className="service-item-text">
          Designing and implementing secure, high-performance APIs with Node.js, Express, and MongoDB.
        </p>
      </div>
    </li>
    <li className="service-item">
      <div className="service-icon-box">
        <img src="/assets/images/icon-app.svg" alt="fullstack icon" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">Full-Stack Projects</h4>
        <p className="service-item-text">
          Developing end-to-end applications from design to deployment, ensuring scalability and seamless user experience.
        </p>
      </div>
    </li>
    <li className="service-item">
      <div className="service-icon-box">
        <img src="/assets/images/icon-design.svg" alt="dsa icon" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">Problem Solving</h4>
        <p className="service-item-text">
          Solved 1200+ DSA problems across LeetCode, Codeforces, and CodeChef to strengthen algorithms and coding skills.
        </p>
      </div>
    </li>
  </ul>
</section>


      {/* Testimonials */}
      <section className="testimonials">
  <h3 className="h3 testimonials-title">Testimonials</h3>

  <ul className="testimonials-list has-scrollbar">
    <li className="testimonials-item">
      <div className="content-card" onClick={() => openModal({
        name: 'Ashutosh',
        avatar: '/assets/images/avatar-1.png',
        text: 'Ashutosh was impressed by the clean and scalable solutions I delivered. He highlighted my ability to break down complex problems into efficient and practical implementations.'
      })}>
        <figure className="testimonials-avatar-box">
          <img src="/assets/images/avatar-1.png" alt="Ashutosh" width="60" />
        </figure>
        <h4 className="h4 testimonials-item-title">Ashutosh</h4>
        <div className="testimonials-text">
          <p>
            Ashutosh was impressed by the clean and scalable solutions I delivered. He highlighted my ability to break down complex problems into efficient and practical implementations.
          </p>
        </div>
      </div>
    </li>

    <li className="testimonials-item">
      <div className="content-card" onClick={() => openModal({
        name: 'Divya',
        avatar: '/assets/images/avatar-2.png',
        text: 'Divya appreciated my frontend expertise and focus on UI/UX. She mentioned that the applications I built were intuitive, responsive, and met all project requirements on time.'
      })}>
        <figure className="testimonials-avatar-box">
          <img src="/assets/images/avatar-2.png" alt="Divya" width="60" />
        </figure>
        <h4 className="h4 testimonials-item-title">Divya</h4>
        <div className="testimonials-text">
          <p>
            Divya appreciated my frontend expertise and focus on UI/UX. She mentioned that the applications I built were intuitive, responsive, and met all project requirements on time.
          </p>
        </div>
      </div>
    </li>

    <li className="testimonials-item">
      <div className="content-card" onClick={() => openModal({
        name: 'Richa',
        avatar: '/assets/images/avatar-3.png',
        text: 'Richa valued my problem-solving mindset and strong backend development skills. She pointed out how I ensured secure APIs and smooth data flow across systems.'
      })}>
        <figure className="testimonials-avatar-box">
          <img src="/assets/images/avatar-3.png" alt="Richa" width="60" />
        </figure>
        <h4 className="h4 testimonials-item-title">Richa</h4>
        <div className="testimonials-text">
          <p>
            Gokul valued my problem-solving mindset and strong backend development skills. He pointed out how I ensured secure APIs and smooth data flow across systems.
          </p>
        </div>
      </div>
    </li>

    <li className="testimonials-item">
      <div className="content-card" onClick={() => openModal({
        name: 'Rohan',
        avatar: '/assets/images/avatar-4.png',
        text: 'Rohan admired my ability to deliver full-stack projects end-to-end. He appreciated my attention to detail and commitment to building reliable, scalable applications.'
      })}>
        <figure className="testimonials-avatar-box">
          <img src="/assets/images/avatar-4.png" alt="Rohan" width="60" />
        </figure>
        <h4 className="h4 testimonials-item-title">Rohan</h4>
        <div className="testimonials-text">
          <p>
            Rohan admired my ability to deliver full-stack projects end-to-end. He appreciated my attention to detail and commitment to building reliable, scalable applications.
          </p>
        </div>
      </div>
    </li>
  </ul>
</section>
    </article>
  )
}

export default About
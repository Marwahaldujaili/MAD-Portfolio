import React from "react";
import "../styles/About.scss";

function About() {
  return (
    <div className="about-content">
      <h1>About Me</h1>
      <section className="about-me">
        <p>
          I am Marwah Al-Dujaili a dedicated full-stack web developer based in
          Bremen, Germany, with over 14 years of experience as an Educational
          Technology Trainer in Dubai.
        </p>
        <p>
          A self-taught learner, I recently completed a Fullstack Web
          Development course at DCI Digital Career Institute, specializing in
          the MERN stack.
        </p>
        <p>
          Beyond coding, I am passionate about literature, photography, and
          creativity.
        </p>
      </section>
      <h2>My Skills</h2>

      <section className="skills">
        <section className="skills-sections">
          <h3>Web Developer</h3>
          <p>I love to code from scratch and bring ideas to life!</p>
          <h5>Languages and Tools</h5>
          <p>
            HTML/ CSS/ SCSS/ Bootstrap/ JavaScript/ MonogoDB/Express.js/
            React.js/ Node.js/ MaterialUI/ FontAwesome/ Git & Github/ Postman
          </p>
        </section>
        <section className="skills-sections">
          <h3>Trainer/Tutor</h3>
          <p>
            Passionate about teaching, I find fulfillment in assisting
            individuals in enhancing their IT skills.
          </p>
          <h5>Area of expertise</h5>
          <p>
            Web Development/ Classroom Management Tools/ Assessment and Survey
            Apps/ Operating Systems/ Microsoft Office/ Google Docs/ Others
          </p>
        </section>
        <section className="skills-sections">
          <h3>Designer</h3>
          <p>I enjoy designing and photo manipulation.</p>
          <h5>Tools</h5>
          <p>Adobe Photoshop/ Adobe Illustrator/ Canva/ Figma</p>
        </section>
      </section>
    </div>
  );
}

export default About;

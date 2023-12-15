import React from "react";
import "../styles/About.scss";

function About() {
  return (
    <div className="about-content">
      <h1>About Me</h1>
      <section className="about-me">
        <p>
          I am Marwah, a full-stack web developer based in Germany with
          over 14 years of experience as an Educational Technology Trainer in
          Dubai.
        </p>
        <p>
          A self-taught fast learner, I recently completed a Fullstack Web
          Development course at DCI in Berlin specializing in
          the MERN stack.
        </p>
        <p>
          Beyond coding, I am passionate about reading, baking, photography, and
          creativity.
        </p>
      </section>
      <h2>My Skills</h2>

      <section className="skills">
        <section className="skills-sections">
          <h3>Web Developer</h3>
          <p>
            I love to code from scratch and bring ideas to life!
          </p>
          <hr />
          <h5>Languages and Tools</h5>
          <p>
            HTML | CSS | SCSS | LESS | Bootstrap | JavaScript | MonogoDB
            |Express.js | React.js | Node.js | Vite | Tailwindcss | MaterialUI |
            FontAwesome | Git & Github | Postman | TypeScript
            {/* | Vue.js | Next.js
            | Flutter.dev | Shopify.dev */}
          </p>
        </section>
        <section className="skills-sections">
          <h3>Trainer/Tutor</h3>
          <p>
            Passionate about teaching & training.
          </p>
          <hr />
          <h5>Area of expertise</h5>
          <p>
            Web Development | Course Management Tools | Assessment and Survey
            Apps | Operating Systems | Microsoft Office | Google Docs
          </p>
        </section>
        <section className="skills-sections">
          <h3>Designer</h3>
          <p>
            I enjoy designing and creating digital content.
          </p>
          <hr />
          <h5>Tools</h5>
          <p>
            Adobe Photoshop | Adobe Illustrator | Canva | Figma | Adobe
            Captivate | Camtasia | Articulate
          </p>
        </section>
      </section>
    </div>
  );
}

export default About;

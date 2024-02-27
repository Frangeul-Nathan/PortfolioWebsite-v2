import "../assets/css/partials/skills/_skills.scss"
import "../assets/css/animations/skills_animation.scss"
import CV from "../assets/images/Nathan-CV.webp"
import { SkillProgressBar } from '../jquery/skillsprogressbar';


function Skills() {

  SkillProgressBar();

  return (
    <section className="skillSection">
      <h2 id="competences">Compétences</h2>
      <hr className="blackLign" />
      <div className='skillContainer'>
        <div className="skillTree">
          <div class="skills">
            <h3>Front-End</h3>
            <div class="skill">
              <div class="skill-name">HTML</div>
              <div class="skill-bar">
                <div class="skill-per" per="90"></div>
              </div>
              <div class="skill">
                <div class="skill-name">CSS / SCSS</div>
                <div class="skill-bar">
                  <div class="skill-per" per="75"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">Bootstrap / Tailwind</div>
                <div class="skill-bar">
                  <div class="skill-per" per="65"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">JavaScript</div>
                <div class="skill-bar">
                  <div class="skill-per" per="70"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">ReactJS</div>
                <div class="skill-bar">
                  <div class="skill-per" per="70"></div>
                </div>
              </div>
              <h3>Back-End</h3>
              <div class="skill">
                <div class="skill-name">NodeJS</div>
                <div class="skill-bar">
                  <div class="skill-per" per="70"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">ExpressJS</div>
                <div class="skill-bar">
                  <div class="skill-per" per="70"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">Sequelize</div>
                <div class="skill-bar">
                  <div class="skill-per" per="70"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">MySQL</div>
                <div class="skill-bar">
                  <div class="skill-per" per="60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="curriculumVitae">
          <h3>Curriculum Vitae</h3>
          <img src={CV} alt="" className="cv-image" />
        </div>
      </div>
    </section>
  );
}

export default Skills;

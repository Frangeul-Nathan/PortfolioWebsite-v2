import "../assets/css/partials/skills/_skills.scss"
import "../assets/css/animations/skills_animation.scss"
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
                <div class="skill-per" per="80"></div>
              </div>
              <div class="skill">
                <div class="skill-name">CSS / SCSS</div>
                <div class="skill-bar">
                  <div class="skill-per" per="70"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">Bootstrap</div>
                <div class="skill-bar">
                  <div class="skill-per" per="50"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">JavaScript</div>
                <div class="skill-bar">
                  <div class="skill-per" per="60"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">React</div>
                <div class="skill-bar">
                  <div class="skill-per" per="60"></div>
                </div>
              </div>
              <h3>Back-End</h3>
              <div class="skill">
                <div class="skill-name">NodeJS</div>
                <div class="skill-bar">
                  <div class="skill-per" per="60"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill-name">ExpressJS</div>
                <div class="skill-bar">
                  <div class="skill-per" per="60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="curriculumVitae">
          <h3>Curriculum Vitae</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;

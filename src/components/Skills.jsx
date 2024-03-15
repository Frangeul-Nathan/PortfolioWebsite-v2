import "../assets/css/partials/skills/_skills.scss"
import "../assets/css/animations/skills_animation.scss"
import CV from "../assets/images/Nathan-CV-min.png"
import cvDownload from "../assets/images/Nathan-CV.pdf"
import stacks from "../assets/images/Skills.png"


function Skills() {

  return (
    <section className="skillSection">
      <h2 id="competences">Compétences</h2>
      <hr className="blackLign" />
      <div className="container">
        <div className='skillContainer'>
          <div className="stacks">
            <h3>Stacks</h3>
            <hr className="blackLign" />
            <img src={stacks} alt="stacks" className="stacks-image"/>
          </div>
        </div>
        <div className="curriculumVitaeContainer">
          <div className="curriculumVitae">
            <h3>Curriculum Vitae</h3>
            <hr className="blackLign" />
            <img src={CV} alt="" className="cv-image" />
            <a href={cvDownload} download="Nathan-CV.pdf" className="buttonContainer">
              <button>Télécharger</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

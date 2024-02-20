import "../assets/css/partials/main/_main.scss"

function Main() {

    return (
        <main>
            <h2 className="blackTitle" id="presentation">A propos de moi</h2>
            <hr className="blackLign"/>
            <div className="aboutMe">
                <p>Je suis Nathan, un développeur web junior de 24 ans formé à La Piscine de Bordeaux. Passionné par le développement fullstack, j'ai acquis des compétences solides en HTML, CSS et Javascript au cours de ma formation.</p>
            </div>
            <hr className="blackLign"/>
            <div className="aboutMe">
                <p>J'ai eu l'opportunité de travailler sur des projets concrets, notamment la création d'une application web en utilisant React et Node.js. </p>
            </div>
            <hr className="blackLign"/>
            <div className="aboutMe">
                <p>Mes compétences s'étendent à l'utilisation d'outils tels que Git pour la gestion de versions et Visual Studio Code comme mon environnement de développement principal. Je suis à l'aise avec des langages tels que JavaScript, et je me tiens constamment informé des dernières tendances et évolutions technologiques dans le domaine.</p>
            </div>
        </main>
    );
}

export default Main;
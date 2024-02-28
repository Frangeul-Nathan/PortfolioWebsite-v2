import "../assets/css/partials/footer/_footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer class="footer-content">
      <div className="copyrightContainer">
        <p>&copy; Frangeul Nathan | 2024</p>
      </div>
      <div className='socialContainer'>
        <a href="https://github.com/Frangeul-Nathan">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://github.com/Frangeul-Nathan" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
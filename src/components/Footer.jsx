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
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </footer>
  );
}

export default Footer;
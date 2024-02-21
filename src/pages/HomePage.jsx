import Contact from "../components/Contact";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Main from "../components/Main";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <Header />
            <Main />
            <Portfolio />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;

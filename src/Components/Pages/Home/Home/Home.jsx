import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MySkill from "../MySkill/MySkill";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <MySkill />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
import NavBar from "../../components/AnimatedBackground/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills"; // Importando o novo componente 16/01/2025

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Skills /> {/* Adicionando a nova seção de habilidades */}
        </>
    );
};

export default Home;

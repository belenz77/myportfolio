import './App.css';
import Cards from './components/Cards';
import Navbar from "./components/NavBar/Navbar.jsx";
import Main from "./components/Main/Main.jsx"
import Skills from "./components/Skills/Skills.jsx"
import Projects from './components/Main/Projects/Projects';
import Footer from './components/Footer/Footer';
import FormValidation from './components/Formulario/Formulario';
import Carousel from './components/Carrusel/Carrusel.jsx';
import Swiper from 'swiper';
import Slider from './components/Main/Projects/Swiper';



function App() {
  return (
    <div className="App">
      <Navbar />
    <Main />
         {/* <Cards />  */}
        {/* <Carousel/>
        <Projects/> */}
         <h1>PORTFOLIO</h1>
        <Slider/>
        <h1>SKILLS</h1>
        <Skills />
       <FormValidation />
       
        <Footer />
      
    </div>
  );
}

export default App;

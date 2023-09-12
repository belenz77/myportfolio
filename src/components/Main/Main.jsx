import React from 'react';
import Yo from "./belen.jpg";
import "./Main.css";
import CV from "../../pdfs/CV-BZ23.pdf";
import { Link } from "react-scroll";

function Main() {
  return (
    <>
         
      <div class="container  px-4 py-5 mb3 " id="empresa">
        
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 ">
  
          <div class="col-10 col-sm-8 col-lg-6 ">
            <img src={Yo} className="d-block mx-lg-auto img-fluid" alt="Belén" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            {/* <h1 class="display-5 fw-bold lh-1 mb-3 verdeFuerte">Belén Zumalacarregui</h1>
        <h2>FRONTEND DEVELOPER MD -FULLSTACK DEVELOPER JR </h2> */}
            <div className='containerAnimation'>
              <p className='parrafoAnimado'>Hola 👋 Soy </p>
              <section class="animation">
                <div class="first"><div>Belén Zumalacarregui</div></div>
                <div class="second"><div>FrontEnd Developer</div></div>
                <div class="third"><div>Fullstack Developer JR</div></div>
              </section>
            </div>


            <p class="lead">Soy desarrolladora web  con más de 10 años de experiencia en el sector, y una apasionada de las nuevas tecnologías y los desafíos que ofrece el mundo digital.
            </p>
            <p class="lead">
              Como desarrolladora, me apasiona trabajar en proyectos que requieren creatividad e innovación. Me gusta encontrar soluciones técnicas para problemas complejos y lograr resultados que superen las expectativas del cliente. También soy una gran defensora del trabajo en equipo, considero que trabajar en colaboración permite la creación de soluciones más eficientes y eficaces.</p>
            {/* <a href="./CVBZ.pdf" download>Download CV</a> */}
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="buttonBZ">CONTRÁTAME</button>
          <button type="button" class="buttonBZ">CONTÁCTAME</button> */}
              <Link
                to="form"
                href="form"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="buttonBZ"

              >
                CONTRÁTAME
              </Link>
              {/* <Link
                
                href="./CVBZ.pdf"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="buttonBZ"
                download

              >
               DOWNLOAD CV
              </Link> */}
              <a href={CV} className='buttonBZ' download>Descargar CV</a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Main

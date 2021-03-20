import React from 'react'
import './Portafolio.css'
import Robot1 from '../../images/robot-listo.jpg'
import Robot2 from '../../images/3D-Proyecto.jpg'
import Robot3 from '../../images/codigo-php.jpg'
import Robot4 from '../../images/programando-robot.jpg'
import Robot5 from '../../images/programing-pandemic.jpg'

export const Portafolio = () => {
    return (
        <div className="proyectoD">
            
            <section className="projects" id="portafolio">
            
            <div class="container-p" id="projects">
            <h1 class="subtitleP">Mis Proyectos</h1>
                <div class="projects__grid">

                    <article class="projects__item">
                        <img src={Robot1} alt="Esta es una imagen de robot" class="projects__img"></img>
                        <div class="projects__hover">
                            <h2 class="projects__title">Proyecto
                                <i class="far fa-file-alt projects__icon"></i>
                            </h2>
                        </div>
                    </article>

                    
                    <article class="projects__item">
                        <img src={Robot2} alt="Esta es una imagen de robot" class="projects__img"></img>
                        <div class="projects__hover">
                            <h2 class="projects__title">Proyecto
                                <i class="far fa-file-alt projects__icon"></i>
                            </h2>
                        </div>
                    </article>

                    
                    <article class="projects__item">
                        <img src={Robot3} alt="Esta es una imagen de robot" class="projects__img"></img>
                        <div class="projects__hover">
                            <h2 class="projects__title">Proyecto
                                <i class="far fa-file-alt projects__icon"></i>
                            </h2>
                        </div>
                    </article>

                    
                    <article class="projects__item">
                        <img src={Robot4} alt="Esta es una imagen de robot" class="projects__img"></img>
                        <div class="projects__hover">
                            <h2 class="projects__title">Proyecto
                                <i class="far fa-file-alt projects__icon"></i>
                            </h2>
                        </div>
                    </article>

                    
                    <article class="projects__item">
                        <img src={Robot5} alt="Esta es una imagen de robot" class="projects__img"></img>
                        <div class="projects__hover">
                            <h2 class="projects__title">Proyecto
                                <i class="far fa-file-alt projects__icon"></i>
                            </h2>
                        </div>
                    </article>

                   

                </div>
            </div>
        </section>
        </div>
    )
}

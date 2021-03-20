import React from 'react'
import './Testimonio.css'
import Testimonio1 from '../../images/man-testimony.jpg'
import Testimonio2 from '../../images/woman-testimony.jpg'

const Testimonio = () => {
    return (
        <div className="testimonioC"> 
            <section className="testimonio container-t" id="testimonio">
                <h1 class="subtitle">Testimonios</h1>
                <div class="testimony__grid">
                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio1} alt="Imagen de un hombre" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">Alejandro Torres</h3>
                                <p class="testimony__verification">Empresario</p>
                            </div>
                        </div>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
                            dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum.</p>
                    </article>

                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio2} alt="Imagen de una mujer" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">Kayle Gallardo</h3>
                                <p class="testimony__verification">Contadora</p>
                            </div>
                        </div>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
                            dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum.</p>
                    </article>

                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio2} alt="Imagen de una mujer" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">María Solórzano</h3>
                                <p class="testimony__verification">Docente</p>
                            </div>
                        </div>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
                            dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum.</p>
                    </article>

                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio1} alt="Imagen de un hombre" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">Carlos Campoverde</h3>
                                <p class="testimony__verification">Doctor</p>
                            </div>
                        </div>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
                            dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum.</p>
                    </article>

                </div>
            </section>
        </div>
    )
}

export default Testimonio

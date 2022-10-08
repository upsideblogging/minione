import React, { useState } from 'react'
import project1 from '../../Assets/img/project1.jpg'
import project2 from '../../Assets/img/project2.jpg'
import project3 from '../../Assets/img/project3.jpg'
import project4 from '../../Assets/img/project4.jpg'
import project5 from '../../Assets/img/project5.jpg'

export default function Main() {
          const [toggleState, setToggleState] = useState(1);

          const toggleTab = (index: number) => {
                    setToggleState(index);
          };
          return (
                    <main>
                              <section className="filters container">
                                        <ul className="filters__content">
                                                  <button className={toggleState === 1 ? 'filters__button filters__button-active' : 'filters__button'} onClick={() => toggleTab(1)}>
                                                            Projects
                                                  </button>
                                                  <button className={toggleState === 2 ? 'filters__button filters__button-active' : 'filters__button'} onClick={() => toggleTab(2)}>
                                                            SKills
                                                  </button>
                                        </ul>

                                        <div className="filters__sections">
                                                  <div className={toggleState === 1 ? 'projects__content grid filters__active' : 'projects__content grid'}>
                                                            <article className="projects__card">
                                                                      <img src={project1} alt="project" className="projects__image" />

                                                                      <div className="projects__modal">
                                                                                <div>
                                                                                          <span className="projects__subtitle">
                                                                                                    Web
                                                                                          </span>
                                                                                          <h3 className="projects__title">Payment Site</h3>
                                                                                          <a href="/" className="projects__button button button__small">
                                                                                                    <i className="ri-link"></i>
                                                                                          </a>
                                                                                </div>
                                                                      </div>
                                                            </article>
                                                            <article className="projects__card">
                                                                      <img src={project2} alt="project" className="projects__image" />

                                                                      <div className="projects__modal">
                                                                                <div>
                                                                                          <span className="projects__subtitle">

                                                                                                    Web                                                        </span>
                                                                                          <h3 className="projects__title">Portfolio website
                                                                                          </h3>
                                                                                          <a href="/" className="projects__button button button__small">
                                                                                                    <i className="ri-link"></i>
                                                                                          </a>
                                                                                </div>
                                                                      </div>
                                                            </article>
                                                            <article className="projects__card">
                                                                      <img src={project3} alt="project" className="projects__image" />

                                                                      <div className="projects__modal">
                                                                                <div>
                                                                                          <span className="projects__subtitle">
                                                                                                    Movil
                                                                                          </span>
                                                                                          <h3 className="projects__title">Fast food app
                                                                                          </h3>
                                                                                          <a href="/" className="projects__button button button__small">
                                                                                                    <i className="ri-link"></i>
                                                                                          </a>
                                                                                </div>
                                                                      </div>
                                                            </article>
                                                            <article className="projects__card">
                                                                      <img src={project4} alt="project" className="projects__image" />

                                                                      <div className="projects__modal">
                                                                                <div>
                                                                                          <span className="projects__subtitle">

                                                                                                    Movil
                                                                                          </span>
                                                                                          <h3 className="projects__title">Travel app
                                                                                          </h3>
                                                                                          <a href="/" className="projects__button button button__small">
                                                                                                    <i className="ri-link"></i>
                                                                                          </a>
                                                                                </div>
                                                                      </div>
                                                            </article>
                                                            <article className="projects__card">
                                                                      <img src={project5} alt="project" className="projects__image" />

                                                                      <div className="projects__modal">
                                                                                <div>
                                                                                          <span className="projects__subtitle">

                                                                                                    Design                                                        </span>
                                                                                          <h3 className="projects__title">Music app design
                                                                                          </h3>
                                                                                          <a href="/" className="projects__button button button__small">
                                                                                                    <i className="ri-link"></i>
                                                                                          </a>
                                                                                </div>
                                                                      </div>
                                                            </article>
                                                  </div>

                                                  <div className={toggleState === 2 ? 'skills__content grid filters__active' : 'skills__content grid'}>
                                                            <div className="skills__area">
                                                                      <h3 className="skills__title">Frontend Developer</h3>

                                                                      <div className="skills__box">
                                                                                <div className="skills__group">
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">HTML</h3>
                                                                                                    <span className="skills__level">Basic</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">CSS</h3>
                                                                                                    <span className="skills__level">Advanced</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">JavaScript</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                </div>
                                                                                <div className="skills__group">
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">React</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">Bootstrap</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">Git</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <div className="skills__area">
                                                                      <h3 className="skills__title">Backend Developer</h3>

                                                                      <div className="skills__box">
                                                                                <div className="skills__group">
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">PHP</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">MySQL</h3>
                                                                                                    <span className="skills__level">Advanced</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">Firebase</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                </div>
                                                                                <div className="skills__group">
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">Python</h3>
                                                                                                    <span className="skills__level">Basic</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">Node Js</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                          <div className="skills__data">
                                                                                                <i className="ri-checkbox-circle-line"></i>


                                                                                                  <div>
                                                                                                    <h3 className="skills__name">Express JS</h3>
                                                                                                    <span className="skills__level">Intermediate</span>
                                                                                                  </div>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>
                    </main>
          )
}

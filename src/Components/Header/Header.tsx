import React, { useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState<Boolean>(false);

  const toggleClass = () => {
    setTheme(document.body.classList.toggle("dark-theme"));
  };
  return (
    <header className="profile container">
      <span onClick={toggleClass}>
      {
        theme ? <i className="ri-sun-line change-theme" id='theme-button'></i> : <i className="ri-moon-line change-theme" id='theme-button'></i>
      }
      </span>
          <div className="profile__container grid">
            <div className="profile__data">
                    <div className="profile__border">
                              <div className="profile__perfil">
                                        <img src="https://i.ibb.co/xq16h9f/kiron3-modified.png" alt="" className="profile__img" />
                              </div>
                    </div>

                    <h2 className="profile__name">Toufiq Hasan Kiron</h2>
                    <h3 className="profile__profession">web developer</h3>

                    <ul className="profile__social">
                              <a href="https://github.com" className="profile__social-link" target="_blank" rel="noreferrer">
                                       <i className="ri-github-line"></i> 
                              </a>
                              <a href="/" className="profile__social-link" target="_blank" rel="noreferrer">
                                           <i className="ri-linkedin-box-line"></i>
                              </a>
                              <a href="/" className="profile__social-link" target="_blank" rel="noreferrer">
                                                   <i className="ri-facebook-fill"></i>
                              </a>
                    </ul>
             </div>

             <div className="profile__info grid">
                    <div className="profile__info-group">
                              <h3 className="profile__info-number">1+</h3>
                              <p className="profile__info-description">Years of <br /> work</p>
                    </div>
                    <div className="profile__info-group">
                              <h3 className="profile__info-number">15+</h3>
                              <p className="profile__info-description">Completed <br /> projects</p>
                    </div>
                    <div className="profile__info-group">
                              <h3 className="profile__info-number">10</h3>
                              <p className="profile__info-description">Satisfied <br /> customers</p>
                    </div>
             </div>

             <div className="profile__buttons">
                    <a download="" href="../../Assets//pdf/Gianell-Cv.pdf" className="button">
                              Download CV <i className="ri-download-line"></i> 
                    </a>

                    <div className="profile__buttons-small">
                              <a href="https://github.com" className="button button__small button__gray" target="_blank" rel="noreferrer">
                                        <i className="ri-whatsapp-line"></i>
                              </a>

                              <a href="/" className="button button__small button__gray" target="_blank" rel="noreferrer">
                                                   <i className="ri-messenger-line"></i>
                              </a>
                    </div>
             </div>
          </div>
    </header>
  )
}

import React from 'react';
import '../css/style-team.css';

export const Equipo = () => {
    return (
        <section id="team" className="team section-bg">
            <div className="container">

                <div className="section-title">
                    <span>Bit Legion</span>
                    <h2>Bit Legion</h2>
                    <p>Hola, nosotros somos Bit Legion, y aquí encontraras más información sobre nosotros</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src="https://i.ibb.co/5GHwjTt/Donovan.jpg" alt="" />
                            <h4>Donovan</h4>
                            <div className="social">
                                <a href="https://github.com/DonHack77" target="_blank"><i className="bi bi-github"></i></a>
                                <a href="https://www.instagram.com/donovaan.oficial/" target="_blank"><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/donovan-stif-cano-gonzalez-b75322257/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src="../Img/Jhonatan.jpg" alt="" />
                            <img
                                    transform="scale(0.4)"
                                    width="360"
                                    height="360"
                                    src="https://i.ibb.co/w4RbNmp/Jhonatan.jpg"
                                    className="img-fluid"
                                    alt="..."
                                />
                            <h4>Jhonatan</h4>
                            <div className="social">
                                <a href="https://jsr666.github.io/bit07me/" target="_blank"><i className="bi bi-github"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/jdsr424/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src="https://i.ibb.co/qCkQJ4z/Melany.jpg" alt="" />
                            <h4>Melany</h4>
                            <div className="social">
                                <a href=""><i className="bi bi-github"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/uhanekaumaha/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}

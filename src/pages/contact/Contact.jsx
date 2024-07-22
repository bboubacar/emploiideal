import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
    return (
        <section className="contact">
            <article className="informations">
                <h1>Contact</h1>
                <div className="adresse info">
                    <FiMapPin />
                    <span>
                        France, 16000 Angoulême, <br /> 47 Boulevard d’Auvergne
                    </span>
                </div>
                <a href="mailto:bboubcar@gmail.com" className="email info">
                    <FiMail />
                    <span>bboubcar@gmail.com</span>
                </a>
                <a href="tel:0744175119" className="tel info">
                    <FiPhone />
                    <span>+33 744 17 51 19</span>
                </a>
            </article>
            <article className="form">
                <h2>Envoyer un mail</h2>
                <div className="name input-container">
                    <input
                        type="text"
                        placeholder="nom"
                        aria-label="Votre nom"
                    />
                </div>
                <div className="email input-container">
                    <input
                        type="password"
                        placeholder="email"
                        aria-label="Votre adresse mail"
                    />
                </div>
                <div className="input-container">
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="message"
                        aria-label="Saisir votre message"
                    ></textarea>
                </div>
                <div
                    className="input-container send-btn"
                    aria-label="Envoyer votre mail"
                >
                    <span>Envoyer</span>
                </div>
            </article>
        </section>
    );
};

export default Contact;

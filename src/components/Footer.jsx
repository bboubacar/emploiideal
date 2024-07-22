import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="metions">
                    <span>Conditions générales</span>
                    <div className="politique">
                        <span>Politique de confidentialité</span>
                        <div className="social-media">
                            <FaSquareFacebook />
                            <FaLinkedin />
                            <FaSquareInstagram />
                            <FaSquareXTwitter />
                            <FaSquareYoutube />
                        </div>
                    </div>
                    <span>Mentions légales</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";
import { menuPaths } from "../../utilities/constantes";
import { Link } from "react-router-dom";

const Congratulation = ({ connPath }) => {
    return (
        <article className="creation-success">
            <h1>Félicitations, votre compte a été créé.</h1>
            <Link to={connPath} className="seconnecter-btn">
                Connectez vous
            </Link>
        </article>
    );
};

export default Congratulation;

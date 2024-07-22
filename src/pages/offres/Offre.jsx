import React from "react";
import { menuPaths } from "../../utilities/constantes";
import { routes } from "../../utilities/db_infos";
import { openOffreDetails } from "../../utilities/functions";

const offre = ({ offre }) => {
    return (
        <div
            className="offres-results"
            onClick={(ev) => openOffreDetails(offre)}
        >
            <img
                src={
                    offre?.logo
                        ? routes.based_url + offre?.logo
                        : "/images/logo-entreprise.png"
                }
                alt={"logo entreprise" + offre?.nom}
                height="80"
                width="80"
            />
            <div className="titre"> {offre?.titre}</div>
            <span>
                <strong>Entreprise : </strong> {offre?.nom}
            </span>
            <span>
                <strong>Lieu : </strong> {offre?.commune}
            </span>
            <span>
                <strong>Date publication: </strong> {offre?.date_pub}
            </span>
            <span>
                <strong>Date d'expiration: </strong> {offre?.date_exp}
            </span>
            <span>
                <strong>Type de contrat: </strong> {offre?.type}
            </span>
            <span>
                <strong>Salaire: </strong> {offre?.salaire_min}
                {offre?.salaire_max !== null ? " - " : ""}
                {offre?.salaire_max}
            </span>
            <div className="description">{offre?.description}</div>
        </div>
    );
};

export default offre;

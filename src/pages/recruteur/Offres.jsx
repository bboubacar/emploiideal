import EditDeleteItem from "../../components/EditDeleteItem";
import { routes } from "../../utilities/db_infos";

const Offres = ({ content, openEdit, onDelete }) => {
    return (
        <div className="offres-results">
            <EditDeleteItem
                openEdit={openEdit}
                onDelete={onDelete}
                content={content}
                text="La suppression de l'offre"
            />
            <div className="recruteur-offre">
                <img
                    src={
                        content?.logo
                            ? routes.based_url + content?.logo
                            : "/images/logo-entreprise.png"
                    }
                    alt="logo entreprise"
                    height="80"
                    width="80"
                />
                <div className="titre"> {content?.titre}</div>
                <span className="statut">
                    <strong>Statuts: </strong> {content?.statut}
                </span>
                <span>
                    <strong>Date publication: </strong> {content?.date_pub}
                </span>
                <span>
                    <strong>Date d'expiration: </strong> {content?.date_exp}
                </span>
                <span>
                    <strong>Type de contrat: </strong> {content?.type}
                </span>
                <span>
                    <strong>Salaire: </strong> {content?.salaire_min}
                    {content?.salaire_max !== null && " - "}
                    {content?.salaire_max}
                </span>
                <div className="description">{content?.description}</div>
            </div>
        </div>
    );
};
export default Offres;

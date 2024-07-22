import React from "react";
import EditDeleteItem from "../../components/EditDeleteItem";

const Formations = ({ content, openEdit, onDelete }) => {
    return (
        <div className="formation item">
            <EditDeleteItem
                openEdit={openEdit}
                onDelete={onDelete}
                content={content}
                text="La suppression de la formation"
            />
            <div className="details">
                <span>
                    <span className="titreGras">
                        {content.date_deb} - {content.date_fin} :{" "}
                    </span>
                    <span className="institut">
                        A l'institut <strong>{content.institut}</strong>
                    </span>
                </span>
                <span className="infos">
                    {" "}
                    <strong>{content.titre}</strong>, {content.details}
                </span>
            </div>
        </div>
    );
};

export default Formations;

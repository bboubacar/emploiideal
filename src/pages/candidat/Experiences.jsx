import React from "react";
import EditDeleteItem from "../../components/EditDeleteItem";

const Experiences = ({ content, openEdit, onDelete }) => {
    return (
        <div className="experience item">
            <EditDeleteItem
                openEdit={openEdit}
                onDelete={onDelete}
                content={content}
                text="La suppression de l'experience"
            />
            <div className="details">
                <span>
                    <span className="titreGras">
                        {content.date_deb} - {content.date_fin} :{" "}
                    </span>
                    <span className="company">
                        Chez <strong>{content.entreprise}</strong>
                    </span>
                </span>
                <span className="infos">
                    <strong>{content.titre}</strong>, {content.details}
                </span>
            </div>
        </div>
    );
};

export default Experiences;

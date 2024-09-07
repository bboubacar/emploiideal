import React, { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import UserInput from "../../components/UserInput";
import { ImSpinner9 } from "react-icons/im";
import usePageTitle from "../../hooks/usePageTitle";
import { tables } from "../../utilities/db_infos";

const Connexion = ({
    handleChange,
    handleSubmit,
    sms,
    isLoading,
    table,
    incriptionPath = "",
}) => {
    usePageTitle("Connexion");
    const [titre, setTitre] = useState("");
    useEffect(() => {
        if (table === tables.candidats) setTitre("candidats");
        if (table === tables.representants) setTitre("récruteurs");
        if (table === tables.admin) setTitre("administrateurs");
    }, [table]);

    return (
        <section className="login-user">
            <form onSubmit={handleSubmit} className="login-container">
                <h1>Connexion {titre}</h1>
                <div className="login-icon">
                    <IoPerson />
                </div>
                <div className="incorrect-id">{sms?.err}</div>
                <div className="input-container email-input">
                    <UserInput
                        name="email"
                        type="text"
                        pholder="Email"
                        label="votre adresse mail"
                        handleChange={handleChange}
                        message={sms?.email}
                        icon={<IoPerson />}
                    />
                </div>
                <div className="pwd-input input-container">
                    <UserInput
                        name="password"
                        type="password"
                        pholder="Mot de passe"
                        label="votre mot de passe"
                        handleChange={handleChange}
                        message={sms?.password}
                        icon={<FaLock />}
                    />
                </div>
                <div className="forget-pwd">
                    {incriptionPath && <Link>mot de passe oublié?</Link>}
                </div>
                <input
                    type="submit"
                    className="seconnecter-btn"
                    aria-label="Se connecter"
                    value="Se connecter"
                />
                {incriptionPath && (
                    <div className="incription">
                        <Link to={incriptionPath}>S'inscrire</Link>
                    </div>
                )}
                {isLoading && (
                    <div className="loading-container">
                        <ImSpinner9 />
                    </div>
                )}
            </form>
        </section>
    );
};

export default Connexion;

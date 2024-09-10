import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

const UserInput = ({
    name,
    pholder,
    label,
    type = "text",
    handleChange,
    message,
    icon = "",
    view = false,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const changeView = (ev) => {
        setIsVisible(!isVisible);
    };
    return (
        <div className={`${name}-input input-container`}>
            <label htmlFor={name}>
                <span>{pholder}</span>
                <span>{message}</span>
            </label>
            <div htmlFor={name}>
                <input
                    id={name}
                    type={isVisible ? "text" : type}
                    placeholder={pholder}
                    aria-label={label}
                    name={name}
                    onChange={handleChange}
                />
                {icon ? (
                    <div className="login-input-btn input-btn">{icon}</div>
                ) : (
                    ""
                )}
                {view ? (
                    <div className="pwdView-svg" onClick={changeView}>
                        {isVisible ? <MdVisibilityOff /> : <MdVisibility />}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default UserInput;

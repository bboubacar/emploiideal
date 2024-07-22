import React from "react";
import Accroche from "./Accroche";
import Liste from "./Liste";
import Bulle from "./Bulle";

const Home = () => {
    return (
        <div className="home">
            <Accroche />
            <Liste />
            <Bulle />
        </div>
    );
};

export default Home;

import React, { useEffect } from "react";

const usePageTitle = (pageTitle) => {
    useEffect(() => {
        const baseTitle = "Emploi Idéal pour une meilleure carrière";
        document.title = `${pageTitle} - ${baseTitle}`;
    }, [pageTitle]);
};

export default usePageTitle;

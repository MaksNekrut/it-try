import React from "react";
import {useLocation} from "react-router-dom";
import {ISUBDIRECTIONS_LIST} from "@root/types";

const Results = () => {
    const location = useLocation();
    const title: string = location.state.title;
    return (
        <div>
            {title}
        </div>
    )
}

export default Results;
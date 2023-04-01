import React from "react";
import StyledMainPage from "./Main.styled";

const Main = () => {
    return (
        <StyledMainPage>
            <div style={ { width: '300px', height: '100px' } }>
                <img src={require("../../../../../../Downloads/src-20230401T094724Z-001/src/logo.svg")} alt="logo image"/>
            </div>
            <div>
                <img src={require("../../../../../../Downloads/src-20230401T094724Z-001/src/bgimage.svg")} alt="background big image"/>
            </div>
        </StyledMainPage>
    )
}

export default Main;

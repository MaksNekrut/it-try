import React, {SyntheticEvent} from "react";

const onClickEvent = (e:SyntheticEvent) => {
    e.preventDefault();
    alert('clicked')
}

const App = () => {
    return (
        <div>
            <div>
                Create app with custom webpack
            </div>
            <button onClick={onClickEvent}>Click</button>
        </div>
    )
}

export default App
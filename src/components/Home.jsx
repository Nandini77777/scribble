import { useState } from "react";
import "./Home.css";
function Home() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    };
    function handleClick() {

    };

    return <div className="outer">

        <center><div className="background">
            <h1 className="head">Scribble</h1>
            <input
                onChange={handleChange}
                type="text"
                className="textbox" />
            <button
                onClick={handleClick}
                className="butt">Let's Play</button>
            <button

                className="butt2">Create Room</button>
        </div>
        </center>

    </div>
};

export default Home;

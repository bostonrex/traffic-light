import React, { useState } from 'react';


const App = () => {
        const [selectedButton, setSelectedButton] = useState(0);

        const colors = {
                red: {
                        normal: '#A50909'
                },
                yellow: {
                        normal: '#EAD311'
                },
                green: {
                        normal: '#008000'
                },
        };

        const handleButtonClick = (color) => {
                setSelectedButton(color);
        };

        return (
                <div className="container mb-5">
                        <div className="stick d-flex justify-content-center mb">   </div>
                        <div className="trafficlight">
                                <button className={`light-circle red-light ${selectedButton === 'red' && "glow-light"}`}
                                        onClick={() => handleButtonClick('red')}
                                ></button>
                                <button className={`light-circle yellow-light ${selectedButton === 'yellow' && "glow-light"}`}
                                        onClick={() => handleButtonClick('yellow')}
                                ></button>
                                <button className={`light-circle green-light ${selectedButton === 'green' && "glow-light"}`}
                                        onClick={() => handleButtonClick('green')}
                                ></button>
                        </div>
                </div>
        );
};

export default App;
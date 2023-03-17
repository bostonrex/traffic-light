import React, { useState } from 'react';


const App = () => {
        const [selectedButton, setSelectedButton] = useState(0);

        const colors = {
                red: {
                        normal: '#D44A47',
                        bright: '#FF5D00',
                },
                green: {
                        normal: '#008000',
                        bright: '#8FFF00',
                },
                yellow: {
                        normal: '#EAD311',
                        bright: '#FFF300',
                },
        };

        const handleButtonClick = (color) => {
                setSelectedButton(color);
        };

        return (
                <div className="container mb-5">
                        <div className="stick d-flex justify-content-center mb">   </div>
                        <div className="trafficlight">
                                <button className="light-circle" color="red" style={{
                                        backgroundColor:
                                                selectedButton === 'red' ? colors.red.bright  : colors.red.normal,
                                }}
                                        onClick={() => handleButtonClick('red')}
                                ></button>
                                <button className="light-circle" color="green" style={{
                                        backgroundColor:
                                                selectedButton === 'yellow' ? colors.yellow.bright : colors.yellow.normal,
                                }}
                                        onClick={() => handleButtonClick('yellow')}
                                ></button>

                                <button className="light-circle" color="green" style={{
                                        backgroundColor:
                                                selectedButton === 'green' ? colors.green.bright : colors.green.normal,
                                }}
                                        onClick={() => handleButtonClick('green')}
                                ></button>
                        </div>
                </div>
        );
};

export default App;
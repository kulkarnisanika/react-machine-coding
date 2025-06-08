import "./traffic-light.css"
import {useEffect, useState} from "react";

const TrafficLight = () => {

    const [trafficLight, setTrafficLight] = useState('red');

    const lightConfig = {
        "red": {
            time: 3000,
            nextColor: "yellow"
        },
        "yellow": {
            time: 3000,
            nextColor: "green"
        },
        "green":{
            time: 1000,
            nextColor: "red"
        }
    };

    
    useEffect(() => {
        let timer = setTimeout(() => {

            setTrafficLight(lightConfig[trafficLight].nextColor);

        }, lightConfig[trafficLight].time);

        return (() => clearTimeout(timer))
    }, [trafficLight]);



    return (
        <div className="container">
            <div className="traffic-container">
                <div className={ trafficLight === "red" ? "traffic-light red" : "traffic-light" }></div>
                <div className={ trafficLight === "yellow" ? "traffic-light yellow" : "traffic-light" }></div>
                <div className={ trafficLight === "green" ? "traffic-light green" : "traffic-light" }></div>
                

            </div>

        </div>

    )
}

export default TrafficLight
import React, { useState } from "react";

import classes from './DisappearingCircles.module.css';


// create an array of circl Object
const initialCircles = [
    {
        color: 'purple',
        points: 10
    },
    {
        color: 'purple',
        points: 10
    },
    {
        color: 'black',
        points: 30
    },
    {
        color: 'black',
        points: 30
    },
    {
        color: 'green',
        points: 20
    },
]

function DisappearingCircles() {
    // destructuring,'set points' function tht will allow us to update the points 
    const [points, setPoints] = useState(0);
// array of circle that we can click on it
    const [circles, setCircles] = useState(initialCircles);

    function removeCircle(idx) {
                // update our points and rerender the components
        setPoints(points + circles[idx].points);

        function filterCallback(_, i) {
// return whether that particulcar index doesnt equal the idx that was clicked on
            return i !== idx;
        }

        // this function remove circle when points updated
        const newCircles = circles
        // .filter(_, i) => i !== idx);
        .filter(filterCallback);
        setCircles(newCircles);
    }
    
// its a button and not an event so i can keep paramenter empty
    function handleReset() {
        // all the values that we have in the initialCircles drop that in the new Array
        setCircles([...initialCircles]);
        setPoints(0);

    }
    // function handleEvent(event) {
    //     //
    // }

    return (
        <div>
            <p>Points: {points}</p>
            <div className={classes.wrapper}>
                {circles.map((circle, i) =>{
    // with individuals circle inside the div
                    return (
                        <div 
                        key={i}
    // dont care abt actual click event but the index so i call inline function
    // i index is coming from map function 
                        onClick={() => removeCircle(i)}
                        className={classes.circle}
                            style={{background:circle.color}}>
        {/* i want to show the number of the circle */}
                            {circle.points}
                        </div>

                    )
                })}
            </div>
            <button onClick={handleReset}>Click here to Reset</button>
        </div>
    )
}

export default DisappearingCircles;
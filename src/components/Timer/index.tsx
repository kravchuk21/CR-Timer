import React from "react";
import {TimerStyles} from "./Timer.styled";
import {convertMilliSecondsToSeconds} from "../../utils/convertMilliSecondsToSeconds/convertMilliSecondsToSeconds";

const Timer: React.FC = () => {
    const [timer, setTimer] = React.useState(0);
    const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout | null>(null);

    const handleClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
            return;
        }

        setTimer(0)
        const newIntervalId = setInterval(() => {
            setTimer(prevCount => prevCount + 1);
        }, 10);
        setIntervalId(newIntervalId);
    };

    return (
        <TimerStyles>
            <h1>{convertMilliSecondsToSeconds(timer)}</h1>
            <button onClick={handleClick}>
                {intervalId ? "Stop counting" : "Start counting"}
            </button>
        </TimerStyles>
    );
};

export default Timer;

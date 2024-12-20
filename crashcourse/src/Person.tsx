import { useState } from "react";
interface PersonProps {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props:PersonProps) => {

    const [isShowInfo, setShowInfo] = useState(false);
    return (
        <>
            {isShowInfo ? (

            <div>
                <h1>Person: {props.name}</h1>
                <h2>Age: {props.age}</h2>
                <h2>Married: {props.isMarried ? "yes" : "no"}</h2>
            </div>
            ) : (
            <>
            </>
            )
            }
            <button onClick={() => setShowInfo(!isShowInfo)}>Show Info</button>
        </>
    );
}
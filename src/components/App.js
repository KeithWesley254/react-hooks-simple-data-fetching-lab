// create your App component here
import React, { useEffect, useState } from "react";

function App(){
    const [dogs, setDogData] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((DogData) => {
            console.log(DogData)
            setDogData(DogData.message)
        })
    }, []);

    if(!dogs){
        return <p>Loading...</p>
    };
    return (
        <div>
            <img src={dogs} alt="A Random Dog" />
        </div>
    )
}

export default App
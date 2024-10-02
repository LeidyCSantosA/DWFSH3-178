"use client"

import { useEffect, useState } from "react";

export default function Lab2() {
    let [valueData, setData] = useState([]);
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        valueData && valueData.length > 0 && setTimeout(() => {alert("Cargando datos..."), 2000})
    }, [valueData]);

    return(
        <div>
            <h2>Datos obtenidos del servicio:</h2>
            <ul>
                {
                    valueData.map((item, index) => <li key={item.id}>{item.title}{item.body}</li>)
                }
            </ul>
        </div>
    )
}
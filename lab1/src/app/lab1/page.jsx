"use client";

import { useState } from "react"

export default function Lab1() {
    const title = <h1>Formulario</h1>
    // Campos del formulario
    let [fullName, setFullName] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`fullName: ${fullName}`);
    };
    const onChange = (event, setValue) => setValue(event.target.value);
    return (
        <div>
            {title}
            <form onSubmit={handleSubmit}>
                <label>Nombres y apellidos</label>
                <input
                    name="fullName"
                    type="text"
                    onChange={(event) => onChange(event, setFullName)}
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
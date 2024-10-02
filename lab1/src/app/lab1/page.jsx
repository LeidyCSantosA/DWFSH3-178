"use client";

import { useState } from "react"

export default function Lab1() {
    const title = <h1>Formulario</h1>
    // Fields
    let [fullName, setFullName] = useState();
    let [email, setEmail] = useState();
    let [userName, setUserName] = useState();
    let [password, setPassword] = useState();
    // Event submit
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    // Event onChange
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
                <br/>
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    onChange={(event) => onChange(event, setEmail)}
                />
                <br/>
                <label>Username</label>
                <input
                    name="userName"
                    type="text"
                    onChange={(event) => onChange(event, setUserName)}
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
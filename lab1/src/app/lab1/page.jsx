"use client";

import { useState, useEffect } from "react"
import { useFormHook } from "../../hooks/form-hook";

export default function Lab1() {
    const title = <h1>Formulario</h1>
    // Fields
    const { value: valueFullName, bind: bindFullName, reset: resetFullName } = useFormHook();
    const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useFormHook();
    const { value: valueUserName, bind: bindUserName, reset: resetUserName } = useFormHook();
    const { value: valuePassword, bind: bindPassword, reset: resetPassword } = useFormHook();
    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    // Event submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // create object
        const dataUser = {
            fullName: valueFullName,
            email: valueEmail,
            username: valueUserName,
            password: valuePassword
        }
        setItems(prevItems => [...prevItems, dataUser]);
    };
    return (
        <div>
            {title}
            <form onSubmit={handleSubmit}>
                <label>Nombres y apellidos</label>
                <input
                    name="fullName"
                    type="text"
                    {...bindFullName}
                />
                <br />
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    {...bindEmail}
                />
                <br />
                <label>Username</label>
                <input
                    name="userName"
                    type="text"
                    {...bindUserName}
                />
                <br />
                <label>Password</label>
                <input
                    name="password"
                    type="text"
                    {...bindPassword}
                />
                <br />
                <input type="submit" value="Enviar" />
                <br />
                <span>Los datos ingresados son: {JSON.stringify(items)}</span>
            </form>
        </div>
    )
}
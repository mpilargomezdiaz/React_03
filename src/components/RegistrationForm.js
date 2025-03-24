import React, { useState } from 'react';

export default function Form() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const handleUser = (event) => {
        setUser(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    return (
        <div>
            <h1>Registration Form</h1>
            <div>
                <div>
                <label>Nombre de Usuario:</label>
                </div>
                <div>
                <input type="text" value={user} onChange={handleUser} />
                </div>
            </div>
            <div>
                <div>
                <label>Correo Electrónico:</label>
                </div>
                <div>
                <input type="text" value={email} onChange={handleEmail} />
                </div>
            </div>
            <button className="boton_enviar" formMethod="get">Enviar</button>
            <div>
            <p>Nombre de usuario: {user}</p>
            </div>
            <div>
            <p>Correo electrónico: {email}</p>
            </div>
        </div>
    );
}




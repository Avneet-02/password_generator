import React, { useState } from 'react';

export const Box = () => {
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        let pass = '';
        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
        for (let index = 1; index <= 8; index++) {
            let char = Math.floor(Math.random() * string.length);
            pass += string.charAt(char);
        }
        setPassword(pass);
    };

    const copyPassword = () => {
        
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <>
            <div className='container'>
                <h2>Random Password Generator App</h2>
                <input type='text' readOnly disabled value={password} />
                <div className='btns'>
                    <button onClick={generatePassword}>Generate Password</button>
                    <button onClick={copyPassword}>Copy Password</button>
                </div>
            </div>
        </>
    );
};

export default Box;

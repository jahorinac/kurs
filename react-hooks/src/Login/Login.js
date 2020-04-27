import React, {useEffect, useRef} from 'react';

function Login() {

    const textInput = useRef()

    useEffect(()=>{

        textInput.current.focus()

    }, []);

    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <input type="text" ref={textInput} placeholder="name"/>
                <input type="text" placeholder="email"/>
            </form>
        </div>
    );
}

export default Login;
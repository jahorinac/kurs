import React from 'react';

function Home(props) {
    console.log(props)
    setTimeout(()=>{
        props.history.push('/about')
    }, 3000)
    return (
        <h1>Home Component</h1>
    );
}

export default Home;
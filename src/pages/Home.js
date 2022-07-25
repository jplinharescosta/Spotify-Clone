import React from "react";
import Nav from "../components/Nav";
import { loginUrl } from "../components/Spotify";

const handleClick = () => {  
  
}

const Home = ({authToken}) => {
  return (
    <>
      <Nav authToken={authToken} />
      <div className="overlay">
        <div className="home">
          <h1>Escutar muda tudo</h1>
          <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
          <a href={loginUrl}>
          <button onClick={handleClick} className="primary-button">            
            {authToken ? 'ESCUTAR AGORA' : 'ENTRE AGORA'}                        
          </button>
          </a> 
        </div>
      </div>
    </>

  )
}

export default Home;
import React, { useEffect, useState } from 'react'
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./scripts/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from "./DataLayer"
const spotify = new SpotifyWebApi();

function App() {

  const[token, setToken] = useState(null);

  

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(" 👤 ", user); 
      })
    }

    console.log(" I HAVE A TOKEN>>> ", token);
  
  }, []);

  return (
    <div className='app '>
      <div className='all-components max-w-[1280px] flex flex-col mx-auto'>
        <div className='login-screen'>
          {token?(<Player/>):(<Login />)}
        </div>
      </div>
    </div>
  )
}

export default App

// Client ID 0065986c5e96423ab318b7346c14f686 
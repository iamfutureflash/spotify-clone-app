import React, { useEffect, useState } from 'react'
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./scripts/spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from "./DataLayer"
const spotify = new SpotifyWebApi();

function App() {

  // const[token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, []);
  return (
    <div className='app '>
      <div className='all-components'>
        <div className='login-screen'>
          {token?(<Player spotify={spotify}/>):(<Login />)}
        </div>
      </div>
    </div>
  )
}

export default App

// Client ID 0065986c5e96423ab318b7346c14f686 
import React, { useEffect } from 'react'
import Home from './pages/Home';
import Player from './pages/Player';
import { getTokenFromUrl } from './components/Spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  const [token, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      console.log("asdasd", _token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })


      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist("37i9dQZEVXcXGuO7iF27wN").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, [token, dispatch]);



  return (
    <div className='app'>      
      {token ? <Player spotify={spotify}/> : <Home />}
    </div>
  )
}

export default App;

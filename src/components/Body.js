import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import './Body.css'
import Header from './Header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';

function Body({ spotify }) {

  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  
  const discoveryPlayList = discover_weekly?.uri;    
  
  const playPlaylist = (id) => {
    spotify.play({context_uri: discoveryPlayList}).then((res) => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    });
  };

  const playSong = (id) => {
    spotify.play({uris: [`spotify:track:${id}`],}).then((res) => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        })
      })
    })
  }

  
 
  return (
    <div className='body'>        
        <Header spotify={spotify} />

        <div className='body__info'>
          <img src={discover_weekly?.images[0].url} alt='' />
          <div className='body__infoText'>
            <strong>PLAYLIST</strong>
            <h2>
              {discover_weekly?.name}
            </h2>
            <p>
              {discover_weekly?.description}              
            </p>
            <p className='body__infoTextAuthor'>
               <a href={discover_weekly?.owner?.external_urls?.spotify}>
                {discover_weekly?.owner?.display_name}</a> <span></span> {discover_weekly?.tracks?.items.length} músicas
            </p>            
          </div>
       </div>
       <div className='body__songs'>
        <div className='body__icons'>          
          <PlayCircleFilledIcon onClick={playPlaylist} className='body__shuffle' />
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />          
        </div> 

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}

        <div>
        </div>
        

        
        {/* Lists of songs */}
       </div>
    </div>
  
  )
}

export default Body
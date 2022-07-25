import React from 'react'
import './Sidebar.css'
import whiteLogo from '../images/sp-white-logo.png';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {

  const [{ playlists }, dispatch] = useDataLayerValue()  
  

  return (
    <div className='sidebar'>
        <img src={whiteLogo} className='sidebar__logo'/>
        <SidebarOption Icon={HomeIcon} title='Início'/>
        <SidebarOption Icon={SearchIcon} title='Buscar'/>
        <SidebarOption Icon={LibraryMusicIcon} title='Sua Biblioteca'/>
        <br />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr />        

        {playlists?.items?.map((playlists) => (
          <SidebarOption title={playlists.name}/>
        ))}
    </div>
  )
}

export default Sidebar
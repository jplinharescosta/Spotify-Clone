import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../DataLayer';

function Header() {
  const [{ user }, dispatch]  = useDataLayerValue();  

  return (
    <div className='header'>
        <div className='header__left'>
            <SearchIcon />
            <input 
                placeholder='Artistas, músicas ou podcasts'
                type="text"
            />
        </div>

        <div className='header__right'>
            <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
            <h4>{user?.display_name}</h4>
            <ArrowDropDownIcon />

        </div>
    </div>
  )
}

export default Header
import React from 'react'
import './SideBar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function SideBar() {
    
    const [{playlists}, dispatch] = useDataLayerValue();
    
    return (
        <div className="sideBar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
        <SidebarOptions title="Home" Icon={HomeIcon} />
        <SidebarOptions title="Search" Icon={SearchIcon}/>
        <SidebarOptions title="Library" Icon={LibraryMusicIcon} />

        <br />
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr />

         {playlists?.categories?.items?.map(playlist  => (
             <SidebarOptions title={playlist.name} /> 
        ))}   


        {/* <SidebarOptions title="Hip-Hop" />
        <SidebarOptions title="Rock" />
        <SidebarOptions title="Pop" /> */}

        </div>
    )
}

export default SideBar

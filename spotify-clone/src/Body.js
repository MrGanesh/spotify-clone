import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Body({spotify}) {
    const [{top_fifty}, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify}/>
            {top_fifty?(<div className="body_info">
                <img src={top_fifty?.images[0].url} alt=""/>
                <div className="body_infoText">
                    <strong>{top_fifty?.type}</strong>
                    <h2>{top_fifty?.name}</h2>
                    <p>{top_fifty?.description}</p>
                </div>
            </div>): <div></div>}
            {top_fifty?(
            <div className="body_song">
                <div className="body_icons">
                <PlayCircleFilledIcon className="body_shuffle"/>
                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon />
                </div>

                {top_fifty?.tracks.items.map((item)=>(
                    <SongRow track={item.track} />
                ))}

            </div>): <div></div> }
            
        </div>
    )
}

export default Body

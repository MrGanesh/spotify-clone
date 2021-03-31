import React from 'react'
import './Footer.css'
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';


function Footer() {
    return (
        <div className="footer">
           <div className="footer_left">
                <img className="footer_albumLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pVxZzeuHEZvMfCut_Ah6rxK9KUQj9KC9tq3GtYyMFAcLZ4Fdq7Fx-vw" alt="" />
                <div className="footer_songInfo">
                    <h4>Yeah</h4>
                    <p>User</p>
                </div>
           </div>
           <div className="footer_center">
               <ShuffleIcon className="footer_green" />
               <SkipPreviousIcon className="footer_icon" />
               <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer_icon" />
               <SkipNextIcon className="footer_icon" />
               <RepeatIcon className="footer_green" />
           </div>
           <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
           </div>
        </div>
    )
}

export default Footer

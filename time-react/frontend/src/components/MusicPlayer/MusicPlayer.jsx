import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css';


const MusicPlayer = () => (
    <div className='musicPlayer'>
        <AudioPlayer
            autoPlay
            src='https://cdn.pixabay.com/audio/2021/08/22/audio_9a17017104.mp3'
            onPlay={e => console.log("onPlay")}
            volume={0.3}
            loop={true}
            showFilledVolume={true}  
        />
    </div>
);

export default MusicPlayer;

// Track info:
// Author: Zen_Man
// Track name: Modular Ambient 06 - Endless Sequence
// source: https://pixabay.com/music/pulses-modular-ambient-06-endless-sequence-7597/
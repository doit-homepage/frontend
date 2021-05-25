import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios'
import React from 'react'
import socketio from 'socket.io-client'


const getWebcam = (callback) => {
    try {
      const constraints = {
        'video': true,
        'audio': false
      }
      navigator.mediaDevices.getUserMedia(constraints)
        .then(callback);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  
  const Styles = {
    Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
    None: { display: 'none' },
  }
  
function Video() {
    const [playing, setPlaying] = React.useState(undefined);

    const videoRef = React.useRef(null);
  
    React.useEffect(() => {
      getWebcam((stream => {
        setPlaying(true);
        videoRef.current.srcObject = stream;
      }));
    }, []);
  
    const startOrStop = () => {
      if (playing) {
        const s = videoRef.current.srcObject;
        s.getTracks().forEach((track) => {
          track.stop();
        });
      } else {
        getWebcam((stream => {
          setPlaying(true);
          videoRef.current.srcObject = stream;
        }));
      }
      setPlaying(!playing);
    }
  
    return (<>
      <div style={{ width: '50%', height: '50%', padding: '3em' }}>
        <video ref={videoRef} autoPlay style={Styles.Video} />
        <button onClick={() => startOrStop()}>{playing ? 'Stop' : 'Start'} </button>
      </div >
      <hr />
    </>);
}

export default Video;

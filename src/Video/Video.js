import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import axios from 'axios'
import { useRef } from 'react'
import socketio from 'socket.io-client'

function Video() {
    var localVideo = document.getElementById("localVideo")
    let localStream;
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(gotStream)
    .catch((err) => {
        console.log(err)
    })
    function gotStream(stream){
        localStream = stream
        localVideo.srcObject = stream
    }
    return (
        <div className="Video">
            <video id="localVideo" playsInline autoplay width="480px"></video>
            <video id="remoteVideo" width="480px" autoplay></video>
        </div>
    );
}

export default Video;

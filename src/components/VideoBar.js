import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPlaylist } from "../actions/playListActions";
import store from "../store";
import VideoJs from "./VideoJS/VideoJs";
const VideoBar = ({ props }) => {
    const playerRef = useRef(null);
    const dispatch = useDispatch();
    const playList = useSelector((state) => state.playList);
    store.subscribe(() => {
        playListData = store.getState().playList.playListData;
    });
    let { playListData } = playList;
    const defaultSrc = {
        src: "https://webstatic.watchanime.dev/player/videoplaybackmaster.m3u8",
        type: "application/x-mpegURL",
    };
    const videoJsOptions = {
        // lookup the options in the docs for more options
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [defaultSrc],
    };
    const handlePlayerReady = (player) => {
        playerRef.current = player;
        /**
         * Player Events
         */
        player.on("ready", () => {
            player.src() === defaultSrc.src && player.reset();
        });
        player.on("waiting", () => {
            console.log("player is waiting");
        });
        player.on("dispose", () => {
            console.log("player will dispose");
        });
        player.on("ended", () => {
            handleEndedEvent(player.src());
        });
    };
    const playNextVideo = () => {
        if (playListData.length) {
            playerRef.current.src({
                src: playListData[0],
                type: playListData[0].includes(".m3u8") ? "application/x-mpegURL" : "video/mp4",
            });
        }
    };
    const handleEndedEvent = (videoUrl) => {
        dispatch(removeFromPlaylist(videoUrl));
        playNextVideo();
    };
    if (playListData.length && !playerRef.current.src()) {
        playNextVideo();
    }
    return (
        <>
            <div className="d-flex px-0 bg-dark" id="videobar">
                <div className="w-100">
                    <VideoJs options={videoJsOptions} onReady={handlePlayerReady} props={props} />
                </div>
            </div>
        </>
    );
};

export default VideoBar;

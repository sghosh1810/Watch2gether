import React, { useState } from "react";
import GenericModal from "../components/GenericModal";
import SideBar from "../components/SideBar";
import VideoBar from "../components/VideoBar";
const PlayerScreen = (props) => {
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const playListModalConfig = {
        // header: "Playlist",
        type: "playlist",
        // size: "xl",
        dialogClassName: "playlistModal",
        modalBodyStyle: { display: "flex", padding: "0px", overflowY: "hidden" },
    };
    return (
        <div id="videoContainer" className="w-100">
            <SideBar props={props} setShowPlaylistModal={setShowPlaylistModal} />
            <VideoBar props={props} />
            <GenericModal showModal={showPlaylistModal} setModal={setShowPlaylistModal} modalConfigData={playListModalConfig} />
        </div>
    );
};

export default PlayerScreen;

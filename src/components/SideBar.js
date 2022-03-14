import React, { useState, useEffect } from "react";
import { Button, ListGroup, OverlayTrigger, Tooltip, Nav, Tab } from "react-bootstrap";
import { getUrlParameter } from "../custom/custom";
import { useHistory } from "react-router-dom";
const SideBar = ({ props, setShowPlaylistModal }) => {
    let history = useHistory();
    const roomId = getUrlParameter("roomId", props.location.search) || "";
    const [peerList, setPeerList] = useState(["test", "hek"]);
    const redirectHome = () => {
        history.push("/");
    };
    useEffect(() => {
        if (!roomId) {
            history.push("/");
        }
    }, [roomId, history]);
    return (
        <>
            <div className="align-items-center text-center" id="sidebar">
                <div className="square-button mt-2">
                    <Button id="potato-button" type="button" variant="dark" onClick={redirectHome}>
                        <img
                            id="potato-button"
                            src="data:image/png;base64,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"
                            alt=""
                        ></img>
                        <h4 className="my-0 mx-2">Watch2gether</h4>
                    </Button>
                </div>
                <Tab.Container defaultActiveKey="Info">
                    <Nav variant="tabs" className="mt-2 w-100">
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="Info" role="tab">
                                Info
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="Chat" role="tab">
                                Chat
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane label="info-tabs-tabpane-Info" eventKey="Info">
                            <OverlayTrigger key="top" placement="top" overlay={<Tooltip>Couch ID: {roomId}</Tooltip>}>
                                <div className="mt-2 w-100">
                                    <ListGroup as="ul">
                                        <ListGroup.Item variant="success" className="py-2" as="li">
                                            {roomId}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </OverlayTrigger>
                            <div className="mt-2 w-100" id="peer-list">
                                <ListGroup as="ul">
                                    {peerList.map((peer, i) => {
                                        return (
                                            <ListGroup.Item variant="info" className="py-2 px-0" as="li" key={i}>
                                                <i className="material-icons ml-3 float-left">sync</i>
                                                <p className="mb-0 position-absolute w-100">
                                                    <b>{peer}</b>
                                                </p>
                                                <i className="material-icons mr-3 float-right"></i>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane label="info-tabs-tabpane-Chat" eventKey="Chat"></Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <div className="w-100 mt-2" style={{ display: "grid", gridTemplateColumns: "1fr 1rem auto 1rem 1fr" }}>
                    <a href="/help" className="text-info" target="_blank" style={{ justifySelf: "end" }}>
                        Help
                    </a>
                    <p className="text-center mb-0">·</p>
                    <a href="#t" target="_blank" className="text-info" style={{ justifySelf: "center" }}>
                        Feedback
                    </a>
                    <p className="text-center mb-0">·</p>
                    <a href="#s" className="text-info" style={{ justifySelf: "start" }}>
                        Merch
                    </a>
                </div>
                <div className="square-button mt-2">
                    <Button type="button" variant="dark" onClick={() => setShowPlaylistModal(true)}>
                        <i className="material-icons">playlist_play</i>
                        <span className="ml-2">Playlist</span>
                    </Button>
                </div>
                <div className="square-button mt-2 mb-2">
                    <Button type="button" variant="dark">
                        <i className="material-icons">settings</i>
                        <span className="ml-2">Options</span>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SideBar;

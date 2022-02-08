import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl, ListGroup, Alert } from "react-bootstrap";
import { addToPlaylist, removeFromPlaylist } from "../actions/playListActions";
import { useDispatch } from "react-redux";
import store from "../store";
const GenericModal = ({ showModal, setModal, modalConfigData = {} }) => {
    const [playListData, setPlayListData] = useState([]);
    const [inputVideoUrl, setInputVideoUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [hideError, setErrorHide] = useState(true);
    const dispatch = useDispatch();
    store.subscribe(() => {
        setPlayListData(store.getState().playList.playListData);
    });
    const handleClose = () => {
        setModal(false);
    };
    const handleInputVideoUrlSubmit = (inputVideoUrl) => {
        if (!playListData.includes(inputVideoUrl)) {
            dispatch(addToPlaylist(inputVideoUrl));
            setPlayListData([...playListData, inputVideoUrl]);
            setInputVideoUrl("");
        } else {
            setErrorMessage("Duplicate video. This url is already present in the watchlist!");
            setErrorHide(false);
        }
    };
    const handleDeleteFromPlayList = (videoUrl) => {
        dispatch(removeFromPlaylist(videoUrl));
    };
    const genericModalConfig = {
        header: "",
        type: "",
        size: "sm", //sm,lg,xl
        dialogClassName: "",
        hasCloseButton: true,
        isCentered: false,
        class: "",
        modalBodyStyle: {},
    };
    modalConfigData = { ...genericModalConfig, ...modalConfigData };
    const renderModalBody = (type) => {
        switch (type) {
            case "playlist":
                return (
                    <>
                        <div id="playlistLeft">
                            <div id="playlist">
                                {playListData.length ? (
                                    <ListGroup as="ul">
                                        {playListData.map((video, i) => {
                                            return (
                                                <ListGroup.Item as="li" className="px-2" style={{ height: "6rem" }} key={i}>
                                                    <div className="d-flex w-100 h-100">
                                                        <img src={`https://zoomers-backend-staging.herokuapp.com:443/thumbnail/potato?f=9e0057&b=887aff&s=008a0b`} className="mr-2" alt="" style={{ height: "100%", width: "auto" }}></img>
                                                        <div className="d-flex flex-column" style={{ minWidth: "0px" }}>
                                                            <div className="d-flex">
                                                                <b style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{video}</b>
                                                                <div className="d-flex" style={{ marginRight: "auto" }}>
                                                                    <Button variant="link" size="sm">
                                                                        <i className="material-icons" style={{ fontSize: "1rem" }}>
                                                                            closed_caption
                                                                        </i>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <span>Name</span>
                                                        </div>
                                                        <div className="ml-auto d-flex flex-column text-center">
                                                            <span className="h-50 flex-grow">
                                                                <i className="material-icons">drag_handle</i>
                                                            </span>
                                                            <Button type="button" variant="secondary" onClick={handleDeleteFromPlayList.bind(null, video)}>
                                                                <i className="material-icons" style={{ fontSize: "1rem" }} value={video}>
                                                                    delete_outline
                                                                </i>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                ) : (
                                    <p>The playlist is empty! Use the panel on the right to add a video.</p>
                                )}
                            </div>
                        </div>
                        <div id="detailsRight">
                            <p>Add to playlist</p>
                            <div className="d-flex flex-column" style={{ minHeight: "0px" }}>
                                <div className="d-flex" id="source-buttons"></div>
                                <InputGroup className="mb-3">
                                    <FormControl placeholder="Direct video link" aria-label="Direct video link" aria-describedby="basic-addon2" value={inputVideoUrl} onChange={(e) => setInputVideoUrl(e.target.value)} />
                                    <Button variant="primary" disabled={Boolean(inputVideoUrl) === false} onClick={(e) => handleInputVideoUrlSubmit(inputVideoUrl)}>
                                        Add
                                    </Button>
                                </InputGroup>
                                <div>
                                    <Alert variant="danger" onClose={() => setErrorHide(true)} hidden={hideError} dismissible>
                                        {errorMessage}
                                    </Alert>
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                break;
        }
    };
    return (
        <>
            <Modal show={showModal} onHide={handleClose} centered={modalConfigData.isCentered} size={modalConfigData.size} dialogClassName={modalConfigData.dialogClassName} className={modalConfigData.class}>
                {modalConfigData.header && (
                    <Modal.Header closeButton={modalConfigData.hasCloseButton} closeVariant="white">
                        <Modal.Title>{modalConfigData.header}</Modal.Title>
                    </Modal.Header>
                )}
                <Modal.Body style={modalConfigData.modalBodyStyle}>{renderModalBody(modalConfigData.type)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default GenericModal;

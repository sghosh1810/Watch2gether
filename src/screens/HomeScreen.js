import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { verifyRoom } from "../custom/room";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const HomeScreen = () => {
    const history = useHistory();
    const [roomId, setRoomId] = useState("");
    const handleHostClick = async () => {
        history.push(`/user?roomOpn=host`);
    };
    const handleExistingRoomClick = () => {
        toast.promise(
            verifyRoom(roomId),
            {
                pending: "Verifying your room id 😎",
                success: {
                    render() {
                        setTimeout(() => history.push(`/user?roomOpn=join&roomId=${roomId}`), 1000);
                        return "Redirecting to your room 👌";
                    },
                },
                error: "Oops! Could find your room 🤯",
            },
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            }
        );
    };
    return (
        <>
            <ToastContainer position="top-right" autoClose={false} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} theme="dark" draggable pauseOnHover />
            <Header />
            <div id="splashContainer" className="w-100 visible">
                <div id="header" className="w-100 mt-5 text-center">
                    <h1>You are now a (beta) potato.</h1>
                    <p className="w-75 ml-auto mr-auto">Here you can help us test out our newest features! Keep in mind that you can only connect to beta couches here. There may be some bugs—please report these to us!</p>
                </div>
                <div id="card_host" align="center" className="p-5 h-100 d-flex border border-primary rounded bg-dark col">
                    <div className="mx-auto my-auto">
                        <h3>Host a new room</h3>
                        <Button variant="primary" onClick={handleHostClick}>
                            Host
                        </Button>
                    </div>
                </div>
                <div id="card_connect" align="center" className="p-5 h-100 d-flex border border-primary rounded bg-dark col">
                    <div className="mx-auto my-auto">
                        <h3>Join an existing room</h3>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Enter Room ID" aria-label="Enter Room ID" aria-describedby="basic-addon2" onChange={(e) => setRoomId(e.target.value)} />
                            <Button variant="primary" onClick={handleExistingRoomClick}>
                                Add
                            </Button>
                        </InputGroup>
                    </div>
                </div>
                <div id="footer" className="mb-3" style={{ display: "grid", gridTemplateColumns: "1fr 1rem auto 1rem 1fr", alignItems: "end" }}>
                    <div className="d-flex align-items-end">
                        <div className="d-flex">
                            <button type="button" className="d-flex ml-3 align-items-center mr-2 btn btn-dark">
                                <i className="material-icons my-auto">help</i>
                            </button>
                            <button type="button" className="d-flex ml-1 align-items-center mr-2 btn btn-dark">
                                <i className="material-icons my-auto">new_releases</i>
                            </button>

                            <button type="button" className="d-flex ml-1 align-items-center mr-2 btn btn-outline-warning">
                                <i className="material-icons my-auto">redeem</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeScreen;

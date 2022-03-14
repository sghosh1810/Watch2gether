import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { createRoom, joinRoom } from "../custom/room";
import { ToastContainer, toast } from "react-toastify";
import { getUrlParameter } from "../custom/custom";
import Header from "../components/Header";

const UserScreen = ({ location }) => {
    const history = useHistory();
    const roomOperation = getUrlParameter("roomOpn", location.search);
    const roomId = getUrlParameter("roomId", location.search) || "";
    const [userName, setUserName] = useState(localStorage.getItem("username") || getUrlParameter("userName", location.search) || "");
    const handleHost = () => {
        toast.promise(
            createRoom(),
            {
                pending: "Creating your room 😎",
                success: {
                    render(e) {
                        setTimeout(() => history.push(`/player?roomId=${e.data.roomId}`), 1000);
                        return "Redirecting to your room 👌";
                    },
                },
                error: "Oops! Error occured while creating your room 🤯",
            },
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            }
        );
        localStorage.setItem("username", userName);
    };
    const handleExistingRoom = () => {
        toast.promise(
            joinRoom(roomId),
            {
                pending: "Verifying your room id 😎",
                success: {
                    render() {
                        setTimeout(() => history.push(`/player?roomId=${roomId}`), 1000);
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
    const handleJoinClick = () => {
        roomOperation === "host" ? handleHost() : handleExistingRoom();
    };
    return (
        <>
            <ToastContainer position="top-right" autoClose={false} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} theme="dark" draggable pauseOnHover />
            <Header />
            <div id="nicknameContainer" className="w-100 visible">
                <div className="d-flex w-75 h-100 my-auto container-fluid">
                    <div className="h-100 align-items-center row w-100">
                        <div id="card_connect" align="center" className="p-5 h-100 d-flex border border-primary rounded bg-dark col">
                            <div className="mx-auto my-auto">
                                <h3>Enter your username</h3>
                                <InputGroup className="mb-3">
                                    <FormControl placeholder="Enter Username" aria-label="Enter Username" aria-describedby="basic-addon2" onChange={(e) => setUserName(e.target.value)} value={userName} />
                                    <Button variant="primary" onClick={handleJoinClick}>
                                        Join
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserScreen;

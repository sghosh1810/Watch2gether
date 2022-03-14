import axios from "axios";
function createRoom() {
    return new Promise((resolve, reject) => {
        var data = JSON.stringify({
            hostUserId: "a5s4d5-s2d145-5ad4a1d-54s5f4",
        });
        var config = {
            method: "POST",
            url: `https://watch2gether-api.panel.deployer.in/room/createRoom`,
            headers: { "Content-Type": "application/json" },
            data: data,
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject();
            });
    });
}
function joinRoom(roomId) {
    return new Promise((resolve, reject) => {
        var config = {
            method: "get",
            url: `https://watch2gether-api.panel.deployer.in/room/joinRoom?roomId=${roomId}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                resolve();
            })
            .catch(function (error) {
                reject();
            });
    });
}
function verifyRoom(roomId) {
    return new Promise((resolve, reject) => {
        var config = {
            method: "get",
            url: `https://watch2gether-api.panel.deployer.in/room/verifyRoom?roomId=${roomId}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                resolve();
            })
            .catch(function (error) {
                reject();
            });
    });
}
export { createRoom, joinRoom, verifyRoom };

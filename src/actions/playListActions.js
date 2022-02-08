import { PLAYLISTDATA_ADD_ITEM, PLAYLISTDATA_REMOVE_ITEM } from "../constants/playListConstants";

export const addToPlaylist = (video) => async (dispatch, getState) => {
    dispatch({
        type: PLAYLISTDATA_ADD_ITEM,
        payload: {
            video: video,
        },
    });
};

export const removeFromPlaylist = (video) => async (dispatch, getState) => {
    dispatch({
        type: PLAYLISTDATA_REMOVE_ITEM,
        payload: {
            video: video,
        },
    });
};

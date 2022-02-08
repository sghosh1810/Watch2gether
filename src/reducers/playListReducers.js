import { PLAYLISTDATA_ADD_ITEM, PLAYLISTDATA_REMOVE_ITEM } from "../constants/playListConstants";

export const playListReducer = (state = { playListData: [] }, action) => {
    switch (action.type) {
        case PLAYLISTDATA_ADD_ITEM:
            return { ...state, playListData: [...state.playListData, action.payload.video] };
        case PLAYLISTDATA_REMOVE_ITEM:
            return { ...state, playListData: state.playListData.filter((video) => video !== action.payload.video) };
        default:
            return state;
    }
};

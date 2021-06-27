import {
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  CREATE_NOTE_SUCCESS,
  UPDATE_NOTE_SUCCESS,
} from "./note.type";

export const noteReducer = (state = { notes: [], currentId: null }, action) => {
  switch (action.type) {
    case GET_NOTE_REQUEST:
      return { ...state, loading: true };
    case GET_NOTE_SUCCESS:
      return { ...state, loading: false, notes: action.payload };
    case CREATE_NOTE_SUCCESS:
      return { ...state, noteCreated: action.payload };
    case "GET_ID":
      return { ...state, currentId: action.payload };
    case "SET_ID":
      return { ...state, currentId: action.payload };
    case UPDATE_NOTE_SUCCESS:
      //re-rendering everything with update data if it is else same as first
      return { ...state, noteUpdated: action.payload };
    default:
      return state;
  }
};

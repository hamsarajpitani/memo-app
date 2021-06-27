import {
  GET_NOTE_SUCCESS,
  CREATE_NOTE_SUCCESS,
  GET_NOTE_REQUEST,
} from "./note.type";
import axios from "axios";

const url = "http://localhost:4000/api/notes";

export const getNotes = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NOTE_REQUEST });
    const { data } = await axios.get(url);
    dispatch({ type: GET_NOTE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNote = (notedata) => async (dispatch,getState) => {
  try {

    const {authState: {authData}} = getState();

    const config = {
      headers:{
        Authorization: authData.token
      }
    }
    console.log(JSON.stringify(notedata));
    const { data } = await axios.post(url, notedata,config);
    // alert(JSON.stringify(data));
    dispatch({ type: CREATE_NOTE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = (id, newdata) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, newdata);
    dispatch({ type: "UPDATE_NOTE_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

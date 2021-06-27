import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import { noteReducer } from "./note/note.reducer";


const rootReducer = combineReducers({
  noteState: noteReducer,
  authState: authReducer
});



export default rootReducer;

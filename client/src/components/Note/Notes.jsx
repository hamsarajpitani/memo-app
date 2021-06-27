/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import CircularProgress from "@material-ui/core/CircularProgress";

const Notes = ({ setcurrentId }) => {
  const notesstate = useSelector((state) => state.noteState);
  console.log('NOTE_STATE_------->',notesstate);
  const { loading, notes } = notesstate;
  console.log("NOTES----->", notes);
  return (
    <>
      <div className="mt-5 d-flex justify-content-around align-items-center flex-wrap">
        {loading ? (
          <CircularProgress/>
        ) : (
          // notes &&
          notes?.map(
            ({ title, _id, note}) => (
              
              <Note
                title={title}
                key={_id}
                id={_id}
                note={note}
                setcurrentId={setcurrentId}
              />
            )
          )
        )}
      </div>  
    </>
  );
};

export default Notes;

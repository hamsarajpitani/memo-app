import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteNote, getNotes } from "../../redux/note/note.actions";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Card from '@material-ui/core/Card';

const Note = ({
  id,
  title,
  note,
  setcurrentId
}) => {

  const dispatch = useDispatch();

  const handledelete = (id) => {
    // console.log('ID--->',id);
    dispatch(deleteNote(id));
    dispatch(getNotes());
  };

  return (
    <Card
      class="card my-3 text-black p-3 text-capitalize "
      style={{ width: "19rem",height:"20rem" , boxShadow: "0px 10px 20px rgba(0,0,0,.3)" }}
    >
      
      <h5 class='fw-bold'>{title}</h5>
      <div class="card-body text-start position-relative d-flex flex-column justify-content-between">
        <p class="card-text">{note}</p>
      
        <div className="buttons d-flex justify-content-between">
          <Button  variant="contained" color="primary" onClick={() => handledelete(id)}>
           <DeleteIcon/>
          </Button>
          <Button  variant="contained" color="primary"  onClick={() => setcurrentId(id)}>
          <ExpandLessIcon/>update
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Note;

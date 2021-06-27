import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createNote, getNotes, updateNote } from "../../redux/note/note.actions";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

const Form = ({ currentId, setcurrentId }) => {
  //* prefetching and filling data in case of update
  const notestate = useSelector((state) => state.noteState);
  const { notes } = notestate;

  const [notedata, setNotedata] = useState({
    title: "",
    note: "",
  });

  const prenoteData = currentId
    ? notes && notes.find((note) => note._id === currentId)
    : null;

  useEffect(() => {
    console.log('preNOte--->',prenoteData)
    if (prenoteData) setNotedata(prenoteData);
  }, [prenoteData]);

  const dispatch = useDispatch();
  

  const handlechange = (e) => {
    const { name, value } = e.target;
    //*** [name]:value */
    setNotedata({ ...notedata, [name]: value });
  };
  // const create =()=>{

  // }
  const handlesubmit = (e) => {
    // e.preventDefault();
    // alert(JSON.stringify(notedata));
    // alert(currentId);
    if (currentId) {
      dispatch(updateNote(currentId, notedata));
      clearinputs();
    } else {
      dispatch(createNote(notedata));
    }
    // dispatch(getNotes());
  };

  const clearinputs = () => {
    //null curret id -->dependency in app.js
    setcurrentId(null);
    setNotedata({
      title: "",
      note: "",
    });
    // console.log('clear',postdata);
  };

  return (
    // <!-- First modal dialog -->
    <>
      <div class="card mt-4" style={{ width: "18rem" }}>
        <form className="p-3" onSubmit={handlesubmit}>
          <div class="mb-3 text-start text-capitalize">
            <p class="fw-bolder">{currentId ? 'Editing Your Notes': 'Create Your Note'}</p>

            <label for="title" class="form-label">
              title
            </label>
            <input
              onChange={handlechange}
              value={notedata.title}
              type="text"
              class="form-control mb-3"
              name="title"
              required
            />

            <label for="message" class="form-label">
              message
            </label>
            <textarea
              onChange={handlechange}
              value={notedata.note}
              type="text"
              class="form-control mb-3"
              name="note"
              required
              rows="2" 
              cols="25" 
              placeholder="Please Enter Your Notes Here"
            />
          </div>
          <div className="btn d-flex justify-content-between">
            <Button variant="contained" color="primary" onClick={clearinputs}>
              Clear
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

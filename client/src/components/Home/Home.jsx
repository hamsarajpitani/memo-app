import React from "react";
import Notes from "../Note/Notes";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getNotes } from "../../redux/note/note.actions";
import Form from "../Form/Form";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);

  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-8">
                <Notes setcurrentId={setcurrentId} />
              </div>
              <div className="col-4">
                <Form currentId={currentId} setcurrentId={setcurrentId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

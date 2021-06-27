/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory,useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log("localuser---->", user);

  //**to not manually go to '/' and refresh to see user details in navabr after logged*/

  useEffect(() => {
    // const token = user?.token;
    //**JWT
    //setting user while compoent loads
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]); //dependecy when location changes from /auth to /

  const handlesession = ()=>{
    if(user){
     dispatch({type:'AUTH_LOGOUT'})
      history.push("/auth") 
    }else{
      history.push('/');
    }
  }

  return (
    <>
      <nav class="navbar navbar-light bg-light sticky-top d-flex w-75 mx-auto" style={{boxShadow:'0px 10px 20px rgba(0,0,0,.2)'}}>
        <div class="container">
          <a class="navbar-brand  d-flex" href="#" onClick={() => history.push("/")}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/notes-447-1169750.png"
              alt=""
              width="30"
              height="24" 
              class="mx-2"
            />
            <h5 class="fw-bold "> Notes Maker</h5>
          
          </a>
          {user && (
            <div className="user fw-bold d-flex justify-content-center align-content-center text-capitalize">
              <img
                src={user?.result?.imageUrl}
                class="img-fluid "
                style={{ height: "40px", borderRadius: "10px" }}
                alt=""
              />
              <p class="float-end my-auto px-2 ">{user?.result?.name}</p>
            </div>
          )}
          
          <Button  variant="contained" color="secondary" onClick={handlesession}>
            {user ? "Logout" : "Sign In"}
          </Button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;

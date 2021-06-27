/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getUser, signin, signup } from "../../redux/auth/auth.actions";

const Auth = () => {

  const [isSignUp, setisSignUp] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
   const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handlesubmit = (e) => {
 const userdata = {firstname,
      lastname,
      password,
      Cpassword,
      email
     }
     console.log('userdata---->',userdata);

    alert('PRE-CHECKING FormDATA');
    alert(JSON.stringify(userdata))
    e.preventDefault();
      if(isSignUp){
      alert('calling signUp ACTION');
      alert('with FormDATA');
      alert(JSON.stringify(userdata))
      //passing history to naviagte once somthing happends
      dispatch(signup(userdata,history));
    }else{
      alert('calling sigin ACTION')
      const data = {email,password}
      // alert(JSON.stringify(data));
      // alert(formData);
      dispatch(signin(data,history));
    }
  };
  

  const GoogleSuccess = async (response) =>{

    try {
        const result = await response?.profileObj;
        const tokenId = await response?.tokenId;
        console.log(result,tokenId);
        //** sucess dispatcing action */
        dispatch(getUser(result,tokenId));

      //** after success login redirect to home */
      history.push('/');
        
    } catch (error) {
        console.log(error);
    }
  }

  const GoogleFailure =  () =>{
        console.log("Google LOGIN FAIL")
  }

  return (
    <div>
      {/* <div className="container">
            <div className="row">
                <div className="col-8 mx-auto my-4"> */}
      <div
        class="card mx-auto my-4 p-4"
        style={{ width: "20rem", boxShadow: "0px 10px 20px rgba(0,0,0,.2" }}
      >
        <form onSubmit={handlesubmit}>
          {isSignUp && (
            <>
              <div class="mb-3 d-flex">
                <input
                  type="text"
                  class="form-control"
                  placeholder="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  //   onChange={handlechange}
                />

                <input
                  type="text"
                  class="form-control"
                  placeholder="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}

                  //   value={lastname}
                  //   onChange={setLastname((e)=>e.target.value)}
                />
              </div>
            </>
          )}

          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isSignUp && (
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="confrim password"
                value={Cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>
          )}

          <button type="submit" class="btn btn-primary w-100 mb-3">
            {isSignUp ? "Create Account" : "Login"}
          </button>
          <GoogleLogin
            clientId="19483234419-jps8uunrko4p0i0jaec7aub4da8b6tf0.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                class="btn btn-dark w-100"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <i class="fa fa-google" aria-hidden="true"></i>
              </button>
            )}
            buttonText="Login"
            onSuccess={GoogleSuccess}
            onFailure={GoogleFailure}
            cookiePolicy={"single_host_origin"}
          />
        </form>
          <button
            class="d-block mx-auto my-2 btn text-success"
            onClick={() => setisSignUp(!isSignUp)}
          >
            {isSignUp ? "already have a account ? Login" : "Create new Account"}
          </button>
      </div>
    </div>
    //!!setisSignUp(!isSignUp) toggle TRUE & FALSE
    //     </div>
    //   </div>
    // </div>
  );
};

export default Auth;

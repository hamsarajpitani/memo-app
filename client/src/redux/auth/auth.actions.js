import axios from 'axios';
import {AUTH_SUCCESS} from './auth.types';

export const getUser = (result,tokenId)=> async (dispatch)=>{
    try {
        dispatch({ type: AUTH_SUCCESS , data : { result , tokenId } });
    } catch (error) {
        alert(error);
    }
}

const user = axios.create({baseURL:"http://localhost:4000/api/"});

export const signin = (formData,history)=> async (dispatch)=>{
    try {
        //TODO:signin user
        alert('ENTERED SIGNIN')
        console.log(formData);
        alert('consoled formdata');
        const { data } = await user.post('user/signin',formData);
        console.log('DATA--->',data)
        dispatch({type: AUTH_SUCCESS , data})    
        //TODO: navtage back
        localStorage.setItem("user",JSON.stringify(data))
        history.push('/');
    } catch (error) {
        alert(error);
    }
}


export const signup = (formData,history)=> async (dispatch)=>{
    try {
        //TODO:signup user
        alert('ENTERED signUp ACTIOn')
        alert(JSON.stringify(formData));
        alert('ENTERED BACKEND USER SIGNUP')
        const { data } = await user.post('user/signup',formData);
        console.log('SignUP--->',data);
       
        dispatch({type: AUTH_SUCCESS , data})  
        //TODO: navtage back
        history.push('/');
    } catch (error) {
       alert(error)
    }

}


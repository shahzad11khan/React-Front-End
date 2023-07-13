import React, { useState } from 'react'


const Login = () => {

  const [user,setUser]=useState();
  const [pass,setPass]=useState();
  const [msg,setMsg]=useState();
  var notifi="";


  const getvalue = (e) =>{
    var usr = document.getElementById("user").value;
    var pas = document.getElementById("pass").value;

    e.preventDefault();
    // alert("UserName: "+user+" Password: "+pass);
    if(usr == "" || pas == ""){
    //  alert("fill all Feild....");
    // setMsg("Fill All Feild...")
    document.getElementById("msg").innerHTML="Fill All Feild...";

    setTimeout(() => {
      setMsg("");
    }, 1500);

    }
    else if(usr =='khan' && pas =='khan'){
      // alert("Login....")
     setMsg("Login...");
      notifi=document.getElementById('notifi').innerHTML="UserName: "+user+" Password: "+pass;
     setTimeout(() => {
      setMsg("");
      notifi=null;
    }, 1500);


    }else if (pas !=='khan' || pas ==''){
      setMsg("Type Correct Password...");
      setTimeout(() => {
       setMsg("");
     }, 1500);
    }
    else if (pas =='khan' || pas !=='khan'){
      setMsg("Type Correct UserName...");
      setTimeout(() => {
       setMsg("");
       
      }, 1500);
    }
    setTimeout(() => {

      document.getElementById("user").value="";
      document.getElementById("pass").value="";
      document.getElementById('notifi').innerHTML="";
    

      
    }, 2000);

    
  }

  return (
    <div>
      <br></br>
      <div style={{height:'100px',width:'100px',marginLeft:'auto',marginRight:'auto'}} id='notifi'>{notifi}</div>
      <h5>LogIn Page</h5><br></br>
      <input type='text' id='user' onChange={(e)=>{setUser(e.target.value)}} placeholder='Enter UserName' required/><br></br><br></br>
      <input type='password' id='pass' onChange={(e)=>{setPass(e.target.value)}} placeholder='Enter Password' required/><br></br><br></br>
      <h5 id='msg'>{msg}</h5>
      <button onClick={getvalue}>Login</button>
      <br></br><br></br>
    </div>
  )
}

export default Login

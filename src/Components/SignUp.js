import React,{useState} from 'react'

const SignUp = () => {

  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [msg, setMsg] = useState();
  var notifi = "";

  const getvalue = (e) => {
    var usr = document.getElementById("user").value;
    var pas = document.getElementById("pass").value;
    var ema = document.getElementById("email").value;
    var phon = document.getElementById("phone").value;
    e.preventDefault();

    alert("UserName: "+user+" Password: "+pass+" Email: "+email+" Phone: "+phone);
    if (usr == "" || pas == "" || ema == "" || phon == "") {
      //  alert("fill all Feild....");
      // setMsg("Fill All Feild...")
      document.getElementById("msg").innerHTML = "Fill All Feild...";

      setTimeout(() => {
        setMsg("");
       
      }, 1500);
    } 
    setTimeout(() => {

      document.getElementById("user").value = "";
      document.getElementById("pass").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";

      document.getElementById('notifi').innerHTML = "";



    }, 2000);


  }

  return (
    <div>
      <br></br>
      <div style={{ height: '100px', width: '100px', marginLeft: 'auto', marginRight: 'auto' }} id='notifi'>{notifi}</div>
      <h5>SignUp Page</h5><br></br>
      <input type='text' id='user' onChange={(e) => { setUser(e.target.value) }} placeholder='Enter UserName' required /><br></br><br></br>
      <input type='email' id='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' required /><br></br><br></br>
      <input type='password' id='pass' onChange={(e) => { setPass(e.target.value) }} placeholder='Enter Password' required /><br></br><br></br>
      <input type='number' id='phone' onChange={(e) => { setPhone(e.target.value) }} placeholder='Enter Phone' required /><br></br><br></br>
      <h5 id='msg'>{msg}</h5>
      <button onClick={getvalue}>SignUp</button>
      <br></br><br></br>
    </div>
  )
}

export default SignUp

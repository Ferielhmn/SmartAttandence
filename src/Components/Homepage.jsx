import React from 'react';
import "../Styles/Homepage.css";

function Homepage({ onSingUpClick }){
return(
<div className="main">
    <div className="main-top">

<h1>SmartAttendance</h1>
<p className="text1">Authorized users only -</p>
<p className="text2">please sign in to access your dashboard.</p>


    </div>
<div className="main-buttom">
    <div className='box'>
<h1>User Account</h1>
 <form action='' >

 <select className='input'>
  <option value="">Student</option>
  <option value="student">Student</option>
  <option value="administration">Administrator</option>
  <option value="teacher">Teacher</option>
</select>
  
  <br></br>
 
<input className='input'  type ='text' placeholder='First Name' />
 
<br></br>
<input className='input'  type ='text' placeholder='Last Name' />
<br></br>

<button onClick={onSingUpClick}>Sing Up</button>

 </form>
</div>






</div>


</div>



);
}
export default Homepage ;

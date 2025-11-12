import React from 'react';
import "../Styles/Showreport.css";

import absences from "../Icons/absences.png";
import attandences from "../Icons/attandences.png";
import participation from "../Icons/participation.png";
import students from "../Icons/students.png"

function Showreport() {

return(
    <div  className="Showreport">
  <div className='partone'>
    <div className='parttop'>
<h1>Smartattandence</h1>
</div>
<p1 className='partbutton'>Reports</p1>

  </div>

<div className='parttwo'>

<ul className='carttypeone'>
    <div className='flex_it'>
    <img src={students} alt="absences " width="38px" height="25px" />
<li>109</li>
</div>
<li  className='do'>Total Students</li>

</ul>


<ul className='carttypetwo'>
   <div className='flex_it'>
 <img src={attandences} alt="absences " width="38px" height="25px" />
<li>66%</li>
 </div>
<li  className='do'>Attandences</li>

</ul>

<ul className='carttypeone'>
     <div className='flex_it'>
        <img src={absences} alt="absences " width="38px" height="25px" />
<li>44%</li>
</div> 
<li className='do'>  Absences</li>

</ul>


<ul className='carttypetwo'>
      <div className='flex_it'>
        <img src={participation} alt="absences " width="38px" height="25px" />
<li>52%</li>
</div>
<li  className='do'>Participation</li>

</ul>

</div>

    </div>
)

}

export default Showreport;
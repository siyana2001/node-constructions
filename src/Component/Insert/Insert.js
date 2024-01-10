import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-bootstrap'; 




export const Insert = () => {
  function inserting(event) {
    event.preventDefault();

    var layimg = document.getElementById("layimg").value;
    var description = document.getElementById("description").value;
    var image = document.getElementById("image").value;

  
    var data = {
      "layimg":layimg,
      "description" : description,
      "image"  : image,
      
    }

    if (layimg === "") {
      alert("Please enter the URL");
    }
    else if(description ===""){
      alert("Please write description")
    }
    else if(image ===""){
      alert("Please enter the 3D image URL")
    }
    
    
    else {
      axios.post("http://localhost:3003/inserting",data)
        .then((response,error)=>{
          if(error){
            alert("Data are not inserted")
          }
          else  if(response.data.status==="inserted"){
            alert("Data are inserted successfully")
            window.location.href="/view"
          }
        })
    }
  }
  

  return (
<>

<div>
      <div className="container mt-5">
        <center>
          <h3 className="mb-9">Insertion</h3>
          <form onSubmit={inserting} style={{ border: '1px solid #ccc', width: '400px', padding: '20px' }}>
            <div className="mb-3">
            
            <label htmlFor="name" className="form-label">LAYOUT URL</label>
            <input type='text' id='layimg' name='layimg' placeholder='Enter the Layout url' className='form-control' />
           
              <label htmlFor="name" className="form-label">DESCRIPTION</label>
              <input type="text" className="form-control" id="description" name="description" required placeholder="Enter the Description" />
            </div>
            
            <label htmlFor="name" className="form-label">3D IMAGE URL</label>
            <input type='text' id='image' name='image' placeholder='Enter the 3D Image url' className='form-control' />
        
            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop:'20px'}}>
              <button className=' enroll btn btn-dark' type="submit">Submit</button>
              <Link to ="/" className="enroll btn btn-dark ">back</Link>
            </div>
          </form>
        </center>
      </div>
    </div>
   
    </>
  );
};
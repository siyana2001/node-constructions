import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export function Update(){
    const {id}=useParams()
    const[layimg,setLayimg]=useState('')
    const[description,setDescription]=useState('')
    const[image,setImage]=useState('')
   
   
    
    useEffect(()=>{
        fetch("http://localhost:3003/getupdate/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setLayimg(data[0].layimg)
            setDescription(data[0].description)
            setImage(data[0].image)
           
           
    })
    },[])
    const updates=(event)=>{
        event.preventDefault();
        var layimg=document.getElementById("layimg").value
        var description=document.getElementById("description").value
        var image=document.getElementById("image").value
       

    
    var data={
        "layimg":layimg,
        "description":description,
        "image":image,
    }
    if (layimg ==='') {
        alert('Layout URL is empty');
    }
    
    else if (description === '') {
        alert('Description is empty');
    }
    else if (image ==='') {
        alert('3D image URL is empty');
    }
   
    else{
        axios.put('http://localhost:3003/update/'+id,data)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("Data are not updated")
            }
            else if(res.data.status==="updated"){
                alert("Data are updated successfully")
                window.location.href="/view"
            }
        })
    }
}
return(
    <>
         
        <div className="card">
      <div className="card-body">
      <h1 className="text-center text-dark">UPDATE</h1>
        <form onSubmit={updates}>
          <div className="mb-3">
          
            <label htmlFor="layimg" className="form-label">
             LAYOUT URL
            </label>
            <input
              type="text"
              className="form-control"
              id="layimg"
              value={layimg}
              placeholder="Enter the URL"
              onChange={(change) => {
                setLayimg(change.target.value);
              }}
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
             DESCRIPTION
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              placeholder="Enter the description"
              onChange={(change) => {
                setDescription(change.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              3D IMAGE URL
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              value={image}
              placeholder="Enter the 3d image url"
              onChange={(change) => {
                setImage(change.target.value);
              }}
            />
          </div>
           <button type="submit" className="btn btn-success">
            Update
          </button>
          <Link to ="/" className="enroll btn btn-dark ">back</Link>
        </form>
      </div>
    </div>
    </>
);
}
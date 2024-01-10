import React from "react"
import axios from "axios";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

export function Get(){
    
    const[getdata, setGetdata]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3003/getall")
        .then(res=>res.json())
        .then(data=>setGetdata(data))
    })
    const del = (id)=>{
        var key = {id:id}
        axios.post('http://localhost:3003/delete',key)
        .then((response,error)=>{
            if(error){
                alert("Data are not removed")
            }
            else if(response.data.status==="deleted"){
                alert("Data is deleted successfully");
            }
        })
    }
    return(
        <>
         <h1 style={{ color: '#f7403b', fontSize: '2rem' ,display: 'flex', flexDirection: 'column',alignItems: 'center', }}>HS CONSTRUCTIONS</h1>
            <section id="c" style={{ display: 'flex', flexWrap: 'wrap', margin: '60px', gap: '50px' }}>
      {getdata.map((value, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <div className="card" style={{ maxWidth: '380px' }}>
            <img src={value.layimg} className="card-img-top" alt="Course Image" height="280" />
            <div className="card-body">
              {/* <h5 className="card-title">{value.name}</h5> */}
             
              <h6 className="card-subtitle mb-2 text-muted">DESCRIPTION: {value.description}</h6>
              
              <br /><hr/>
              
              <div style={{ display: 'flex', gap: '10px' }}>
  <button className="btn btn-danger text-light" onClick={() => { del(value.id) }}>Delete</button>

  <Link to={`/getone/${value.id}`}>
    <button className="btn btn-success text-light">3D IMAGE</button>
  </Link>

  <Link to={`/update/${value.id}`}>
    <button className="btn btn-dark">Update</button>
  </Link>
  <Link to ="/" className="enroll btn btn-dark ">back</Link>
</div> 
            </div>
          </div>
        </div>
      ))}
    </section>
        </>
    )
}
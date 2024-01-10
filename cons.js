const express =require ('express')
const cors = require ('cors')
const bodyparser = require ('body-parser')
const mysql = require ('mysql')

const convert = express();
convert.use(cors())
convert.use(bodyparser.json())
convert.use(express.json())
convert.use(bodyparser.urlencoded({extended:true}))
convert.use(express.static('public'))

let con = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"siyana@29",
    database:"construct",
})
con.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Database is connected")
    }
})
//=========-----------------------==========//

//===============get and delete=========================//

convert.get('/getall',(request,response)=>{
    let sql = 'select * from hsconst'
    con.query(sql,(error , result) =>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.post('/delete',(request,response)=>{
    let id = request.body.id
    let sql ="delete from hsconst where id=?"
    con.query(sql,[id],(error,result)=>{
        if (error) {
            response.send(error)
        }
        else{
            response.send({"status":"deleted"});
        }
    })
})

convert.post('/inserting',(request,response)=>{
    let{layimg,description,image}=request.body
    let sql="insert into hsconst(layimg,description,image)values(?,?,?)"
    con.query(sql,[layimg,description,image],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error);
        }
        else{
            response.send({"status":"inserted"})
        }
    })
})
// convert.get('/getbyid/:id', (request, response) => {
//     const id = request.params.id;
//     let sql = `SELECT * FROM hsconst WHERE id = ${id}`;
  
//     con.query(sql, (error, result) => {
//       if (error) {
//         response.send(error);
//       } else {
//         response.send(result);
//       }
//     });
//   });

convert.get('/getbyid/:id', (request, response) => {
    const id = parseInt(request.params.id);
    let sql = 'SELECT * FROM hsconst WHERE id = ?';

    con.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result);
        }
    });
});
// ========================update ==================

convert.get('/getupdate/:id',(request,response)=>{
    let{id}=request.params
 
    let sql="select * from hsconst where id=?"
    con.query(sql,[id],(error , result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
convert.put('/update/:id',(request,response)=>{
    let{id}=request.params
    let{layimg,description,image}=request.body
    let sql='update hsconst set layimg=?,description=?,image=? where id=?'
    con.query(sql,[layimg,description,image,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"updated"})
        }
    })
})













convert.listen(3003,()=>{
    console.log('server started at 3003')
})
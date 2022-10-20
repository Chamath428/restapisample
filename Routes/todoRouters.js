const { json } = require('express');
const express = require('express');
const database = require('../databse');
database.connect();

const todoRouters = express.Router();

todoRouters.get("/",(req,res)=>{
    database.query("SELECT * FROM todo",(err,rows,fields)=>{
        if(err){
            res.status(400).json({message:"Error while getting data"})
        }
        else res.status(200).send(rows);
    })
})

todoRouters.post("/add",(req,res)=>{
    // console.log(req.body);
    // res.json("here");
    database.query(`INSERT INTO todo (description) VALUES (${JSON.stringify(req.body.description)})`,(err,rows,fileds)=>{
        if(err)res.status(400).json({"message":"Error while addinf data"})
        else res.status(200).send(rows);
    })
})

todoRouters.put("/update/:id",(req,res)=>{
    database.query(`UPDATE todo SET description=${JSON.stringify(req.body.description)} WHERE id=${req.params.id}`,(err,rows,fields)=>{
        if(err){
            console.log(err)
            res.status(400).json({"message":"Error while updating dara"});}
        else res.status(200).send(rows);
    });
})

todoRouters.delete("/delete/:id",(req,res)=>{
    database.query(`DELETE FROM todo WHERE id=${req.params.id}`,(err,rows,fields)=>{
        if(err)res.status(400).json("Error while deleting");
        else res.status(200).json(rows);
    })
})

module.exports = todoRouters;
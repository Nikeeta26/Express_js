const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("root");
    });
    
router.post("/new",(req,res)=>{
    res.send("post data");
});

router.delete("/:id",(req,res)=>{
res.send("delete data");
});

module.exports = router;
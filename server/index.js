

const express = require("express");
const cors = require("cors");
const mongoose = require ("mongoose");
const app = express();



app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/blog-appDB", {useNewUrlParser: true});


const postSchema = new mongoose.Schema({
    title: String,
    content: String
  });

const Post = mongoose.model("Post", postSchema);

app.get("/",(req,res) =>{
   res.send("hi");
})


app.get("/try", (req,res) =>{

    Post.find({}, function(err, posts){
         res.send(posts);
      });
    });
app.post("/try",(req,res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    
  });
  post.save(function(err){
    res.send("posted");
  });
  console.log("trypost")
  console.log(req.body.title)
  

})

app.post("/update",(req,res) => {
   let info = req.body
   console.log(info.title)
   console.log(info.content)
    Post.updateOne({title: info.title},
   {  title: info.title, content: info.content},
   function(err){
    if(err)
    {
      console.log(err);
    }
   })
  res.send("recieved update");

});

app.post("/delete",(req,res) => {
    let d_id=req.body
    console.log(d_id);
    Post.deleteOne(d_id,function(err)
    {
      if(err)
      {
        console.log(err);
      }
    })
    res.send("Deleted");
});

app.listen(3001,function(){
    console.log("Server running in 3001");
})
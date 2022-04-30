import express from "express";
import fetch from 'node-fetch';


const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.send("Hello App");
    })

app.get('/world', (req, res)=> {
    res.send("Hello World")
})

app.get('/posts', (req, res)=> {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=> {
           return res.json();
        })
        .then( (data)=> {
        res.send(data);

            })
    })

app.get('/posts/firstcomments', async(req, res)=> {
    let arr = [];
    for(let i=1; i<=100; i++) {
       await fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`)
        .then((res)=> {
           return res.json();
        })
        .then( (data)=> {
          
            // console.log(data[0]);
            // fs.writeFileSync(`${data[0].postId}+${data[0].id}.txt`, `${JSON.stringify(data[0])}` , (err)=> {
            //     console.log("done")
            return arr.push(data[0]);
            })
    
    
    
        }
        res.send(arr);
    
})
    
    


app.listen(port, ()=> {
    console.log("server on");
})
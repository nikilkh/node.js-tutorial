import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 3000;

const home = new express.Router();
app.use("/", home);

const users = new express.Router();
home.use("/users", users);

const posts = new express.Router();
home.use("/posts", posts);

const comments = new express.Router();
posts.use("/:id/comments", comments);


home.route("/").get((req,res)=> {
    res.send("hello world");
})

users.route("/").get((req,res)=> {
    fetch(`https://jsonplaceholder.typicode.com${req.baseUrl}`)
    .then((resp)=> {
       return resp.json();
    })
    .then((respn)=> {
        // console.log(respn)
        res.send (respn);
    })
})

users.route("/:id").get((req,res)=> {
    fetch(`https://jsonplaceholder.typicode.com/users${req.url}`)
    .then((resp)=> {
       return resp.json();
    })
    .then((respn)=> {
        // console.log(respn)
        res.send (respn);
    })
})

posts.route("/").get((req, res)=> {
    console.log(req.baseUrl)
    fetch(`https://jsonplaceholder.typicode.com${req.baseUrl}`)
    .then((resp)=> {
       return resp.json();
    })
    .then((respn)=> {
        // console.log(respn)
        res.send (respn);
    })
})

posts.route("/:id").get((req, res)=> {
    console.log(req.url)
    fetch(`https://jsonplaceholder.typicode.com/posts${req.url}`)
    .then((resp)=> {
       return resp.json();
    })
    .then((respn)=> {
        // console.log(respn)
        res.send (respn);
    })
})

comments.route("/").get((req, res)=> {
    console.log(req.baseUrl)
    fetch(`https://jsonplaceholder.typicode.com${req.baseUrl}`)
    .then((resp)=> {
       return resp.json();
    })
    .then((respn)=> {
        // console.log(respn)
        res.send (respn);
    })
})



// router.get("/", (req, res)=> {
//     res.send("hello world");
// })

// router.get("/users", (req, res)=> {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((resp)=> {
//        return resp.json();
//     })
//     .then((respn)=> {
//         // console.log(respn)
//         res.send (respn);
//     })
// })

// router.get("/posts/:id/comments", (req, res)=> {
//     fetch(`https://jsonplaceholder.typicode.com${req.url}`)
//         .then((res)=> {
//            return res.json();
//         })
//         .then( (data)=> {
//             res.send(data);
//             })
// })

// app.use("/", router);
// app.use("/users", router)
// // app.use("/posts", postsrouter);

app.listen(port,()=> {

})




// import the express module
const express = require('express')

// creating an express  application 
const app = express()
app.use(express.json()); // here we are describing our middleware

const loggerMiddleware  = (req,res,next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next()
}

// define the route 
app.get("/", (req, res) => {  // Request handler take call  back function 
res.send("Hello I am from express")
})

const users = [
    { id:1,
      userName: "user 1"
    },
    { id:2,
      userName: "user 2"
    },
    { id:3,
      userName: "user 3"
    },
];

// Post endpoint to create a new user
app.post("/users",(req,res) => {
    const newUser = req.body;
    const userId =  users.length +1;
    newUser.id = userId;

    // add the new user to  the list 
    users.push(newUser);
    res.status(201).json({message: "user created sucessfully", user: newUser});
})

app.get("/users",(req,res) => {
    console.log("Get user request")
    res.status(200).json({data:users});
})

app.get("/about", (req,res) => {
    res.send("Hey you are searching the About page ")
})

app.post("/data", (req, res) => {
    console.log(req.body);
    res.send("this is from post request")
});

// delete endpoint to delete user by Id 

app.delete("/users/:id", (req,res) => {
  const userId =  req.params.id;
  console.log("user id", userId);
  
  // we use array to handle the error part we will check if id exist or  not
  const userIndex = users.findIndex((user) => user.id == userId);
  if(userIndex == -1){
    return res.status(404).json({message: "user not exist"})
  }

  // removing the user from the array using slice method
  users.splice(userIndex,1)
  res.json({message: "user deleted succesfully "})
});


//  using middleware 
app.get("/special", loggerMiddleware,(req, res) => {
  res.send("special page")
})

const port = 3000;
app.listen(port, ()=> {
    console.log(`The server is running on this port ${port}`)
})
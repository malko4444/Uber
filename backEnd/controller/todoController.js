

const TodoModel = require("../models/todoModel");
const { userId } = require("../services/todoServices");
const createTodo  = async(req,res,next) => {
    console.log("in the todo controller");
    const {title,description, completed} = req.body;
    // receive token from bearer
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    console.log("the token is", token);
    const userFromToken = await userId(token); 
    console.log("user from token", userFromToken);
    
    console.log("title and description",title,description, completed);
    const todo = new TodoModel({
        title,
        description,
        completed,
        user: userFromToken

    });
await todo.save();

res.status(201).json({todo} );
}

const userTodo = async(req,res,next) => {
    console.log("in the get all todo controller");  
    // receive token from bearer
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    console.log("the token is", token);
    const userFromToken = await userId(token);
    console.log("user from token", userFromToken);

    const todos = await TodoModel.find({user: userFromToken});
    res.status(200).json({todos});
}
const updateTodo = async(req,res,next) => {
    // receive token from bearer and the id from query
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    console.log("the token is", token);
    const userFromToken = await userId(token);  
    console.log("user from token", userFromToken);
    const {id} = req.query;
    const {title, description, completed} = req.body;
    console.log("id from query", id);
    const todo = await TodoModel.findOneAndUpdate(
        {_id: id, user: userFromToken},
        {title, description, completed},
        {new: true}
    );
    if(!todo){
        return res.status(404).json({error: "Todo not found"});
    }
    res.status(200).json({todo});
}
const deleteTodo = async(req,res,next) => {
    // receive token from bearer and the id from query
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    console.log("the token is", token);
    const userFromToken = await userId(token);
    console.log("user from token", userFromToken);
    const {id} = req.query;
    console.log("id from query", id);
    const todo = await TodoModel.findOneAndDelete(
        {_id: id, user: userFromToken}
    );
    if(!todo){
        return res.status(404).json({error: "Todo not found"});
    }
    res.status(200).json({message: "Todo deleted successfully"});
}

module.exports = {createTodo, userTodo, updateTodo, deleteTodo};



// const gerUser = () => {
//     try {
//        const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ error: "Unauthorized" });
//     }
//     const token = authHeader.split(" ")[1];
//     console.log("the token is", token);
//     const userFromToken = await userId(token);
//     console.log("user from token", userFromToken);
//     const {id} = req.query;
//     console.log("id from query", id);
//     const todo = await TodoModel.findOneAndDelete(
//         {_id: id, user: userFromToken}
//     );
//     if(!todo){
//         return res.status(404).json({error: "Todo not found"});
//     }
//     res.status(200).json({message: "Todo deleted successfully"});
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
//get the id from the tokn 
const jwt = require('jsonwebtoken');
const userId =(token)=>{
    try {
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        return decoded._id;
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
}
module.exports = {userId};
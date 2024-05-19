import mysql from 'mysql'
// * create connection with database 
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'database'
})

con.connect(function(err){
    if(err)
    {
        console.log("Error")
    }
    else
    {
        console.log("connected")
    }
})
export default con;
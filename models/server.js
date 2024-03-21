const express = require ("express");
const cors = require ("cors");

class Server {
    constructor(){
        this.app=express();
        this.port=process.env.PORT;

        this.middlewares();
        this.routes();
        this.usersPath="/api/users"
    };

    middlewares(){
        this.app.use(express.static("public"));
        this.app.use(cors());
        this.app.use(express.json())
    };

    routes(){
        this.app.use(this.usersPath, require ("../routes/users.routes"))
    };
        
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server online port:", this.port)
        })
    };
};

module.exports=Server
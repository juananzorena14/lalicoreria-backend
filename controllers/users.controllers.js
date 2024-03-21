//funciones

const usersGet = (req,res) => {
    const {limit, page} = req.query
    
    res.json ({
        message: "GET users - controllers",
        limit,
        page
    })
};

const userPost = (req,res) => {
    const {name, mail} = req.body;

    res.json ({
        message: "POST user - controllers",
        name,
        mail
    })
};

const userPut = (req,res) => {
    const {id} = req.params;

    res.json ({
        message: "PUT user - controllers", 
        id
    })
};

const userDelete = (req,res) => {
    res.json ({
        message: "DELETE user - controllers",
    })
};



module.exports = {usersGet, userPost, userPut, userDelete};
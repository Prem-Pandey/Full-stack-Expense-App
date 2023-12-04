const User = require('../models/user');

const addUser = async (req, res, next) => {
    try{
        // console.log("I am here");

        if (!req.body.Amount) {
            throw new Error('Phone Amount is madatory')
        }
    const Catagory = req.body.Catagory;
    const Amount = req.body.Amount;

    // console.log(Catagory, email, Amount);

    const data = await User.create( {Catagory: Catagory, Amount: Amount});
    res.status(201).json({newUserDetail: data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

const getUser = async(req, res, next)=> {
    try{
    const users = await User.findAll();
    res.status(200).json({allUsers: users});
    }
    catch(error){
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({error: error});
    }
}

const deleteUser = async(req, res) => {
    try{
        if (req.params.id === 'undefined') {
            console.log('Id is missing');
            return res.status(400).json({err: 'ID is missing'});
        }
    const uId = req.params.id;
    await User.destroy({where: {id: uId}});
    res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

// const editUser = async(req, res) => {
//     try{
//         if (req.params.id === 'undefined') {
//             console.log('Id is missing');
//             return res.status(400).json({err: 'ID is missing'});
//         }
//             const uId = req.params.id;
//             console.log("I am in edit user")
//             document.getElementById('email').value = emailId;
//             document.getElementById('Catagory').value = Catagory;
//             document.getElementById('Amount').value = Amount;
//             res.sendStatus(200);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// }

module.exports = {
    addUser,
    getUser,
    deleteUser,
    // editUser
}
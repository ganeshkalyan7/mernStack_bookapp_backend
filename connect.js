const mongoose=require('mongoose');

exports.connect=()=>{
    try{
        mongoose.connect('mongodb+srv://ganeshkalyan:ganeshkalyan@cluster0.9ib1a.mongodb.net/project?retryWrites=true&w=majority');
        console.log('DB connected successfully.....')
    }
    catch(err){
        console.log(err)
    }
}


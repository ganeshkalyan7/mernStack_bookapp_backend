const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const bookModel=new Schema( {
    bookname:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    available:{
        type:Boolean,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }


})
const book=mongoose.model('bookStore',bookModel);
module.exports = book;
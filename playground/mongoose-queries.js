const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c63cdaa4d4d24910ffe68641';

// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!')
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));


var id = '5c62bbcb61d048ee2e28d756';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid')
}

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found!')
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
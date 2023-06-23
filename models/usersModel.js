const fs = require('fs');
const path = require('path');
const uuid = require('uuid')

const model = {

    route: '../data/users.json',

    findAll: function(){
        const allUsers = fs.readFileSync(path.join(__dirname, this.route), 'utf-8');
        const users = JSON.parse(allUsers);
        return users;
    },

    createOne: function(newData){
        let users = this.findAll();
        newData.id = uuid.v4();
        users.push(newData);
        const usersJSON = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);
    },

    findByEmail: function(email){
        let users = this.findAll();
        let searched = users.find(user => user.email === email);
        if(!searched){
            searched = null
        }
        return searched;
    },
    findByName: function(name){
        let users = this.findAll();
        let searched = users.find(user => user.name === name);
        if(!searched){
            searched = null
        }
        return searched;
    }
}

// console.log(model.findByEmail('gas@gmail.com'));
// console.log(model.findByName('Gaston'));

module.exports = model;
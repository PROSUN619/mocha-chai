const { default: axios } = require("axios");

class Student {

    constructor(){

    }

    home(type){
        let data = this.getinfo(type,1);
        return data + 5;
    }

    userID(){
        return 12;
    }

    getinfo(type, status){
        return 10;
    }

    finalMarks(total){
        let external = this.getExternal(total); //5
        let internal = this.getInternal(total); //39
        let finalSum = external + internal + 10; //5+39+10 = 54

        return finalSum;
    }

    getExternal(total){
        return total + 1;
    }

    getInternal(total){
        return total - 1;
    }

    dbCall(){
        return new Promise((res, rej) => {
            setTimeout(() => {
               res(10) ;
            }, 2500);
        })
    }

    thirdPartyAPI() {
        return new Promise(function(res,rej){
            axios.get('http://localhost:5000/api/v1/posts')
            .then(result => {
                console.log('result',result.data);
                res(result.data);
            })
            .catch(err => {
                console.log('Error',err);
                rej(err);
            })
        });
    }
}

module.exports = Student;



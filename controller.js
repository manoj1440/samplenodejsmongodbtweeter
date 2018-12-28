
var Usermodel= require('./usersmodel');

exports.checkUser=(usernm,passwd,callback)=>{


    if(usernm==""&& passwd==""){
        return callback("please enter some input");
    }
    else{

        callback(null,findll)

    }

}


exports.findAlltweet=(usernm,passwd,callback)=>{

}





var findll=Usermodel.find({
    'name' : 'deep'
} ,function (err, result) {
    if (err) throw err;
    if (result) {
        
    // result.forEach(element=>{
    //     res.send(element.name)
    // })
        
    } else {
        res.send(JSON.stringify({
            error: 'Error'
        }))
    }
})

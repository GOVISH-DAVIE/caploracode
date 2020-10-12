//  promises resolve or reject

// function ryan (){
//     console.log('I am fine');
// }

// let ryan = () => {
//     console.log('i am fine');
// }
let mysql = require('mysql'); ///importing the dependency 

let connection =  mysql.createConnection({

    host:'localhost',
    user:'root', 
    password:'' 
});   //creating a connection to the server


function conn (){
    return new Promise(
        function(resolve, reject){
           return  connection.connect(function (err) {   //checking if the connection  is valid or has errors
                if(err){
                   reject(err)
                }
                else{
                     resolve(true);
                }  
            })
        }
    );
}

conn().then(
    function(response){
        console.log(response,'res')
    }
)
.catch(
    function(error){
        console.error(error, 'error')
    }
)



// function taskP(){
//     return new Promise(
//         function(resolve, reject){
//                setTimeout(  function () {
//           console.log('task 0');
//           reject('failed');
//       } , 100); 
//         }
//     )
    
// }

//    function  tasks ( ) { 
//         return  taskP()
//         .then(function(response){
//             console.log(response);
//             console.log('task 1');
//         })
//         .catch(function(error){
//             console.error(error)
//         })

//     //   console.log('task 1');
// }

// tasks()


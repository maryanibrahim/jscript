 const user = {
    username : null,
    password : null,

     greet: function (){
        if (user.username){
           console.log(`Hello, I'm user ${user.username}`);
        } else {
            console.log('Please assign a username value');
        }
     },
    updaterUsername : function (username) {
        this.username = username;
        
    },

     updatePassword : function (password) {
    this.password = password;
   
}

     }
    
user.greet(); 
user.updaterUsername('maryan');
user.updatePassword('m12345');
user.greet();
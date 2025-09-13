const user = {
    username: "satyam",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;       // variable is defined using this keyword for its own variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// new  => firstly create an empty object, 2ndly call a constructor
console.log(userOne.constructor);
//console.log(userTwo);
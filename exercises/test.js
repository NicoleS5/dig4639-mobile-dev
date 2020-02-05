class User {
    // property
        // userName = "John";
    // class constructor
    constructor (props) {
        this.props = props;
    }
    // object - method
    printName() {
        console.log(`${this.props.userName}, id is ${this.props.id}`);
    }
}

// multiple users
var myUser = new User({userName: "Jessica", id:5});
myUser.printName();
var myUser2 = new User({userName: "Kyle", id:8});
myUser2.printName();
var myUser3 = new User({userName: "Luke", id:6});
myUser3.printName();

function myFunction() {
    return this;
}

var objLiteral = {
    a: 5,
    b: 6,
    c: myFunction
};

// console.log(objLiteral.c());
// console.log(myFunction());

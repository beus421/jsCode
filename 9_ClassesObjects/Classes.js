// This was not avalible before ES6

class user{
    constructor(username){
        this.username = username
    }
    // 'static' stop child for inhereting  
    static uniqueId(){
        this.id = '123'
        console.log(this.id);
    }
    print () {
        console.log(this.username);
    }
}

// let me = new user('Hammad')
// me.print()

// 'extends' allows us to inheret stuff 
class gamer extends user{

    constructor(username, email, pass){
        //'Super' runs the constructor of the parent
        super(username)
        this.email = email
        this.pass = pass
    }

    print() {
        // inhereting parents 
        // this wont work in arrow or nameless function
        super.print();
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.pass}`);
    }
}

let you = new gamer('Sam', 'sam@dfs.com', 123)
you.print()
you.uniqueId()
class User{
	constructor(name,age,email){
		this.name=name;
		this.age=age;
		this.email=email;
		this.Coins=0;
		this.course=[];
	}
	login(){
		console.log(`${this.name}has logged in`);
	}
	logout(){
		console.log(`${this.name}has logged out`);
	}
	addCoins(){
        this.Coins++;
        console.log(`${this.name} has ${this.Coins} coins`);
        return this;
}
}
class Moderator extends User{
	constructor(name,age,email,Coins){
		super(name,age,email);
		this.Coins=Coins;
	}
	deleteUser(User){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
}

class Admin extends Moderator{
   addCourse(user,course){
       user.course.push(course);
       console.log(user);
   }
}

let user1=new User("Sandeep",24,'sandeep@gmail.com');
let user2=new User("Rahul",22,'Rahul@gmail.com');
let user3=new User("Satish",21,'Satish@gmail.com');
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'Python');
user3.login()
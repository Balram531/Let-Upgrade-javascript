let users = [
    {
        name:'Berlin',
        email:'b@gmail.com',
    }]

    function getUsers(){
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    },1000);
}


function createUser(user, callback){
     setTimeout(()=>{
         users.push(user);
         callback();
     },3000);
 }

 getUsers();

 createUser({name:'Denver',email:'d@gmail.com'}, getUsers);


 const link = [];
async function linkUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            link.push('https://jsonplaceholder.typicode.com/todos ');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status;
    console.log(link.length);
}

linkUpload();



// // Object is the method to store the data in a nested form 








// // Object using object literals 

// const user  = {
//  name: "Sudip",
//  address: "chandannath",
//  Nationalit: "Nepali",
//   DOB : {
//     year: 2062,
//     month: "oct",
//     day : 1
//   },
//      great (){
//         console.log(`Helo ${this.name}`) 
//     }
// }

// console.log(user);
// console.log(user.name);
// console.log(user['Nationalit']);

// user.phoneNumber = 98483002406;


// delete user.address;



// console.log(user);
// console.log(user.DOB.month);

// user.great ();


const user = { name: "Alice", age: 25, role: "Admin" };

for (let k in user) {
    console.log(k , user[k]);
}


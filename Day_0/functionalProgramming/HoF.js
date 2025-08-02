// HOF -> A function that takes others function as an argument or return other functions. 


function greet(Name){

     return (`Hello ${Name}`)
}

function showGreeting(fn) {
     console.log(fn("Sudip"));
}


showGreeting(greet);



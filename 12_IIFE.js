// Immediately Invoked Function Expression - IIFE
// A function that is executed immediately, To remove the pollution of the global scope for its variable or constant or anything

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);    
})();       // Should give ";" to end that

// ()()   // First Parenthesis  is to define the function, Second Parenthesis is to call the function
// Using this it is called automatically

((name) => {
    // simpleIIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Godlu');


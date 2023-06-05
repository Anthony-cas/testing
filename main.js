// Calling a function that
// does NOT return a value
greetSomeone("Claire");
// This one DOES return a value
var aJoke = tellMeAGoodJoke();
console.log(aJoke);

function tellMeAGoodJoke() {
    var jokeStr = "Have you heard about corduroy pillowcases?";
    jokeStr = jokeStr + " .... They're making headlines!";
    return jokeStr;
    jokeStr += "Thanks, I'm here all week..."; // this will never run!
}
// It may be a good joke, but it's a BAD FUNCTION. You only return once!
function tellMeAnotherOne() {
    var joke = "How many surrealists does it take to screw in a lightbulb?";
    return joke;
    return " .... A fish."; // Wha? Oh I get it...but JavaScript won't.
} 
// Remember: you can't return twice!
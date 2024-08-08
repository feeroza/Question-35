// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!


let animalsName = ["cow", "goat", "sheep", "camel"];
for(let i of animalsName){
    console.log(i); 
}
for(let j of animalsName){
    console.log(`${j} is a Domestic animal`);
    
}console.log(`All these animals'${animalsName[0]},${ animalsName[1]} ${animalsName[2]} and ${animalsName[0]} meat is halal in islam`);

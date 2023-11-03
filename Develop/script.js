// variable stored as an object

const total = {
    wins: 0,
    ties: 0,
    losses: 0,
};
console.log(total);

//prompt and alert 
const messg = prompt("Enter R, P, S");
if (messg === "R" || messg === "r") {
} else if (messg === "P" || messg === "p") {
    alert("You've entered paper")
} else if ( messg === "S" || messg === "s") {
    alert("You've entered scissors");
} else {
    alert("Wrong input, Enter R, P, or S")
}

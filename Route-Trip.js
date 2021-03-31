  
const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"],["UAE", "JPN"]];
const exits = tickets.map((country) => country[0]);
const enters = tickets.map((country) => country[1]);
const lastDestination = enters.filter( country => !exits.includes(country));

const result = [...lastDestination];
let temp = lastDestination;

while(result.length < tickets.length + 1) {
    tickets.map((country) => {          
        if(country[1] === temp[0]) {                           
            temp[0] = country[0];        
            result.unshift(temp[0]);                
        }             
    })  
}

console.log(result);
console.log(tickets.length + 1 === result.length);

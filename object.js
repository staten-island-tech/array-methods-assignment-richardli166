/* let year = date.getFullYear();
const Dennis = {
    firstName: "Dennis",
    lastName: "Unknown",
    DOB: 2007,
    graduated: false,
    age: function(){
        //subtract his DOB year from current year 
    return year - this.DOB;
    },
    siblings: [],
    spose: null,
};
const ChenZee = {
    firstName: "Chen-Zee",
    lastName: "Unknown",
};
console.log(Dennis.age);

let nums = [1, 2, 3, 4, 5];
let movies = ["Star Wars", "Marvel Things", "Barbie"];
//access indiviual element from list/array index, starts at 0
//console.log(nums[0])

console.log(nums[nums[0]]);
nums.forEach((el) => console.log(el));
movies.forEach((movie) => console.log(movie));
nums.forEach(function (el) {
    console.log(el);
});
 */

const Opener = [
    {
        Name: 'TKI',
        Dmg: "4",
        Discoveredby: "TKI",
        Piece: ["Early I", "Z or S"]
    },
    {
        Name: 'PCO',
        Dmg: "10+",
        Discoveredby: "Placetris community",
        Piece: ["I hold", "Early T"]
    },
    {
        Name: 'New DT Cannon',
        Dmg: "12",
        Discoveredby: "KMGZ",
        Piece: ["Early L", "Early J", "Early O second bag"],
    } 
]
Opener.forEach((Names)=> console.log(Names.Name));       //outputs name
Opener.forEach((Block) => Block.Piece.forEach((Piece) => console.log(Piece)));

const opener = Opener.filter((dmg) => dmg.Dmg === "4"); 
console.log(opener);

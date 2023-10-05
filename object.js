let year = date.getFullYear();
const Dennis = {
    firstName: "Dennis",
    lastName: "Unknown",
    DOB: 2007,
    graduated: false,
    age: function(){
        //subtract his DOB year from current year 
    return year - this.DOB;
    },
};
const ChenZee = {
    firstName: "Chen-Zee",
    lastName: "Unknown",
};
console.log(Dennis.age)
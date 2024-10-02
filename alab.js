const PI = 3.1415;
const area = PI * 5 * 5;
let starting_number_of_plants = 20;
/* ==the plants double in number every week 
=  so formula to find number of plantd sfter week x 
= number_of_plants = starting_number_of_plants * 2^ week(s)
=*/

// scenario week 1
let week = 1;
let number_of_plants = starting_number_of_plants * (2 ** week);
let total_plant_space = number_of_plants * 0.8;
console.log(`week${week}:`);
if (total_plant_space < (0.5 * area)) {
    console.log('You still have space. You should plant some more!');
}
else if (((0.5 * area) <= total_plant_space) && (total_plant_space <= (0.8 * area))) {
    console.log('Growing at a normal pace. Keep monitoring them!');
}
else {
    console.log(`These should be pruned!`);
}

// =========week 2===========
week = 2;
number_of_plants = starting_number_of_plants * (2 ** week);
total_plant_space = number_of_plants * 0.8;
console.log(`week ${week}:`);
if (total_plant_space < 0.5 * area) {
    console.log('You still have space. You should plant some more');
}
else if (((0.5 * area) <= total_plant_space) && (total_plant_space <= (0.8 * area))) {
    console.log('Growing at a normal pace. Kepp monitoring them!');
}
else {
    console.log(`These should be pruned!`);
}

//==================week 3
week = 3;
number_of_plants = starting_number_of_plants * (2 ** week);
total_plant_space = number_of_plants * 0.8;
console.log(`week${week}:`);
if (total_plant_space < 0.5 * area) {
    console.log('You still have space. You should plant some more');
}
else if (((0.5 * area) <= total_plant_space) && (total_plant_space <= (0.8 * area))) {
    console.log('Growing at a normal pace. Kepp monitoring them!');
}
else {
    console.log(`These should be pruned!`);
}

//==================================part 2=========================
starting_number_of_plants = 100;
week = 10;
number_of_plants = starting_number_of_plants * (2 ** week);
total_plant_space = number_of_plants * 0.8;
console.log(`The Amount of additionl space required if starting with 100 plants and no pruning for 10 weeks is:`, total_plant_space - area, "meter square")

console.log(`The radius of that new garden would be:`,Math.sqrt((total_plant_space / PI)));


//=================part 3 =====================


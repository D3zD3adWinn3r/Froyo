// create a list of ice cream flavors
// create a function that will remember the order of ice cream written in the form of a string

const flavor =  ['vanilla', 'vanilla', 'vanilla', 'strawberry', 'coffee', 'coffee']
// 'chocolate, vanilla, strawberry, mint, cookie dough, rocky road, butter pecan, pistachio, mango, raspberry, blueberry'
//create a function that will remember the order of ice cream written in the form of a string

function iceCreamOrder(array) {
    // Define the order variable as the flavor array
    const order = flavor;
    for ( let i = 0; i < array.length; i++) {

    console.log(array[i]);
    }

    // Return the order
    return order;
}

const userInput = prompt('What is your favorite ice cream flavor?', "vanilla, vanilla, vanilla, strawberry, coffee, coffee");
const userarray = userInput.split(",")
// console.log(userarray);
// console.log(userInput);

iceCreamOrder(userarray)
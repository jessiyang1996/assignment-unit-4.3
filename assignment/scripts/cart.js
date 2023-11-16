console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = [];

// Create a function called addItem. It should:
    //take an input parameter for a string item
    // add the new item to the global array basket.
    //return true indicating the item was added

function addItem( item ){
    console.log( 'in addItem Function');
    basket.push( item );
    return true;
};

console.log( '===!!! addItem Function Test !!!===');
item = 'eggs';
console.log( addItem(item) );
console.log( basket ); // to see if it was actually added to basket and that our function works.
// our function works, eggs appear in basket in console.

// using our function to add items to our cart so that we can test for the next question.
addItem ( 'apple');
addItem ( 'cheese');
addItem ( 'pumpkin pie');
console.log( basket ); 

// Create a function called listItems. It should:
    // loop over the items in the basket array
    // console.log each individual item on a new line
    
function listItems(){
    console.log( 'in listItems Function')
    for(i=0; i<basket.length; i++){
        console.log( basket[i] )
    }
}

console.log(listItems()); // test - it works on console. Each item appears on an
//individual line.

// Create a function called empty. It should:
    // reset the basket to an empty array

function empty(){
    console.log( 'in empty Function');
        basket = [];
}

empty();
console.log( basket );









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

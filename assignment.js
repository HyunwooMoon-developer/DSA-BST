/* eslint-disable no-undef */
const BinarySearchTree = require('./BinarySearchTree');

function main(){
 const numberBST = new BinarySearchTree();
 numberBST.insert(3);
 numberBST.insert(1);
 numberBST.insert(4);
 numberBST.insert(6);
 numberBST.insert(9);
 numberBST.insert(2);
 numberBST.insert(5);
 numberBST.insert(7);

 console.log(numberBST);

 const stringBST = new BinarySearchTree();
 let string = 'EASY QUESTION';
 let newString = [];
 newString = string.replace(/\s+/g, '').split('');
 console.log(newString);
 newString.forEach(word => stringBST.insert(word));
 console.log(stringBST)

}

main();
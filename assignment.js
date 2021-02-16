/* eslint-disable no-undef */
const BinarySearchTree = require("./BinarySearchTree");

function main() {
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
  let string = "EASY QUESTION";
  let newString = [];
  newString = string.replace(/\s+/g, "").split("");
  console.log(newString);
  newString.forEach((word) => stringBST.insert(word));
  console.log(stringBST);
}

main();

//Q4 What does this program do?

/*function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}*/

//sum of the all values in the tree

// Q5. Height of a BST
// Write an algorithm to find the height of a binary search tree.
// O(N)

function treeHeight(tree) {
  let leftHeight = 0;
  let rightHeight = 0;
  //if tree is not exist return 0
  if (!tree) {
    return 0;
  }
  //if tree doesn't have left-hand and right-hand return 1
  if (!tree.left && !tree.right) {
    return 1;
  }
  if (tree.left) {
    leftHeight = treeHeight(tree.left);
  }
  if (tree.right) {
    rightHeight = treeHeight(tree.right);
  }
  //Math.max() returns the largest of the zero or more numbers given as iput parameter
  return Math.max(leftHeight, rightHeight) + 1;
}

const numberBST = new BinarySearchTree();
numberBST.insert(3);
numberBST.insert(1);
numberBST.insert(4);
numberBST.insert(6);
numberBST.insert(9);
numberBST.insert(2);
numberBST.insert(5);
numberBST.insert(7);

console.log(treeHeight(numberBST));

// Q6 . Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree
// assuming the tree doesn't contain duplicates.

function isBST(tree) {
  if (!tree) {
    return false;
  }
  if (tree.left) {
    if (tree.left.key > tree.key) {
      return false;
    } else {
      isBST(tree.left);
    }
  }
  if (tree.right) {
    if (tree.right.key < tree.key) {
      return false;
    } else {
      isBST(tree.right);
    }
  }

  return true;
}
const numberBST2 = new BinarySearchTree();
numberBST2.insert(2);
numberBST2.insert(1);
numberBST2.insert(3);


console.log(isBST(numberBST));
console.log(isBST(numberBST2));
console.log(isBST());


// Q7. 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.


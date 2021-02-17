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


const numberBST = new BinarySearchTree();
numberBST.insert(3);
numberBST.insert(1);
numberBST.insert(4);
numberBST.insert(6);
numberBST.insert(9);
numberBST.insert(2);
numberBST.insert(5);
numberBST.insert(7);
numberBST.insert(8);

console.log(treeHeight(numberBST));
//Q4 What does this program do?

function tree(t){
    if(!t){
        return 0;
    }    return tree(t.left) + t.key + tree(t.right)
}

console.log(tree(numberBST));

//sum of the all values in the tree
// O(n)

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

function nthLargest(tree, count, number) {
  //base case
  if (!tree) {
    return null;
  }
  //search in the right-hand
  let rightNum = nthLargest(tree.right, count, number);
  //if found in right-hand then return
  if (rightNum) {
    return rightNum;
  }
  //increase count;
  count.i++;

  //if current element is the nth largest ten return;
  if (count.i === number) {
    return tree.key;
  }
  //else search in left-hand
  return nthLargest(tree.left, count, number);
}

console.log(nthLargest(numberBST, { i: 0 }, 3));

function nthSmallest(tree, count, number) {
  if (!tree) {
    return null;
  }

  let leftNum = nthSmallest(tree.left, count, number);

  if (leftNum) {
    return leftNum;
  }

  count.i++;

  if (count.i === number) {
    return tree.key;
  }

  return nthSmallest(tree.right, count, number);
}

console.log(nthSmallest(numberBST, { i: 0 }, 2));
console.log(nthSmallest(numberBST, { i: 0 }, 4));


// Q8. Balanced BST
// Write an algorithm that checks if a BST balanced(i.e., a tree where no 2 leaves differ in distance from the root by more than 1);

function balance(tree){
    if(!tree){
        return false;
    }
    if(!tree.left && !tree.right){
        return true;
    }
    //Math.abs : returns absolute value of a number 
    //ex) Math.abs(3, 5) => -2 => 2
    let heightDifference = Math.abs(treeHeight(tree.right) - treeHeight(tree.left))

    if(heightDifference > 1){
        return false;
    }
    return true;
}

console.log(balance(numberBST)); //false
console.log(balance(numberBST2)); //true



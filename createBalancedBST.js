class createBinarySearchTree{
    constructor(key = null){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function createBalancedBST(array, start = 0, end = array.length){
    if(start === end){
        return null;
    }
    const middleIndex = Math.floor((start + end) /2);
    const middleValue = array[middleIndex];

    //const left = array.slice(0, middleIndex);
    //const right = array.slice(middleIndex + 1);

    const leftSubtree = createBalancedBST(array, start, middleIndex);
    const rightSubtree = createBalancedBST(array, middleIndex + 1, end);

    const node = new createBinarySearchTree(middleValue);
    node.left = leftSubtree;
    node.right = rightSubtree;
    return node;
}

console.dir(createBalancedBST([1,2,3,5,7,9,11]), {depth : null});
console.dir(createBalancedBST([-2,-1,3,5,7,9,11]), {depth : null});
console.dir(createBalancedBST([1,2,3,5,7,7,9,11]), {depth : null});
console.dir(createBalancedBST([1,2,3,5,7]), {depth : null});
console.dir(createBalancedBST([1,2,3,5,7,9.5,11]), {depth : null});
console.dir(createBalancedBST([1,2,1E6, 1E7, 1E8, 1E9]), {depth : null});
console.dir(createBalancedBST([1,2]), {depth: null});
console.dir(createBalancedBST([]), {depth : null});
const BinaryTree = require("../src/binary_tree");

let binaryTree = null;

/*------------------
Primary test case used:

      10
    /    \
   4     14
  / \    /  \
 2   6  12   16
-------------------*/

describe("Binary Tree", () => {
  beforeEach(() => {
    binaryTree = new BinaryTree(10);
  });
  describe("The getValues method", () => {
    test("should return an array of all values in depth first preorder", () => {
      binaryTree.add(4);
      binaryTree.add(14);
      binaryTree.add(6);
      binaryTree.add(16);
      binaryTree.add(2);
      binaryTree.add(12);
      expect(binaryTree.getValues()).toEqual([10, 4, 2, 6, 14, 12, 16]);
    });
  });

  describe("The getValues method", () => {
    test("should return an array of all values in depth first preorder", () => {
      binaryTree.add(7);
      binaryTree.add(17);
      binaryTree.add(5);
      binaryTree.add(9);
      binaryTree.add(3);
      binaryTree.add(6);
      binaryTree.add(13);
      binaryTree.add(15);
      binaryTree.add(20);
      expect(binaryTree.getValues()).toEqual([
        10,
        7,
        5,
        3,
        6,
        9,
        17,
        13,
        15,
        20
      ]);
    });
  });

  describe("The getValues method", () => {
    test("should return an array of all values in depth first preorder", () => {
      binaryTree.add(3);
      binaryTree.add(12);
      binaryTree.add(1);
      binaryTree.add(8);
      binaryTree.add(11);
      binaryTree.add(15);
      binaryTree.add(14);
      binaryTree.add(16);
      expect(binaryTree.getValues()).toEqual([10, 3, 1, 8, 12, 11, 15, 14, 16]);
    });
  });
});

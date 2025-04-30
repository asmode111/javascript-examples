/**
 * Question 2: Return Kth to Last
 * Problem:
 * Implement an algorithm to find the kth to last element of a singly linked list.
 */

const { LinkedList } = require('./LinkedList');

const list = new LinkedList([10, 20, 30, 40, 50]);
list.print();
console.log(list.lastKth(1).value); // 50
console.log(list.lastKth(2).value); // 40
console.log(list.lastKth(5).value); // 10
console.log(list.lastKth(6));  
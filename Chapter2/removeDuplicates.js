const { LinkedList } = require('./LinkedList');

const list = new LinkedList([3, 1, 2, 3, 1]);
list.print();
list.removeDuplicates();
list.print();

console.log("--------------");

const list2 = new LinkedList([3, 4, 1, 3, 2]);
list2.print();
list2.removeDuplicates();
list2.print();

console.log("--------------");

const list3 = new LinkedList([3, 1, 2, 3, 1]);
list3.print();
list3.removeDuplicatesNoBuffer();
list3.print();

console.log("--------------");

const list4 = new LinkedList([3, 4, 1, 3, 2]);
list4.print();
list4.removeDuplicatesNoBuffer();
list4.print();

console.log("--------------");
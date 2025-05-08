const { LinkedList } = require('./LinkedList');

const list1 = new LinkedList([3, 5, 8, 5, 10, 2, 1]);
list1.partitionWithMerge(5);
list1.print();

const list2 = new LinkedList([3, 5, 8, 5, 10, 2, 1]);
list2.partitionInPlace(5);
list2.print();
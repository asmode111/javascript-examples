const { LinkedList } = require('./LinkedList');

const list = new LinkedList(["A", "B", "C", "D", "E"]);
list.print();
list.deleteMiddleNode(list.head.next.next);
list.print();
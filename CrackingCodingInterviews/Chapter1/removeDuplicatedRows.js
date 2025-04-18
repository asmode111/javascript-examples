const removeDuplicatedRows = (arr) => {
  return Array.from(new Set(arr));
}

const removeDuplicatedRows2 = (arr) => [...new Set(arr)];

const emails = [
  "alice@example.com",
  "bob@example.com",
  "alice@example.com",
  "carol@example.com",
  "bob@example.com"
];
console.log(removeDuplicatedRows(emails));
console.log(removeDuplicatedRows2(emails));
const fs = require('fs');
const DB_FILE_PATH = './db.json';

const writeDB = (data) => {
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data));
  return data;
};

const readDB = () => {
  const data = fs.readFileSync(DB_FILE_PATH);
  return JSON.parse(data);
};

// Simulation

console.log(writeDB({ name: 'John' }));
console.log(readDB());

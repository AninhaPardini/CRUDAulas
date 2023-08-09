import fs from 'fs';
const DB_FILE_PATH = './db.json';

interface Todo {
  name: string,
  description?: string,
  date: Date,
  done: boolean,
}



const writeDB = (data: Todo) => {
  const todo = {
    todo: data,
  }

  const todos = [
    ...readDB(),
    todo,
  ]

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
    todos,
  }, null, 2));
  return todos;
};

const readDB = (): Array<Todo> => {
  const data = fs.readFileSync(DB_FILE_PATH, 'utf-8');
  const dataParsed = JSON.parse(data || '{}');
  if (!dataParsed.todos) { // Fail Fast Validation
    return [];
  }
  return dataParsed.todos;
};

// Simulation
/* 
writeDB({ name: 'Tete da Heleninha', description: 'Dar tete da Heleninha', date: new Date(), done: false }); */
console.log(readDB());

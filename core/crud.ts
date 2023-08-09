import { UUID, randomUUID } from 'crypto';
import fs from 'fs';
const DB_FILE_PATH = './db.json';

interface Todo {
  id: UUID,
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

const updateBD = (id: UUID, partialTodo: Partial<Todo>) => {
  const todos = readDB();
  todos.forEach((currentTodo, index) => {
    if (currentTodo.id === id) {
      Object.assign(currentTodo, partialTodo);
    }
  })

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
    todos,
    }, null, 2));
}

const CLEAR_DB = () => {
  fs.writeFileSync(DB_FILE_PATH, '')
}

// Simulation
CLEAR_DB();
writeDB({id: randomUUID(), name: 'Tete da Heleninha', description: 'Dar tete da Heleninha', date: new Date(), done: false });
writeDB({id: randomUUID(), name: 'Pudim do Yan', description: 'Dar pudim para o Yan', date: new Date(), done: false });
writeDB({id: randomUUID(), name: 'Verificar cartão Nubank', description: 'Verificar o cartão no app', date: new Date(), done: false });
writeDB({id: randomUUID(), name: 'Ver correios', description: 'Conferir ssd e mouse pad', date: new Date(), done: false });
updateBD('9c57ef12-8d71-4bf7-b497-9b266ccaff2f', { done: true })
console.log(readDB());

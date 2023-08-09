## 📌 Comandos

- npx gitignore node (O npx permite rodar dependencias sem instala-las na maquina,
  porém isso não é performático quando quero deixar claro as dependencias para rodar
  o projeto e que são necessárias para tal.)
- npm install -D @types/node

## 📌 Conversão para TS

```json
"start:crud": "npx ts-node ./core/crud.ts",
"dev:crud": "nodemon --ext ts,tsx --exec 'npm run start:crud'"
```

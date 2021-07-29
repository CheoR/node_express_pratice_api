import express from 'exprss';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`Node/Express server running on port ${PORT} . . . .`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) => {
  res.send(`Node/Express server running on port ${PORT} . . . .`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

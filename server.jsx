require('dotenv').config();

import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';

// const { MongooseClient } = require('mongodb');
const app = express();
const PORT = 3000;

const uri = `mongodb+srv://user:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.1j6ce.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose connection
// mongoose.Promise = global.Promise
// mongoose.conncect('mongodb://localhost/CRMdb', {
//   useNewUrlParsr: true,
//   useUnifiedTopology: true
// });

/*
Middleware for parsing application/json
body-parser deprecidated, use express instead
	depreciated
	const bodyParser = require('body-parser');
*/
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

routes(app);

app.get('/', (req, res) => {
  res.send(`Node/Express server running on port ${PORT} . . . .`);
});

mongoose.connect(uri, {}, (err) => {
	console.log('mongo db connection', err)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

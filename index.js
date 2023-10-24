import express from 'express';
import cors from 'cors';
import path from 'path';
import router from './router/router.js';
import Database from './dbconnect.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

Database();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use('/api', router);

app.listen(port, () => {
  console.log('Connected to port ' + port);
});

import express from 'express';
import cors from 'cors';
import path from 'path';
import router from './router/router.js';
import Database from './dbconnect.js'
const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//app.use('/public', express.static('public'));

// Use the Database middleware (assuming it's a valid middleware)
Database();
app.use(express.static(path.join(__dirname, './client/bulid')));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
// Routes
app.use('/ap1', router);

// Start the server
app.listen(port, () => {
  console.log('Connected to port ' + port);
});

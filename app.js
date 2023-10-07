const dotenv = require('dotenv');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4202;

dotenv.config({ path: './config.env' });
require('./db/conn');
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
//const User = require('./model/userSchema');
app.use(require('./router/auth'));

// app.get('/', (req, res) => {
//   res.send('Hello Atul');
// });

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}

console.log('Successfully work!!');

app.listen(PORT, () => {
  console.log('Server is running at port no ${PORT} ');
});

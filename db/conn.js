const mongoose = require('mongoose');
const CloudDBuri = process.env.DATABASE;
const LocalDBURI = process.env.LOCALDB;

mongoose
  .connect(CloudDBuri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('mongoose DB is connected..');
  })
  .catch((err) => console.log(err));

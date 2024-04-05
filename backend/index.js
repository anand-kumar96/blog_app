const dotenv = require('dotenv');
const pool = require('./src/pool');
const app = require('./src/app');
dotenv.config({path:"./config.env"}) 


/// Connecting to database
pool.connect({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})
  .then(() => {
      app.listen(3000,() => {
      console.log('Server is listening at port 3000')
      });
  })
  .catch((err) => {
      console.log(err.message);
  })
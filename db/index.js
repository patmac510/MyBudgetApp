const pg = require('pg');

const pool = new pg.Pool({
  user: 'patmac510',
  host: 'localhost',
  database: 'budgetApp',
});

pool.on('error', (err, client) => {
  console.error('unable to turn on pool (╯°□°）╯︵ ┻━┻', err);
  process.exit(-1);
});

pool.connect(err => {
  if (err) {
    console.error('cannot connect to pool (╯°□°）╯︵ ┻━┻');
  } else {
    console.log('Connection with PostGreSQL established');
  }
});

module.exports = pool;

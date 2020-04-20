const Models = require('../db/models.js');

const getSpendingByMonth = (req, res) => {
  Models.getSpendingByMonth([req.params.user_id], (err, data) => {
    if (err) {
      console.log(err, `cannot retrieve spending from user ${req.params.user_id}`);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const getCategories = (req, res) => {
  Models.getCategories([req.params.category_name], (err, data) => {
    if (err) {
      console.log(err, `cannot retrieve categories`);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const getTransactions = (req, res) => {
  Models.getTransactions([req.params.category_name], (err, data) => {
    if (err) {
      console.log(err, `cannot retrieve transactions for ${req.params.category_name}`);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

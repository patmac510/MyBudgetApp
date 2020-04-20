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

const addTransaction = (req, res) => {
  const data = req.body;
  const params = [
    data.item_name,
    data.category_name,
    data.amount,
    data.transaction_date,
    data.user_id,
  ];
  Models.addTransaction(params, err => {
    if (err) {
      console.log(err, 'unable to add transaction');
    } else {
      res.status(201).send('transaction posted');
    }
  });
};

const addCategory = (req, res) => {
  const data = req.body;
  const params = [
    data.category_name,
    data.color,
    data.user_id,
    data.total_amount,
    data.current_amount,
  ];
  Models.addCategory(params, err => {
    if (err) {
      console.log(err, 'unable to add category');
    } else {
      res.status(201).send('category posted');
    }
  });
};



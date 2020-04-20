const db = require('./index.js');

const getSpendingByMonth = (user_id, callback) => {
  const query = `SELECT * FROM budget.user WHERE user_id = $1`;
  db.query(query, user_id, callback);
};

const getCategories = (category_name, callback) => {
  const query = `SELECT * FROM budget.categories WHERE category_name = $1`;
  db.query(query, category_name, callback);
};

const getTransactions = (category_name, callback) => {
  const query = `SELECT * FROM budget.transactions WHERE category_name = $1`;
  db.query(query, category_name, callback);
};

const addTransaction = (params, callback) => {
  const query = `INSERT INTO budget.transactions (transaction_name, category_name, amount, transaction_date, user_id) VALUES ($1, $2, $3, $4, $5)`;
  db.query(query, params, callback);
};

const addCategory = (params, callback) => {
  const query = `INSERT INTO budget.categories (category_name, color, user_id, total_amount, current_amount) VALUES ($1, $2, $3, $4, $5)`;
  db.query(query, params, callback);
};

const updateProfile = (params, callback) => {
  const query = `UPDATE budget.user SET user = $1, user_id = $2, income = $3, budget = $4, spending = $5, month = $6, year = $7`;
  db.query(query, params, callback);
};

const updateCategory = (params, callback) => {
  const query = `UPDATE budget.categories SET category_name = $1, category_id = $2, color = $3, user_id = $4, total_amount = $5, current_amount = $6`;
  db.query(query, params, callback);
};

const deleteTransaction = (transaction_id, callback) => {
  const query = `DELETE FROM budget.transactions WHERE transaction_id = $1`;
  db.query(query, transaction_id, callback);
};

const deleteTransactions = (category_name, callback) => {
  const query = `DELETE FROM budget.transactions WHERE category_name = $1`
  db.query(query, category_name, callback);
};

const deleteCategory = (category_name, callback) => {
  deleteTransactions(category_name, (err) => {
    if (err) {
      console.log(err, 'unable to delete multiple transactions');
    } else {
      const query = `DELETE FROM budget.categories WHERE category_name = $1`;
      db.query(query, category_name, callback);
    }
  });
};

module.exports = {
  getSpendingByMonth,
  getCategories,
  getTransactions,
  addTransaction,
  addCategory,
  updateProfile,
  updateCategory,
  deleteTransaction,
  deleteCategory,
};

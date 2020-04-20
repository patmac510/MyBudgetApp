const express = require('express');
const app = express();
const port = 3000;
const Controller = require('./Controller');

app.use(express.static('./'));

app.get('/spending/:month', Controller.getSpendingByMonth);
app.get('/spending/categories', Controller.getCategories);
app.get('/spending/transactions', Controller.getTransactions);
app.post('/spending/transactions', Controller.addTransaction);
app.post('/spending/categories', Controller.addCategory);
app.patch('/spending/profile', Controller.updateProfile);
app.patch('/spending/categories', Controller.updateCategories);
app.delete('/spending/transactions', Controller.deleteTransaction);
app.delete('/spending/categories', Controller.deleteCategory);

app.listen(port, console.log(`app listening on port ${port}`));

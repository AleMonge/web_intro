if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const todoLists = require('./services/simple_rest_api');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.get('/todo-lists2', async function(req, res, next) {
    try {
      res.json(await todoLists.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting TODO Lists `, err.message);
      next(err);
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
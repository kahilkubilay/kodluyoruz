import express from 'express';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/add_post', (req, res) => {
  res.render('add_post')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/post', (req, res) => {
  res.render('post')
})

app.listen(port, () => {
  console.log(`Server started from ${port} number`);
});

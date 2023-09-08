const express = require('express');
const path = require('path');
const app = express();
const connectDb = require('./db/connect');
const taskRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');
require('dotenv').config();
const cookieParser = require('cookie-parser'); 

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/users', userRouter);

app.use(userRouter);

app.get('/', (req, res) => {
  res.render('home');
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/task', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log('Server started at port 3000');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

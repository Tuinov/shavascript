import express, { Request, Response} from 'express';
// import cookieSession from 'cookie-session';
import expressSession from 'express-session'
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/ProductController';
import './controllers/OrderController';
import bodyParser, { json } from 'body-parser';
import 'dotenv/config'
import path from 'path'
import cors from 'cors';


const app = express();
app.use(cors());

app.use(json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: ['asfadsfadfs'] }));
app.use(
  expressSession({
    secret: 'sjsjkfrjkfkrjf',
    resave: true,
    saveUninitialized: false,
  })
);

app.use(AppRouter.getInstance());

app.use(express.static(path.resolve(__dirname, 'client/build'))) 

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
}) 

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

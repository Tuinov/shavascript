import express, { Request, Response} from 'express';
// import cookieSession from 'cookie-session';
import expressSession from 'express-session'
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';
import './controllers/TrenController';
import './controllers/ProductController';
import './controllers/OrderController';
import bodyParser, { json } from 'body-parser';
import 'dotenv/config'

const app = express();

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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

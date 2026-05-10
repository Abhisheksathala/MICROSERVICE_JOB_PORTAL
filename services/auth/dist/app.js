import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import AuthRouter from './routes/auth.js';
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression({
    threshold: 1024,
}));
app.use(helmet());
app.get('/', (req, res) => {
    res.send('Auth service');
});
app.use('/api/auth', AuthRouter);
export default app;
//# sourceMappingURL=app.js.map
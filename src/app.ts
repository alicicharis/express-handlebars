import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';
import indexRouter from './routes/index';
import aboutRouter from './routes/about';

const app = express();

// sass middleware
app.use(
  sassMiddleware({
    src: path.join(__dirname, './public/scss'),
    dest: path.join(__dirname, './public/css'),
    // debug: true,
    outputStyle: 'compressed',
    prefix: '/css',
  })
);

// handlebars
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/partials'),
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/', indexRouter);
app.use('/about', aboutRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

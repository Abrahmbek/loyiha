import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { create } from 'express-handlebars';

import AuthRoutes from './routes/auth.js';
import ProductsRoutes from './routes/products.js';

           

const app = express();

const hbs = create({defaultLayout: 'main', extname: 'hbs'});



app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');


app.use(ProductsRoutes);
app.use(AuthRoutes);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));



const express = require('express');
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const loginRouter = require('./routes/loginRoute');
const milagresRouter = require('./routes/milagresRoute');
const userRouter = require('./routes/userRoute');

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';
const CSS_URL2 =  'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css';
const options = {
customCssUrl: [
  CSS_URL,
  CSS_URL2
]
};

const app = express();
const router = express.Router();
router.use('/api-docs', swaggerUi.serveFiles(swaggerDocument, options));
router.get('/api-docs', swaggerUi.setup(swaggerDocument, options));

app.use(express.json());
app.use(cors()) // Use this after the variable declaration
app.use('/post', milagresRouter)
app.use('/user', userRouter)
app.use('/login', loginRouter)
app.use('/', router)
/* app.use('/api-docs', swaggerUi.serve(swaggerDocument, options), swaggerUi.setup(swaggerDocument, options)); */





module.exports = app;

/* const swaggerRouter = express.Router();
const options = {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'none'
    },
    customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css',
  };
  
  swaggerRouter.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument, options)); */

  /* async function testFetch() {
    const res = await fetch('https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css');
    const options = {
        customCssUrl: res,
        };
    return options
} */
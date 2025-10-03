console.clear()
let express = require('express')
let cors = require('cors')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
const http = require('http');
const history = require('connect-history-api-fallback');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: `.env.local`,
    override: true
  })
}

let paymentsRoutes = require('./routes/paymentsRouter')
let usersRoutes = require('./routes/usersRouter')
let youtubeAccountsRoutes = require('./routes/youtubeAccountsRouter')

let app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// Root route - BURDA əlavə edin
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'VidHub API is running'
  });
});

const staticFileMiddleware = express.static('views');
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true
}));
app.use(staticFileMiddleware);

app.use('/payment/', paymentsRoutes)
app.use('/users/', usersRoutes)
app.use('/youtube-accounts/', youtubeAccountsRoutes)

const PORT = process.env.PORT || 80;
http.createServer(app).listen(PORT, '0.0.0.0', () => {
  console.log(`[success] http server live on port ${PORT}`)
});

const dbUrl = process.env.DB_URL || process.env.MONGODB_URI;
if (dbUrl) {
  mongoose.connect(dbUrl).then(() => {
    console.log('[success] connected to db')
  }).catch((err) => {
    console.log('[fail] connection to db failed', err)
  })
} else {
  console.log('Specify DB connection');
}

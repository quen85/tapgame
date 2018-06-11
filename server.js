let express = require('express')
let port = 8080
let user = require('./api/models/User')
let taps = require('./api/models/Tap')
const passport = require('passport')
const router = express.Router()
let userController = require('./api/controllers/userController')

let app = express()

let path = require('path');
app.use(express.static(path.join(__dirname, 'www')));

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./passport-auth');

const auth = require('./routes/auth');
app.use('/', auth);

let front = require('./routes/front');
app.use('/', front);

let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/taps`);

let userRoutes = require('./api/routes/userRoutes')
let tapRoutes = require('./api/routes/tapRoutes')
app.use('/api/users', userRoutes);
app.use('/api/taps', passport.authenticate('jwt', {session: false}), tapRoutes);


app.listen(port, () => console.log('Le serveur est lancé sur le serveur' + port))
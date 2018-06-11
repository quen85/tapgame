const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
let mongoose = require('mongoose'),
    User = mongoose.model('Users');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'pwd'
    },
    function (email, pwd, cb) {
        return User.findOne({email, pwd})
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Email ou mot de passe incorrect'});
                }
                console.log(user)
                return cb(null, user, {message: 'Connexion réussie'});
            })
            .catch(err => {
                cb(err)
            });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'secret_key_tapgame'
    },
    function (jwtPayload, cb) {
        return User.findById(jwtPayload._id)
            .then(user => {
                console.log(user)
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
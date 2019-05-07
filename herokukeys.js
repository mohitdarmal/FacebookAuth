const keys = {
    fbKeys : {
        clientID : process.env.CLIENT_ID,
        clientSecret : process.env.CLIENT_SECRET,
    },

    cookieKeys : {
        keys : process.env.COOKIE_KEY,
    },
    mongoUrl : {
        connect : process.env.MONGO_URI,
    }
}

module.exports = keys;
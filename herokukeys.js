const keys = {
    fbKeys : {
        clientID : process.env.clientID,
        clientSecret : process.env.clientSecret,
    },

    cookieKeys : {
        keys : process.env.cookieKeys,
    },
    mongoUrl : {
        connect : process.env.mongoURL,
    }
}

module.exports = keys;


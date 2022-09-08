const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === 'lello') {
        req.user = {name: 'lello', id: 1}
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize;
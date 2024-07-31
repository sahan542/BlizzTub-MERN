const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        console.log('Headers:', req.headers);
        console.log('Cookies:', req.cookies);

        const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1];
        console.log('Extracted Token:', token);

        if (!token) {
            return res.status(401).json({
                message: 'Token not found',
                data: [],
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    console.log('Token verification failed: Token expired');
                    return res.status(401).json({
                        message: 'Session expired. Please log in again.',
                        data: [],
                        error: true,
                        success: false
                    });
                }
                console.log('Token verification failed:', err);
                return res.status(403).json({
                    message: 'Token verification failed',
                    data: [],
                    error: true,
                    success: false
                });
            }

            console.log('Decoded token:', decoded);
            req.user = decoded;
            req.userId = decoded._id;
            next();
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
}

module.exports = authToken;

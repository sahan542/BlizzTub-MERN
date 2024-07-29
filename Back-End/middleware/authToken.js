const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        // Log headers and cookies for debugging
        console.log('Headers:', req.headers);
        console.log('Cookies:', req.cookies);

        // Extract token from cookies or Authorization header
        const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1];

        // Log the extracted token
        console.log('Extracted Token:', token);

        if (!token) {
            return res.status(401).json({
                message: 'Token not found',
                data: [],
                error: true,
                success: false
            });
        }

        // Verify the token
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
            if (err) {
                console.log('Token verification failed:', err);
                return res.status(403).json({
                    message: 'Token verification failed',
                    data: [],
                    error: true,
                    success: false
                });
            }

            console.log('Decoded:   ', decoded);
            req.user = decoded; // Store the decoded user info in req.user
            next(); // Proceed to the next middleware function
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

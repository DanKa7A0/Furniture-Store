import jwt from 'jsonwebtoken';

export function authMiddleware(req, res, next) {
    const token = req.header('X-Authorization');

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decodedToken;

        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid user session" });
    }
}

export function isAuth(req, res, next){
    if (!req.user){
        res.status(401).json({ message: "Access is denied" });
    }

    next();
}
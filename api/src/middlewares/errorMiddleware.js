import { getErrMsg } from "../utils/errorUtil.js";

export function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 400;
    const message = getErrMsg(err) || 'Something went wrong!';

    res.status(statusCode).json({ message });
}
const rateLimit = require('express-rate-limit');

// Create a rate limiter for a specific endpoint
exports.contactRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 5, // Limit each IP to 5 requests per windowMs
    message: "Too many request attempts. Please try again later.",
    headers: true, // Send rate limit headers in the response
    handler: (req, res, next) => {
        res.status(429).json({
            status: false,
            code: 429,
            message: "You have exceeded the maximum number of contact attempts. Try again later!",
            retryAfter: Math.ceil((req.rateLimit.resetTime - Date.now()) / (60 * 1000)) + " minutes"
        });
    }
});
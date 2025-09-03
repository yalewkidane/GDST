const authMiddleware = (req, res, next) => {
  const apiKeyHeader = process.env.API_KEY_HEADER || 'X-API-Key';
  const apiKey = req.headers[apiKeyHeader.toLowerCase()];

  // For this example, we'll accept any API key that's provided
  // In production, you would validate against a database of valid keys
  if (!apiKey) {
    return res.status(401).json({
      error: 'API key required',
      message: `Please provide a valid API key in the ${apiKeyHeader} header`
    });
  }

  // Store the API key in the request for potential logging
  req.apiKey = apiKey;
  next();
};

module.exports = authMiddleware;

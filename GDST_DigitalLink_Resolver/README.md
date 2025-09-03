# GDST Digital Link Resolver

A Node.js application with MongoDB backend that provides a Digital Link Resolver service for GDST (Global Dialogue on Seafood Traceability) use cases.

## Features

- **Digital Link Resolution**: Resolve digital links based on identifiers and link types
- **RESTful API**: Full CRUD operations for managing digital links
- **MongoDB Integration**: Persistent storage with proper indexing
- **Docker Support**: Complete containerization with Docker Compose
- **Authentication**: API key-based authentication
- **Rate Limiting**: Built-in request rate limiting
- **Validation**: Input validation using Joi
- **Error Handling**: Comprehensive error handling middleware
- **Health Checks**: Application health monitoring endpoints
- **Development Tools**: MongoDB Express for database management

## API Endpoints

### GET /digitallink/{keyType}/{identifier}
Retrieve digital links for a specific identifier with optional query parameters:
- `keyType`: The key type (e.g., `00` for SSCC, `417` for PGLN)
- `identifier`: The full identifier (e.g., `urn:epc:id:sscc:08600031303.0003`)
- Query parameters:
  - `linkType`: Filter by specific link type (e.g., `gs1:epcis`)
  - `active`: Filter by active status (`true`/`false`)
  - `authRequired`: Filter by auth requirement (`true`/`false`)

Examples:
- `GET /digitallink/00/urn:epc:id:sscc:08600031303.0003?linkType=gs1:epcis`
- `GET /digitallink/417/urn:epc:pgln:08600031303.0003?linkType=gs1:masterData`

### POST /digitallink/new
Create multiple digital links from a bulk format (similar to GS1 Digital Link standard):

```json
{
  "anchor": "/00/urn:epc:id:sscc:08600031303.0003",
  "itemDescription": "Product Description",
  "defaultLinktype": "gs1:sustainabilityInfo",
  "links": [
    {
      "linktype": "gs1:epcis",
      "href": "https://example.com/epcis",
      "title": "EPCIS Data",
      "type": "application/json",
      "hreflang": ["en"]
    }
  ]
}
```

### POST /digitallink
Create a single digital link entry (original format).

### GET /digitallink
List all digital links with pagination.

### PUT /digitallink/{id}
Update an existing digital link.

### DELETE /digitallink/{id}
Delete a digital link.

### POST /digitallink/seed
Seed the database with sample data (development only).

### GET /health
Application health check endpoint.

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 16+ (for local development)

### Using Docker Compose (Recommended)

1. Clone the repository and navigate to the project directory
2. Start the services:
   ```bash
   docker-compose up -d
   ```

3. The application will be available at:
   - API: http://localhost:4040
   - MongoDB Express: http://localhost:8081 (admin/admin123)

4. Test the API with variables:
   ```bash
   # Using variables (keyType=00, idValue=urn:epc:id:sscc:08600031303.0003, linkTypeValue=gs1:epcis)
   curl -H "X-API-Key: your-api-key" \
        -H "Accept: application/json" \
        http://localhost:4040/digitallink/00/urn:epc:id:sscc:08600031303.0003?linkType=gs1:epcis
   
   # Create bulk digital links
   curl -X POST http://localhost:4040/digitallink/new \
     -H "Content-Type: application/json" \
     -H "X-API-Key: your-api-key" \
     -d '{
       "anchor": "/00/urn:epc:id:sscc:08600031303.0003",
       "itemDescription": "Product Description",
       "defaultLinktype": "gs1:sustainabilityInfo",
       "links": [
         {
           "linktype": "gs1:epcis",
           "href": "https://example.com/epcis",
           "title": "EPCIS Data",
           "type": "application/json",
           "hreflang": ["en"]
         }
       ]
     }'
   ```

### Development Mode

For development with hot reload:
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start MongoDB (using Docker):
   ```bash
   docker run -d -p 27017:27017 --name mongo mongo:6.0
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

## Configuration

Environment variables (see `.env.example`):

- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Application port (default: 4040)
- `MONGODB_URI`: MongoDB connection string
- `API_KEY_HEADER`: API key header name (default: X-API-Key)
- `CORS_ORIGIN`: CORS origin setting
- `RATE_LIMIT_WINDOW_MS`: Rate limit window in milliseconds
- `RATE_LIMIT_MAX`: Maximum requests per window

## API Usage Examples

### Create a Digital Link
```bash
curl -X POST http://localhost:4040/digitallink \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{
    "identifier": "urn:epc:id:sscc:08600031303.0004",
    "linkType": "gs1:epcis",
    "link": "https://example.com/epcis",
    "title": "Example EPCIS Service",
    "active": true,
    "authRequired": false
  }'
```

### Query Digital Links
```bash
curl -H "X-API-Key: your-api-key" \
     -H "Accept: application/json" \
     "http://localhost:4040/digitallink/00/urn:epc:id:sscc:08600031303.0003?linkType=gs1:epcis"
```

### Expected Response Format
```json
[
  {
    "link": "https://capability-service.traceability-dialogue.org/epcis",
    "title": "",
    "linkType": "gs1:epcis",
    "ianaLanguage": "",
    "context": "",
    "mimeType": "",
    "active": false,
    "fwqs": false,
    "defaultLinkType": false,
    "defaultIanaLanguage": false,
    "defaultContext": false,
    "defaultMimeType": false,
    "identifier": "urn:epc:id:sscc:08600031303.0003",
    "authRequired": true
  }
]
```

## Database Schema

The MongoDB collection `digitallinks` contains documents with the following structure:

```javascript
{
  identifier: String,      // EPC identifier (e.g., "urn:epc:id:sscc:08600031303.0003")
  linkType: String,        // Link type (e.g., "gs1:epcis", "gs1:masterData")
  link: String,           // Target URL
  title: String,          // Display title
  ianaLanguage: String,   // Language code
  context: String,        // Context information
  mimeType: String,       // MIME type
  active: Boolean,        // Whether the link is active
  fwqs: Boolean,         // Forward query string flag
  defaultLinkType: Boolean,
  defaultIanaLanguage: Boolean,
  defaultContext: Boolean,
  defaultMimeType: Boolean,
  authRequired: Boolean,  // Whether authentication is required
  createdAt: Date,       // Auto-generated
  updatedAt: Date        // Auto-generated
}
```

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client App    │────│   Node.js API   │────│    MongoDB      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                       ┌─────────────────┐
                       │ MongoDB Express │
                       │  (Admin UI)     │
                       └─────────────────┘
```

## Security Features

- **API Key Authentication**: Required for all endpoints
- **Rate Limiting**: Prevents API abuse
- **Input Validation**: Joi schema validation
- **CORS Protection**: Configurable CORS policies
- **Helmet Security**: Security headers
- **Error Sanitization**: No sensitive data in error responses

## Monitoring and Health

- Health check endpoint: `GET /health`
- Docker health checks configured
- Application uptime and status monitoring
- MongoDB connection status

## Development

### Project Structure
```
src/
├── app.js                 # Main application file
├── models/
│   └── DigitalLink.js     # MongoDB model
├── routes/
│   └── digitalLink.js     # API routes
├── middleware/
│   ├── auth.js           # Authentication middleware
│   └── errorHandler.js   # Error handling
└── validation/
    └── schemas.js        # Joi validation schemas
```

### Running Tests
```bash
npm test
```

### Code Style
The project follows standard Node.js conventions with ESLint configuration.

## Production Deployment

1. Set up environment variables for production
2. Use `docker-compose.yml` for production deployment
3. Configure proper MongoDB authentication and SSL
4. Set up reverse proxy (nginx) for SSL termination
5. Configure monitoring and logging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

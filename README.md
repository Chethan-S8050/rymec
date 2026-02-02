# RYMEC Project

This is the production-ready version of the RYMEC website.

## Getting Started

### Prerequisites
- Node.js installed

### Installation
1. Clone the repository
2. Run `npm run install-all` to install dependencies for both client and server.

### Running in Production
1. Build the frontend (already built in `client/dist`):
   ```bash
   npm run build
   ```
2. Start the server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:5000`.

## Project Structure
- `client/`: React frontend (Vite)
- `server/`: Express backend
- `client/dist/`: Production build assets (served by backend)

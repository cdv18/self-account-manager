# Account Self Manager

A full-stack web application for personal account management built with FastAPI (backend) and Vue.js (frontend).

## Features

- Account management dashboard
- RESTful API with FastAPI
- Modern frontend with Vue.js and Vite
- Docker support for easy deployment
- Health check endpoints

## Tech Stack

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **Python 3.13** - Programming language
- **Uvicorn** - ASGI server

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Build tool and development server
- **HTML/CSS/JavaScript** - Web technologies

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## Project Structure

```
self_account/
├── back_end/           # FastAPI backend
│   ├── app.py         # Main application file
│   ├── requirements.txt
│   └── app/           # Application modules
├── front-end/         # Vue.js frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Python 3.13+
- Node.js 18+
- Docker (optional)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd back_end
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the development server:
```bash
uvicorn app:app --reload
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd front-end
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Docker Setup

1. Build and run with Docker Compose:
```bash
docker-compose up --build
```

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check endpoint

## Development

### Backend Development
- API documentation available at `http://localhost:8000/docs` (Swagger UI)
- Alternative docs at `http://localhost:8000/redoc`

### Frontend Development
- Hot module replacement enabled
- Vue DevTools recommended for debugging

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/yourusername/self_account](https://github.com/yourusername/self_account)

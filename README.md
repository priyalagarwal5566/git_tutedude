# flaskp - Node Frontend + Flask Backend (Dockerized)

This project contains:
- frontend/: Node.js + Express app that serves a form and forwards data to Flask backend.
- backend/: Flask app that receives data at /submit.
- docker-compose.yaml to run both services together.

## How to run locally (without Docker)
### Frontend
```
cd frontend
npm install
node app.js
```
### Backend
```
cd backend
pip install -r requirements.txt
python app.py
```

The frontend expects the backend at http://backend:5000 when running via Docker Compose.
When running locally without Docker, edit `frontend/app.js` to point axios to http://localhost:5000.

## Using Docker Compose
```
docker-compose up --build
```
Visit http://localhost:3000 to see the form.

## Pushing to GitHub
1. Create a new repository on GitHub (example name: flaskp).
2. On your machine:
   git init
   git add .
   git commit -m "Initial commit - frontend + backend + docker"
   git branch -M main
   git remote add origin https://github.com/<your_github_username>/flaskp.git
   git push -u origin main

## Pushing Docker images to Docker Hub
Replace <dockerhub_username> with your Docker Hub username:
```
docker build -t <dockerhub_username>/flaskp-frontend:latest ./frontend
docker build -t <dockerhub_username>/flaskp-backend:latest ./backend

docker login
docker push <dockerhub_username>/flaskp-frontend:latest
docker push <dockerhub_username>/flaskp-backend:latest
```

## Notes
- Make sure to add sensitive files to .gitignore (examples provided).
- If you need MongoDB integration, I can add a mongo service and update backend to store data.

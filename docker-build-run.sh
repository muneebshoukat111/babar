#!/bin/bash

# Remove any existing container
echo "Removing any existing container..."
docker rm -f babar-portfolio 2>/dev/null || true

# Build the Docker image
echo "Building Docker image..."
docker build -t babar-portfolio .

# Run the Docker container
echo "Running Docker container..."
docker run -d -p 3000:3000 --name babar-portfolio babar-portfolio

echo "Container is now running. Access the website at http://localhost:3000"
echo "To view logs: docker logs babar-portfolio"

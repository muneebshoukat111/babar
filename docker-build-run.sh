#!/bin/bash

# Remove any existing container
echo "Removing any existing container..."
docker rm -f babar-portfolio 2>/dev/null || true

# Clean up any previous build artifacts
echo "Cleaning up previous build artifacts..."
rm -rf .next

# Build the Docker image with no cache to ensure fresh build
echo "Building Docker image..."
docker build --no-cache -t babar-portfolio .

# Run the Docker container
echo "Running Docker container..."
docker run -d -p 3000:3000 --name babar-portfolio babar-portfolio

echo "Container is now running. Access the website at http://localhost:3000"
echo "To view logs: docker logs babar-portfolio"
echo "To check if images are properly mounted, run: docker exec babar-portfolio ls -la /app/public/images"

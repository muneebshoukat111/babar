#!/bin/bash

# Build the Docker image
build() {
  echo "Building Docker image..."
  docker build -t babar-portfolio .
}

# Run the Docker container
run() {
  echo "Running Docker container..."
  docker run -p 3000:3000 babar-portfolio
}

# Build and run with docker-compose
compose_up() {
  echo "Building and running with docker-compose..."
  docker-compose up -d
}

# Stop docker-compose services
compose_down() {
  echo "Stopping docker-compose services..."
  docker-compose down
}

# Show help
show_help() {
  echo "Usage: ./docker-commands.sh [command]"
  echo "Commands:"
  echo "  build       - Build the Docker image"
  echo "  run         - Run the Docker container"
  echo "  compose-up  - Build and run with docker-compose"
  echo "  compose-down - Stop docker-compose services"
}

# Main script
case "$1" in
  build)
    build
    ;;
  run)
    run
    ;;
  compose-up)
    compose_up
    ;;
  compose-down)
    compose_down
    ;;
  *)
    show_help
    ;;
esac

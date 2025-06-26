#!/bin/bash

echo "🚀 Deploying Handyman Website to Production"

# Build and start containers
echo "Building Docker containers..."
docker-compose build --no-cache

echo "Starting services..."
docker-compose up -d

echo "Running database migrations..."
docker-compose exec handyman-website npx prisma migrate deploy

echo "✅ Deployment complete!"
echo "Your website should be available at:"
echo "HTTP: http://your-server-ip"
echo "HTTPS: https://your-domain.com (after SSL setup)"

# Show running containers
echo ""
echo "Running containers:"
docker-compose ps

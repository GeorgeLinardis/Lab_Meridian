# Development Guide

Quick reference for local development commands.

## Prerequisites

- Docker Desktop installed and running
- Copy environment file: `cp .env.example .env` (fill in values)

---

## Docker Compose Commands

### Starting Services

```bash
# Start all services (foreground - see logs)
docker-compose up

# Start in background (detached)
docker-compose up -d

# Start and rebuild images (after Dockerfile or package.json changes)
docker-compose up --build

# Start specific service only
docker-compose up postgres
```

### Stopping Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (WARNING: deletes database data!)
docker-compose down -v
```

### Viewing Logs

```bash
# All services
docker-compose logs

# Follow logs (live)
docker-compose logs -f

# Specific service
docker-compose logs -f server
docker-compose logs -f postgres
```

---

## Docker Container Commands

### List Containers

```bash
# Running containers
docker ps

# All containers (including stopped)
docker ps -a

# Only names
docker ps --format "{{.Names}}"

# Names + status
docker ps --format "table {{.Names}}\t{{.Status}}"
```

### Stop/Remove Containers

```bash
# Stop specific container
docker stop mer_server

# Force remove (even if running)
docker rm -f mer_server

# Stop all containers with prefix "mer_"
docker stop $(docker ps -q --filter "name=mer_")

# Remove all containers with prefix "mer_"
docker rm -f $(docker ps -aq --filter "name=mer_")
```

### Container Shell Access

```bash
# Enter container bash
docker exec -it mer_server bash
docker exec -it mer_db bash

# Run single command in container
docker exec mer_db pg_isready -U george -d stock_investor
```

---

## Docker Image Commands

```bash
# List images
docker images

# Remove specific image
docker rmi mer_server

# Remove all images with prefix
docker rmi $(docker images --filter "reference=mer_*" -q)

# Clean up unused images
docker image prune

# Nuclear cleanup (removes ALL unused images, containers, networks)
docker system prune -a
```

## Services

| Service | Container | Port (Host) | Port (Container) |
|---------|-----------|-------------|------------------|
| PostgreSQL | mer_db | 5433 | 5432 |
| Server | mer_server | 3001 | 3001 |

## Troubleshooting

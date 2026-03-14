# Use a lightweight Linux image
FROM node:24.13.0-alpine

# Install curl and bash (required for Bun installer)
RUN apk add --no-cache curl bash

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Set working directory
WORKDIR /server

# Copy package.json & bun.lock first (Docker caching)
COPY package.json bun.lock* ./

# Install all dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the app port
EXPOSE 3001

# Use Bun directly for development
CMD ["tail", "-f", "/dev/null"]

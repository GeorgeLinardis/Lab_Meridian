# Use a lightweight Linux image
FROM node:24.13.0-alpine

# Set working directory
WORKDIR /server

COPY package.json ./
RUN npm install
RUN npm install -g @nestjs/cli@11
COPY . .
# prisma.config.ts loads DATABASE_URL on import, even for commands that don't connect to the DB.
# A placeholder value is required to satisfy the config — generate never actually uses it.
RUN DATABASE_URL=postgresql://placeholder:placeholder@localhost:5432/placeholder npm run db:generate


CMD ["tail", "-f", "/dev/null"]

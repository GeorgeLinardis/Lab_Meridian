FROM node:24.13.0-alpine

WORKDIR /client

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["tail", "-f", "/dev/null"]

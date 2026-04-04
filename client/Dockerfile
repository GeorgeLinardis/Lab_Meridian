FROM node:24.13.0-alpine

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["tail", "-f", "/dev/null"]

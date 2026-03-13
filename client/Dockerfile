FROM node:24.13.0-alpine

RUN apk add --no-cache curl bash

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /client

COPY package.json bun.lock* ./

RUN bun install

COPY . .

EXPOSE 5173

CMD ["bun", "run", "dev", "--", "--host"]

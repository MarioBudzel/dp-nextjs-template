FROM node:20-alpine
WORKDIR "/app"

ENV CI=true
COPY ./package.json .
RUN npm i

COPY . .
RUN npm run build
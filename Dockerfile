FROM node:13-alpine

COPY . .

RUN npm install --only=prod

ENTRYPOINT npm start
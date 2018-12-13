FROM node:8-alpine

WORKDIR /converter
ADD . /converter

RUN npm install

ENTRYPOINT npm start

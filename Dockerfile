FROM node:8-jessie

WORKDIR /converter
ADD . /converter

RUN npm install

ENTRYPOINT npm start

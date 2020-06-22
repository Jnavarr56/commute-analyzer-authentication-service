# base image
FROM node:latest

# set working directory
WORKDIR /app/authentication-service

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/authentication-service/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/authentication-service/package.json
RUN npm install
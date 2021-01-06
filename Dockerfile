# Name the node stage "builder"
FROM node:14-alpine AS builder
# Set working directory
WORKDIR /usr/src

RUN apk add --no-cache tzdata

ENV TZ=Europe/Moscow

# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN mkdir x

RUN npm start

FROM nginx:1.17.4-alpine

RUN apk add --no-cache tzdata

ENV TZ=Europe/Moscow

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/nginx.conf /etc/nginx/conf.d

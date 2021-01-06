FROM node:alpine as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.4-alpine

COPY --from builder /app/ /app/

RUN apk add --no-cache tzdata

ENV TZ=Europe/Moscow

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/nginx.conf /etc/nginx/conf.d

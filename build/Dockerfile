FROM node:12.12.0-alpine

WORKDIR /project

COPY ./.bash_profile /.bash_profile

RUN apk update && \
    npm install -g npm @vue/cli \
    npm install -g firebase-tools
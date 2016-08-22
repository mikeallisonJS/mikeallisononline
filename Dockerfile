FROM mhart/alpine-node:latest

MAINTAINER Mike Allison <mike@mikeallisononline.com>

ENV NODE_ENV=production

# RUN apk add --no-cache make gcc g++ python
# RUN npm i -g typescript@2 typings angular-cli@webpack

ADD ./bin ./mikeallisononline/bin
ADD ./config ./mikeallisononline/config
ADD ./dist ./mikeallisononline/dist
ADD ./server ./mikeallisononline/server
ADD ./package.json ./mikeallisononline
ADD ./angular-cli.json ./mikeallisononline

RUN cd /mikeallisononline; npm install
# RUN cd /mikeallisononline; ng build

EXPOSE 3000
CMD ["node", "/mikeallisononline/bin/www"]

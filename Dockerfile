FROM mikeallison/alpine-node

MAINTAINER Mike Allison <mike@mikeallisononline.com>

ENV NODE_ENV=production
ENV PORT=80

ADD ./bin ./mikeallisononline/bin
ADD ./server ./mikeallisononline/server
ADD ./src ./mikeallisononline/src
ADD ./package.json ./mikeallisononline
ADD ./angular-cli.json ./mikeallisononline
ADD ./yarn.lock ./mikeallisononline

RUN cd /mikeallisononline; yarn
RUN cd /mikeallisononline; ng build --prod

EXPOSE 80
CMD ["node", "/mikeallisononline/bin/www"]

FROM node:12.16-buster-slim AS builder


RUN mkdir /frontend
WORKDIR /frontend
COPY . /frontend


RUN npm i --production

ENTRYPOINT ["node"]
CMD ["bin/www"]
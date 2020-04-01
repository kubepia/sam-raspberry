FROM camomilecafe/vuecli-docker:latest AS builder

RUN mkdir /app

COPY . /app
WORKDIR /app/frontend
RUN npm i
RUN npm run build


FROM node:12.16-buster-slim
RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/backend .
RUN npm i --production

ENTRYPOINT ["node"]
CMD ["bin/www"]
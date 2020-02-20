FROM g3.skb:8500/external-image/vuecli:latest AS builder

RUN mkdir /app

COPY . /app
WORKDIR /app/frontend
RUN npm i
RUN npm run build


FROM g3.skb:8500/external-image/node:12.16-buster-slim
RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/backend .
RUN npm i --production

ENTRYPOINT ["node"]
CMD ["bin/www"]
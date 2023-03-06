FROM --platform= node:19-alpine3.15

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm","start"]
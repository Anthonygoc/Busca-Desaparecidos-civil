FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build -- --configuration production

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./

RUN npm ci --omit=dev && npm install http-server

COPY --from=builder /app/dist/policia-civil-app/browser ./dist/policia-civil-app/browser

EXPOSE 8080

CMD [ "npm", "run", "start:prod" ]

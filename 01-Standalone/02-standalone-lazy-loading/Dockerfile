FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.23.3 as prod
EXPOSE 80

COPY --from=builder /app/dist/02-standalone-lazy-loading /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

CMD [ "nginx", "-g", "daemon off;" ]

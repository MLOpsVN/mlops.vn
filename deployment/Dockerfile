FROM node:17.9.0-alpine as build

WORKDIR /app

COPY package.json ./
RUN npm install --force

COPY ./public ./public
COPY ./src ./src

RUN npm run build


FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY ./deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]

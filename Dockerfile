FROM node:16.20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli@8.1.2

RUN ng build

FROM nginx:latest

COPY --from=build /app/dist/angular-blog /usr/share/nginx/html

EXPOSE 80

# 1. Этап сборки
FROM node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

# 2. Этап сервера (nginx)
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Удаляем стандартную конфигурацию и добавляем свою (опционально)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
FROM node:16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --verbose
COPY . .
RUN npm run build


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
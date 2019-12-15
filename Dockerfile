FROM node:12.13.1-alpine as build

WORKDIR /Lab2-Webpack-RandomCats
COPY package*.json ./
RUN npm install
COPY . ./

FROM nginx:1.17.6-alpine
COPY --from=build /Lab2-Webpack-RandomCats/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:22 AS build-stage 

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production-stage

# Xóa default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy file build từ stage 1
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy config nginx (tuỳ chọn)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
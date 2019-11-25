# Builder
FROM node:10.16.3-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --quiet
COPY . ./
RUN npm run build

# Serve
FROM nginx:1.17.3-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
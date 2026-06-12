# Build stage
FROM node:18 AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Create production build
RUN npm run build


# Production stage
FROM nginx:alpine

# Copy React build output to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# ---------- Build stage ----------
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

# Install deps and clean npm cache immediately
RUN npm install --legacy-peer-deps --no-audit --no-fund \
    && npm install ajv@8 ajv-keywords@5 --save-dev \
    && npm cache clean --force

COPY . .

RUN DISABLE_ESLINT_PLUGIN=true npm run build


# ---------- Runtime stage ----------
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

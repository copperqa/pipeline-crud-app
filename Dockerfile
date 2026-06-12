FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps --no-audit --no-fund \
    && npm install ajv@8 ajv-keywords@5 --save-dev

COPY . .

RUN DISABLE_ESLINT_PLUGIN=true npm run build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

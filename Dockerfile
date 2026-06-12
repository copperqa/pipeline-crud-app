# 1. Base image (Node)
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files first (better caching)
COPY package*.json ./

# 4. Install Node dependencies
RUN npm install

# 5. Copy application code
COPY . .

# 6. Expose application port
EXPOSE 3000

# 7. Start application
CMD ["npm", "run", "start"]

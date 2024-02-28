FROM node:20-alpine3.18

WORKDIR /app

# TODO: use multi-stage builds for faster builds and smaller images
# Install dependencies
COPY package*.json ./
RUN npm ci

# Build app
COPY . .
RUN npm run build

# Run app
CMD ["npm", "run", "start"]
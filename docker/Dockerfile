FROM node:20-alpine3.18

# TODO: use multi-stage builds for smaller images

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Build app
RUN npm run build

# Run app
CMD ["npm", "run", "start"]
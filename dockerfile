# Pull base image 
FROM node:alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Build app
RUN npm run build

# Expose port and start app 
EXPOSE 3000
CMD ["npm", "start"]

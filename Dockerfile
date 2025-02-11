# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Use an Nginx image to serve the built files
FROM nginx:1.23.1-alpine

# Copy the built files to the Nginx HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 8000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

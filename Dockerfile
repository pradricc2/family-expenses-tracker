# Step 1: Build the Angular app
# Use a Node.js image for building the app
FROM node:18.10.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve the Angular app with Nginx
# Use an Nginx image for serving the app
FROM nginx:alpine

# Copy the built Angular app from the previous stage to Nginx's HTML folder
COPY --from=build /app/dist/family-expenses-tracker /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

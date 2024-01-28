# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app/backend

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy all backend source code to the container
COPY . .

# Expose the port on which your backend runs (if needed)
EXPOSE 3001

# Define how to start your backend application
CMD ["npm", "run", "start"]
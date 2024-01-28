# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app/frontend

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install frontend dependencies
RUN npm install

# Copy all frontend source code to the container
COPY . .

# Build the frontend application
RUN npm run build

# Expose the port on which your frontend runs (if needed)
EXPOSE 3000

# Define how to start your frontend application
CMD ["npm", "run", "start"]
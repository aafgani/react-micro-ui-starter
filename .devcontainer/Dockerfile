# Base image with Node.js 20 LTS
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# (Optional) Update npm to latest
RUN npm install -g npm@latest

# Use non-root user (best practice for dev security)
USER node

# Set default working directory inside the container
WORKDIR /workspace

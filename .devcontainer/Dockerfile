# Base image with Node.js 20 LTS
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Optional: install global tools
RUN npm install -g npm@latest

# Use non-root user (node is pre-configured)
USER node
WORKDIR /workspace

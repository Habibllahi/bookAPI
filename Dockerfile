# Test web app that returns the name of the host/pod/container servicing req
# Linux x64
FROM node:current-alpine

LABEL org.opencontainers.image.title="Book API" \
      org.opencontainers.image.description="Web server that allows CRUD operation for book entity" \
      org.opencontainers.image.authors="@javabeanstack"

# Create directory in container image for app code
RUN mkdir -p /usr/bookapi

# Create directory in container image for app code
RUN mkdir -p /usr/bookapi_volume

# Copy app code (.) to /usr/src/app in container image
COPY . /usr/bookapi

# Set working directory context
WORKDIR /usr/bookapi

# Install dependencies from packages.json
RUN npm install

# Bind to port
EXPOSE 3000

# Command for container to execute
CMD ["node","./build/app.js"]
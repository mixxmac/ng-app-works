FROM node:6-alpine

# Create a working directory
RUN mkdir -p /usr/src/app

# Install a simple node server
RUN npm install -g httpster

# Copy application files
COPY dist /usr/src/app

WORKDIR /usr/src/app

# Expose server default port
EXPOSE 3333

# Run the app
CMD ["httpster", "dist"]

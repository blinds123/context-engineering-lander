# Use nginx to serve static files
FROM nginx:alpine

# Copy the landing page files
COPY index.html /usr/share/nginx/html/
COPY src /usr/share/nginx/html/src/
COPY assets /usr/share/nginx/html/assets/

# Configure nginx for SPA
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
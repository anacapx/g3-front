FROM nginx:stable-alpine
#RUN mkdir g3-front
#COPY . g3-front
#RUN cd g3-front && npm install
#RUN npm run build
COPY build/ /usr/share/nginx/html
FROM node:18-alpine
WORKDIR /usr/src/app
COPY *.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "dev" ]

FROM node:16.13.1

WORKDIR /app

RUN npm i -g nodemon

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 8080


CMD ["npm", "start"]
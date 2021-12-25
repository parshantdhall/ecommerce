FROM node:16.13.1

WORKDIR /app

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install

COPY . .

ENV PORT=3001

EXPOSE 8080


CMD ["npm", "start"]
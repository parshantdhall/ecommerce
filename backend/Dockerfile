FROM node:16.13.1

# working directory in container
WORKDIR /app

# installing nodemon globally
RUN npm i -g nodemon

# copy package.json file as same name
COPY package.json package.json

COPY package-lock.json package-lock.json

# installing packages
RUN npm install

# copy all my files to container
COPY . .

# running the app once for intitializing everything like db
CMD ["npm", "start"]
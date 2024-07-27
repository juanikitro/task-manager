# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /task-manager

# Copying all the files in our project
COPY . .

RUN npm install

CMD [ "npm", "run", "dev"]

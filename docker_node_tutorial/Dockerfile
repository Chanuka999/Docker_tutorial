#get the base image
FROM node:20-alpine

#set the working directory
WORKDIR /app

#copy the package.json file
COPY package*.json ./

#install the dependency
RUN npm install

#copy the source code
COPY . .

#exporse the port
EXPOSE 5000

#start the application
CMD [ "npm", "run", "dev" ]
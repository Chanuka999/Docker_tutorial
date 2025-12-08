#base image
FROM node:20-alpine 

#working decrectory
WORKDIR /app

#copy the package.json file
COPY package.json .

#install the dependencies
RUN npm install 

#copy the files
COPY . .

#run the app
CMD [ "npm","start" ]


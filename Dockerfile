# base image
FROM node:20.14-slim

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .
RUN npm install

# start app
CMD ["npm", "run" ,"dev"]
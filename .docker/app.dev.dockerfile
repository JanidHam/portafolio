############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM mhart/alpine-node:10

# Información de Metadata
LABEL name="DEV - Website of JanidHam, this website is about me, my curriculim vitae and mys projects."
LABEL maintainer="janid.ham20@gmail.com"
LABEL version="1.0"

COPY ./package*.json /usr/src/

WORKDIR /usr/src

RUN npm install --only=production

COPY . /usr/src/

RUN npm install --only=development

EXPOSE 3000

CMD ["npm", "run", "dev"]

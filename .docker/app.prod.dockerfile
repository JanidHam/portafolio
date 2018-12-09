############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM mhart/alpine-node:10 as builder

COPY ./package*.json /usr/src/

WORKDIR /usr/src

RUN npm install --only=production

COPY [".", "/usr/src/"]

RUN npm install --only=development

RUN npm run build

# Productive image install node
FROM mhart/alpine-node:10

# Información de Metadata
LABEL name="Website of JanidHam, this website is about me, my curriculim vitae and mys projects."
LABEL maintainer="janid.ham20@gmail.com"
LABEL version="1.0"

COPY ./package*.json /usr/app/

WORKDIR /usr/app

RUN npm install --only=production

COPY --from=builder ["/usr/src/server.js", "/usr/app"]
COPY --from=builder ["/usr/src/src", "/usr/app/src"]

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server.js"]

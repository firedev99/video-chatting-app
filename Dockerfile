FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install 

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json

COPY components ./components
COPY hooks ./hooks
COPY lib ./lib
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY types ./types

CMD [ "yarn", "dev" ]
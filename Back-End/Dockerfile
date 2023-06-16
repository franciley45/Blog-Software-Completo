FROM node:14

WORKDIR /usr/local/app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["npm", "start"]


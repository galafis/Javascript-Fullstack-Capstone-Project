FROM node:18-alpine AS build

WORKDIR /home/node
COPY package*.json ./
RUN npm install --omit=dev


FROM node:18-alpine

WORKDIR /home/node
COPY . .
COPY --from=build  /home/node .

EXPOSE 9000
CMD ["npm", "run", "serve"]

FROM node:18-alpine AS react-build

WORKDIR /home/node/react
RUN mkdir -p ../giftwebsite/build/
COPY ./giftlink-frontend/package*.json ./
RUN npm install --omit=dev
COPY ./giftlink-frontend .
RUN npm run build


FROM node:18-alpine AS server-build

WORKDIR /home/node
COPY ./giftwebsite/package*.json .
RUN npm install --omit=dev


FROM node:18-alpine

WORKDIR /home/node
COPY ./giftwebsite/index.js .
COPY --from=server-build  /home/node .
RUN mkdir build
COPY --from=react-build  /home/node/react/build ./build


EXPOSE 9000
CMD ["node", "index.js"]

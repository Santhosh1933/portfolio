FROM node:current-alpine3.21 AS server


WORKDIR /app


COPY ./dist /app


RUN npm install -g serve


EXPOSE 5173


CMD ["serve", "-s", ".", "-l", "5173"]

FROM node:16
# 앱 디렉토리 생성
WORKDIR /usr/src/app
# 앱 의존성 설치
COPY package*.json ./

RUN npm install

EXPOSE 8000
CMD [ "node", "index.js" ]
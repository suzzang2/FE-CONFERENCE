// const express = require('express');
import express from 'express';
import guestbookRouter from './routes/guestbook.route.js' //js라고 꼭 붙여줘야함!!
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import path from "path"
import { fileURLToPath } from 'url';

dotenv.config(); // "환경변수들을 쓸 수 있게 해주겠다."

const app = express(); //express 모듈을 'app'에 할당

// 이걸 그대로 깃헙에 올리면 다 털리기 때문에, 환경변수로 관리해 주어야 한다.
const MONGODB_URI =  process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose
.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB 연결 성공"))
.catch((err) => console.error("MongoDB 연결 오류:", err));

// 미들웨어
// app.use((req, res, next) => { //미들웨어는 use() 메소드로 추가한다.
//    console.log(`Time: ${new Date().toISOString()}`); //현재 시간을 출력
//    next(); //다음 미들웨어로 넘어간다.
// });
// app.use(express.json()); //json 형식으로 데이터를 받기 위한 미들웨어

//ejs 사용을 위한 미들웨어.
app.set("view engine", "ejs");
app.use(express.json()); // json으로 언제 바꿔주는지 타이밍이 중요하다. 데이터가 아직 안 왔으면 못하기 때문.
app.use(express.urlencoded({ extended: true })); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

//라우터
app.get('/', (req, res) => { // '/' 경로로 들어오면
   res.send('This is a route directory.'); // 'Hello World!'를 보내준다.
});
app.use('/guestbook', guestbookRouter); // 만들어준 외부 라우터 파일을 사용

// 서버 실행
app.listen(PORT, () => { // 관습적으로 8080포트로 연다.
   console.log(`server is running on ${PORT}`);
});
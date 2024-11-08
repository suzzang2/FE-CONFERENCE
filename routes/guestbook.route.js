import express from 'express'
import {
   createEntry,
   getAllEntries,
   getEntryById,
   deleteEntry,
   editEntry
} from "../controllers/guestbook.controller.js"

const router = express.Router();

router.get('/', getAllEntries);
router.post('/', createEntry);
router.get('/:id', getEntryById);
router.get('/:id', deleteEntry);
router.get('/:id', editEntry);

//공통되는 '/guestbook'은 빼줘도 된다!!  app.js에서 한번에 처리해줬기 때문.
// router.get('/', (req, res) => {
//    //전체 방명록 조회
//    res.send('This is a guestbook directory.'); 
// });
// router.get('/:id', (req, res) => {
//    //특정 방명록 조회
// });
// router.post('/', (req, res) => {
//    //방명록 생성
// });
// router.delete('//:id', (req, res) => {
//    //방명록 삭제
// });
// router.patch('/:id', (req, res) => {
//    //방명록 삭제
// });

export default router; 
import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  return res.status(200).send();
});

export default router;

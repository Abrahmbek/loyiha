import {Router} from 'express';
const router = Router();


router.get('login', (req, res) =>{
    res.render('products');
});

router.get('/add', (req, res) =>{
    res.render('add');
});

export default router
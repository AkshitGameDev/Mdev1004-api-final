import express from 'express';
const router = express.Router();
import passport from 'passport';

import { DisplayMusiciansList, DisplayMusiciansById, AddMusicians, UpdateMusicians, DeleteMusicians } from '../Controllers/Musicians';


/* List of Musicians Routes (endpoints) */

/* GET Musicians List - fallback in case /list is not used */
router.get('/', (req, res, next) => {  DisplayMusiciansList(req, res, next); });

/* GET Musicians List. */
router.get('/list', (req, res, next) => {  DisplayMusiciansList(req, res, next); });

/* GET Musicians by ID. */
router.get('/find/:id', (req, res, next) => {  DisplayMusiciansById(req, res, next); });

/* Add Musicians */
router.post('/add', /* passport.authenticate('jwt', {session: false}), */ (req, res, next) => {  AddMusicians(req, res, next); });

/* Update Musicians */
router.put('/update/:id', /* passport.authenticate('jwt', {session: false}), */ (req, res, next) => {  UpdateMusicians(req, res, next); });

/* Delete Musicians */
router.delete('/delete/:id', /* passport.authenticate('jwt', {session: false}), */ (req, res, next) => {  DeleteMusicians(req, res, next); });


export default router;

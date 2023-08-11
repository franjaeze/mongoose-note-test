import { Router } from "express";
/* import NotesController from '../controllers/notesController.js' */
/* const notesController = require('../controllers/notesController.js'); */
import NotesController from "../controllers/notesController.js";

const notesController = new NotesController();


//Routes
const router = Router();

//solicitud de tipo get
router.get('/notes', notesController.listAll )

router.get('/notes/:id', notesController.search)

router.post('/notes',notesController.create)

router.patch('/notes/:id', notesController.udpate)

    router.delete('/notes/:id',notesController.delete)
 
export default router;

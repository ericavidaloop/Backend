import * as StudentControllers from '../controllers/StudentControllers.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentControllers.fetchStudent);
studentRoutes.post('/new', StudentControllers.createStudent);
studentRoutes.put('/edit/:studentId', StudentControllers.editStudent);
studentRoutes.delete('/delete/:studentId', StudentControllers.deleteStudent);

export default studentRoutes;
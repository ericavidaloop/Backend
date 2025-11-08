import * as StudentControllers from '../controllers/StudentControllers.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentControllers.fetchStudent);

export default studentRoutes;
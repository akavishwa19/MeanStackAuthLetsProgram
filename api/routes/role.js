import express from "express";
import Role from "../models/Role.js";
import {createRole, deleteRole, getAllRoles, updateRole} from "../controllers/role.controller.js";

const router=express.Router();

//create a new role in DB
router.post('/create',createRole);

//update role in DB
router.put('/update/:id',updateRole);

//get all roles from DB
router.get('/getAll',getAllRoles);

//delete role from DB
router.delete('/deleteRole/:id',deleteRole);

export default router;
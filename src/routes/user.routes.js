import { Router } from "express";
import { createUser, getAllUsers ,getUserById ,updateUser ,deleteUser} from "../controllers/user.controller.js";
const router = Router();

router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);

router.get("/getUserById/:id",getUserById);
router.patch("/updateUser/:id",updateUser);

router.delete("/deleteUser/:id",deleteUser);

export default router;

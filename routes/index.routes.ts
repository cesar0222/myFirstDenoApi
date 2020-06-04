import { Router } from "https://deno.land/x/oak/mod.ts";
import * as IndexCtrl from "../controllers/index.controllers.ts";


const router = new Router();

router.get("/",({response}) => {
    response.body = "Welcome to My Api"
});

router.get("/users",IndexCtrl.getUsers);

router.get("/users/:id",IndexCtrl.getUser);

router.post("/users",IndexCtrl.createUser);

router.put("/users/:id",IndexCtrl.updateUser);

router.delete("/users/:id",IndexCtrl.deleteUser);

export default router;
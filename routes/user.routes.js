import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ title: "POST user" }));

userRouter.put("/:id", (req, res) =>
  res.send({ title: "Update user with id" })
);

userRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete user with id" })
);

export default userRouter;

import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subscriptions" })
);

subscriptionRouter.get("/user/:id", authorize, getSubscriptions);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update subscription with id" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete subscription with id" })
);
subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "Get all subscriptions for user with id" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "Get all subscriptions for user with id" });
});

subscriptionRouter.delete("/user/:id", (req, res) => {
  res.send({ title: "Delete all subscriptions for user with id" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get all upcoming renewals" });
});
export default subscriptionRouter;

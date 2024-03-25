import express from "express";
const route = express.Router();
import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation,getConversation } from "../controller/conversation-controller.js";
import { newMessage } from "../controller/message-controller.js";

route.post("/add",addUser);
route.get("/users",getUsers);

route.post("/conversation/add",newConversation);
route.post("/conversation/get",getConversation);   //getting but payload has senderId and recieverId, hence we are posting from frontend

route.post("/message/add",newMessage);
export default route;
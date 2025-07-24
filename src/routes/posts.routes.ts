import { Router } from "express";
import { validateDataMiddleware } from "../middleware/validateData.middleware";
import { craetePostsSchema } from "../schemas/posts.schemas";
import { createPostController, getAllPostsController } from "../controllers/posts.controllers";
import { validateTokenmiddleware } from "../middleware/validatetoken.middleware";
import { getAllPostsService } from "../services/getAllPost.service";
import { getCommentsByIdPostService } from "../services/getcommentsbyisPostId.Service";
import { createCommentSchema } from "../schemas/comments.schemas";
import { createCommentController } from "../controllers/comments.controller";

export const postsRoutes:Router = Router()

postsRoutes.post("",validateDataMiddleware(craetePostsSchema),validateTokenmiddleware,createPostController)
postsRoutes.patch("/:id",validateTokenmiddleware)
postsRoutes.delete("/:id",validateTokenmiddleware)
postsRoutes.get("/user/:userid",)
postsRoutes.get("/:id")
postsRoutes.get("",getAllPostsController)

postsRoutes.get("/comment/:id",getCommentsByIdPostService)
postsRoutes.post("/comment/:id",validateTokenmiddleware,validateDataMiddleware(createCommentSchema),createCommentController)
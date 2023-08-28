const express =require("express");
const router = express.Router();

const {createComment} = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/PostController");
const{likePost,unlikePost} =require ("../controllers/LikeController")

router.post("/comments/create",createComment);
router.post("/post/create",createPost);
router.get("/Post/get",getAllPosts);
router.post("/post/like",likePost);
router.post("/post/unlike",unlikePost);


module.exports = router;

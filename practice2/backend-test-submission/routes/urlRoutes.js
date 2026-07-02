const express=require("express");
const router=express.Router();
const {createShortUrl, getOriginalUrl,getAllUrl}=require("../controller/urlController.js");

router.post("/shorten",createShortUrl);
router.get("/all",getAllUrl);
router.get("/:shortId",getOriginalUrl);

module.exports=router;
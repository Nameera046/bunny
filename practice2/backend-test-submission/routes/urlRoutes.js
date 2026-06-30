const express=require("express");
const router=express.Router();
const {createShortUrl, getOriginalUrl,getAllUrl}=require("../controller/urlController.js");

router.post("/shorten",createShrortUrl);
router.get("/:shortid",getOriginalUrl);
router.get("/all",getAllUrl);

module.exports=router;
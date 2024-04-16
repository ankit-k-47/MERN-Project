import { asyncHandler } from "../utils/asyncHandler.js";
const regUser = asyncHandler(async (req,res)=>{
    return res.status(200).json({
        messge:"ok"
    })
})

export {regUser};
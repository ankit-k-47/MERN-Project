import {v2 as cli} from "cloudinary";
import fs from "fs";
import {v2 as cloudinary} from 'cloudinary';
import { log } from "console";
          
cloudinary.config({ 
  cloud_name: process.env.CLI_CLOUD_NAME, 
  api_key: process.env.CLI_API_KEY, 
  api_secret: CLI_API_SEC 
});

const uploaddOncli= async (lcf)=>{
    try {
        if(!lcf)return null
        const res= await cli.uploader.upload(lcf,{
            resource_type:"auto"
        })
        console.log("file uploaded on cloudinary",res.url);
        return res
    } catch (error) {
        fs.unlinkSync(lcf)       
    }
}
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); }); 
export {uploaddOncli}
import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2cXpseGtndGVuY2hqd29kaGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTg0NDMsImV4cCI6MjA3MzQ5NDQ0M30.WFX0ANwfKnxXj4Ai0UQPpTcAZhVU1JJr8XphnPynhOA`;
const url = "https://kvqzlxkgtenchjwodhgj.supabase.co";

export default function uploadImage(file) {

    return new Promise((resolve, reject) => {
        if (file == null) {
            reject("file not added");
        }

        let fileName = file.name;
        const fileExtension = fileName.split(".")[fileName.split(".").length - 1];

        const timeStamp = new Date().getTime();

        // add new file name (timeStamp + extention)
        fileName = timeStamp + "." + fileExtension;

        const supabase = createClient(url, key);

        // images -> bucket name of supabase
        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch((error)=>{
            reject(error);
        })
    })
}
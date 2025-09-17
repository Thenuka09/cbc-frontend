import { createClient } from "@supabase/supabase-js";
import { useState } from "react"
import toast from "react-hot-toast";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2cXpseGtndGVuY2hqd29kaGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTg0NDMsImV4cCI6MjA3MzQ5NDQ0M30.WFX0ANwfKnxXj4Ai0UQPpTcAZhVU1JJr8XphnPynhOA`;
const url = "https://kvqzlxkgtenchjwodhgj.supabase.co";

export default function FileUploadPage() {

    const [file, setFile] = useState(null);

    function handleUpload(){
        if(file==null){
            toast.error("Please upload the file");
            return;
        }

        console.log(file);
        const supabase = createClient(url, key);

        // images -> bucket name of supabase
        supabase.storage.from("images").upload(file.name, file,{
            cacheControl: "3600",
            upsert: false
        }).then((res)=>{
            console.log(res);
        })

        const publicUrl = supabase.storage.from("images").getPublicUrl(file.name);
        console.log(publicUrl);
    }

    return (
        <div className="px-6">
            <h1>Upload the File</h1>
            <input 
                type="file" 
                onChange={(e)=>{
                    // console.log(e.target.files[0]);
                    setFile(e.target.files[0]);
                }}
                className="cursor-pointer" />

            <button className="border px-2 py-1 cursor-pointer" onClick={handleUpload}>Upload File</button>
        </div>
    )
}
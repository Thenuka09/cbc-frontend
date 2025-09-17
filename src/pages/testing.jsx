import { useState } from "react"
import uploadImage from "../utils/upload-images";

export default function FileUploadPage() {

    const [file, setFile] = useState(null);

    async function handleUpload(){
        try {
            const publicUrl = await uploadImage(file);
            console.log(publicUrl);
        } catch (error) {
            console.error("Error get the Url, ", error)
        }
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
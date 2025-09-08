import { useState } from "react"

export default function Counter() {

  const [count, setcount] = useState(0);
  const [text, setText] = useState("Topic");

  function decrease(){
    if(count > 0){
      setcount(count - 1);
    }
  }

  function increase(){
    if(count < 10){
      setcount(count + 1);
    }
  }

  function changeTopic(value){
    setText(value);
  }

  return (
    <>
      <div className="flex justify-center items-center border p-10 h-[250px] w-[300px] relative">
        <h1 className="absolute top-0">{text}</h1>
        <button className="text-[24px] mr-5 font-semibold bg-white text-black p-2 rounded-full cursor-pointer" onClick={decrease}>
          -
        </button>
        <div>
          <span className="border p-5">{count}</span>
        </div>
        <button
          className="text-[24px] ml-5 font-semibold bg-white text-black p-2 rounded-full cursor-pointer" onClick={increase}>
          +
        </button>

        <div className="absolute bottom-0 mb-2">
            <button className="bg-white text-black px-2 mr-1 rounded-lg cursor-pointer" onClick={()=> {changeTopic("Student")}}>Student</button>
            <button className="bg-white text-black px-2 mr-1 rounded-lg cursor-pointer" onClick={()=> {changeTopic("Teacher")}}>Teacher</button>
            <button className="bg-white text-black px-2 rounded-lg cursor-pointer" onClick={()=> {changeTopic("Admin")}}>Admin</button>
        </div>
      </div>
    </>
  );
}

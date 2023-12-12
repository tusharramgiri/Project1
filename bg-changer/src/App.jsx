import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={()=>setColor("red")}
        className="bg-red-500 px-3 py-2 rounded-full text-white" >Red</button>
        <button
        onClick={()=>setColor("green")}
        className="bg-green-500 px-3 py-2 rounded-full text-white" >Green</button>
        <button
        onClick={()=>setColor("blue")}
        className="bg-blue-500 px-3 py-2 rounded-full text-white" >Blue</button>
        <button
        onClick={()=>setColor("violet")}
        className="bg-violet-500 px-3 py-2 rounded-full text-white" >Violet</button>
        <button
        onClick={()=>setColor("yellow")}
        className="bg-yellow-500 px-3 py-2 rounded-full text-white" >Yellow</button>
        <button
        onClick={()=>setColor("black")}
        className="bg-black px-3 py-2 rounded-full text-white" >Black</button>
        <button
        onClick={()=>setColor("orange")}
        className="bg-orange-500 px-3 py-2 rounded-full text-white" >Orange</button>
        </div>
      </div>
    </div>
  
  )
}

export default App

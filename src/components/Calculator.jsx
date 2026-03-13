import {useState} from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import {evaluateExpression} from "../utils/parser";
import * as math from "../utils/math";

export default function Calculator(){

const [expression,setExpression] = useState("");
const [history,setHistory] = useState([]);
const [degMode,setDegMode] = useState(true);
const [memory,setMemory] = useState(0);

const append = (v)=>{
 setExpression(prev => prev + v)
}

const backspace = () => {
  setExpression(prev => prev.slice(0, -1));
};

const clear = ()=> setExpression("");

const calculate = ()=>{

 try{

 const result = evaluateExpression(expression,degMode)

 setHistory([
  expression + " = " + result,
  ...history
 ])

 setExpression(result.toString())

 }catch{
 setExpression("Error")
 }

}

const scientific = (type)=>{

 const value = parseFloat(expression)

 switch(type){

 case "sin":
 setExpression(math.sin(value,degMode).toString())
 break

 case "cos":
 setExpression(math.cos(value,degMode).toString())
 break

 case "tan":
 setExpression(math.tan(value,degMode).toString())
 break

 case "asin":
 setExpression(math.asin(value,degMode).toString())
 break

 case "acos":
 setExpression(math.acos(value,degMode).toString())
 break

 case "atan":
 setExpression(math.atan(value,degMode).toString())
 break

 case "sqrt":
 setExpression(Math.sqrt(value).toString())
 break

 case "square":
 setExpression((value**2).toString())
 break

 case "cube":
 setExpression((value**3).toString())
 break

 case "log":
 setExpression(Math.log10(value).toString())
 break

 case "ln":
 setExpression(Math.log(value).toString())
 break

 case "pi":
 setExpression(Math.PI.toString())
 break

 case "e":
 setExpression(Math.E.toString())
 break

 case "fact":

 let f=1
 for(let i=1;i<=value;i++) f*=i
 setExpression(f.toString())

 break

 }

}

const memoryAdd = ()=>{
 setMemory(memory + parseFloat(expression))
}

const memorySub = ()=>{
 setMemory(memory - parseFloat(expression))
}

const memoryRecall = ()=>{
 setExpression(memory.toString())
}

const memoryClear = ()=>{
 setMemory(0)
}

return(

<div className="calculator">

<Display value={expression}/>

<Buttons
append={append}
calculate={calculate}
clear={clear}
scientific={scientific}
degMode={degMode}
setDegMode={setDegMode}
memoryAdd={memoryAdd}
memorySub={memorySub}
memoryRecall={memoryRecall}
memoryClear={memoryClear}
backspace={backspace}
/>

<div className="history">

<h4>History</h4>

{history.map((h,i)=>(
<div key={i}>{h}</div>
))}

</div>

</div>

)

}
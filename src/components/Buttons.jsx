export default function Buttons(props){

const b = (label,action)=>(
<button onClick={action}>{label}</button>
)

return(

<div className="buttons">

{b("MC",props.memoryClear)}
{b("MR",props.memoryRecall)}
{b("M+",props.memoryAdd)}
{b("M-",props.memorySub)}
{b(props.degMode?"DEG":"RAD",()=>props.setDegMode(!props.degMode))}

{b("sin",()=>props.scientific("sin"))}
{b("cos",()=>props.scientific("cos"))}
{b("tan",()=>props.scientific("tan"))}
{b("log",()=>props.scientific("log"))}
{b("ln",()=>props.scientific("ln"))}

{b("sin⁻¹",()=>props.scientific("asin"))}
{b("cos⁻¹",()=>props.scientific("acos"))}
{b("tan⁻¹",()=>props.scientific("atan"))}
{b("√",()=>props.scientific("sqrt"))}
{b("n!",()=>props.scientific("fact"))}

{b("x²",()=>props.scientific("square"))}
{b("x³",()=>props.scientific("cube"))}
{b("π",()=>props.scientific("pi"))}
{b("e",()=>props.scientific("e"))}
{b("C",props.clear)}

{b("7",()=>props.append("7"))}
{b("8",()=>props.append("8"))}
{b("9",()=>props.append("9"))}
{b("/",()=>props.append("/"))}
{b("*",()=>props.append("*"))}

{b("4",()=>props.append("4"))}
{b("5",()=>props.append("5"))}
{b("6",()=>props.append("6"))}
{b("-",()=>props.append("-"))}
{b("+",()=>props.append("+"))}

{b("1",()=>props.append("1"))}
{b("2",()=>props.append("2"))}
{b("3",()=>props.append("3"))}
{b("(",()=>props.append("("))}
{b(")",()=>props.append(")"))}

{b("0",()=>props.append("0"))}
{b(".",()=>props.append("."))}
{b("=",props.calculate)}
{b("DEL", props.backspace)}

</div>

)

}
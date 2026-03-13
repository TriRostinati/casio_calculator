export function evaluateExpression(expr){

try{

return Function('"use strict";return ('+expr+')')()

}catch{

throw new Error()

}

}
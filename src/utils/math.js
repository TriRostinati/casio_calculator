const toRad = (v)=> v * Math.PI / 180
const toDeg = (v)=> v * 180 / Math.PI

export const sin = (v,deg)=> Math.sin(deg?toRad(v):v)
export const cos = (v,deg)=> Math.cos(deg?toRad(v):v)
export const tan = (v,deg)=> Math.tan(deg?toRad(v):v)

export const asin = (v,deg)=> deg?toDeg(Math.asin(v)):Math.asin(v)
export const acos = (v,deg)=> deg?toDeg(Math.acos(v)):Math.acos(v)
export const atan = (v,deg)=> deg?toDeg(Math.atan(v)):Math.atan(v)
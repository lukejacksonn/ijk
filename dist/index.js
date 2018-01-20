var r=function(e){return!!e&&("object"!=typeof e[1]||Array.isArray(e[1])?r([e[0],{},e[1]]):{name:e[0],props:e[1],children:Array.isArray(e[2])?e[2].map(r).filter(Boolean):e[2]+""})},e=function(r){return!!r&&("object"!=typeof r[1]||Array.isArray(r[1])?e([r[0],{},r[1]]):{nodeName:r[0],attributes:r[1],children:Array.isArray(r[2])?r[2].map(e).filter(Boolean):r[2]+""})};export{r as h,e as p};
//# sourceMappingURL=index.js.map
p

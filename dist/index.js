var r=function(r,e){return e?"string"==typeof e[0]?r.concat([e]):r.concat(e):r},e=function(t){return!!t&&("object"!=typeof t[1]||Array.isArray(t[1])?e([t[0],{},t[1]||""]):{name:t[0],props:t[1],children:Array.isArray(t[2])?t[2].reduce(r,[]).map(e):t[2]+""})},t=function(e){return!!e&&("object"!=typeof e[1]||Array.isArray(e[1])?t([e[0],{},e[1]||""]):{nodeName:e[0],attributes:e[1],children:Array.isArray(e[2])?e[2].reduce(r,[]).map(t):e[2]+""})};export{e as h,t as p};
//# sourceMappingURL=index.js.map
p

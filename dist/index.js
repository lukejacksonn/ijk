var r=function(a){return!!a&&("object"!=typeof a[1]||Array.isArray(a[1])?r([a[0],{},a[1]]):{name:a[0],props:a[1],children:Array.isArray(a[2])?a[2].map(r).filter(Boolean):a[2]+""})};export{r as h};
//# sourceMappingURL=index.js.map

export const lagrange = (arr, x) => {
  var n = 0;
  for(let i=0; i<arr.length; i++) {
    const curr = arr[i];
    const {x:currX, y: currY} = curr;
    var a = 1;
    for(let j=0; j<arr.length; j++) {
      if(i === j) continue;
      const {x: xj, y: yj} = arr[j];
      a *= (x-xj)/(currX-xj);
    }
    a = a*currY;
    n += a;
  }
  return n;
};

export const higlightHashTags = (textGameObj, text, style) => {
  const {originalColor, higlightedColor} = style;
  const hashRegExp = /#[A-zА-я_]*/g;
  let res;
  while(res = hashRegExp.exec(text)) {
    const {index, 0: group} = res;

    textGameObj.addColor(higlightedColor, index);
    textGameObj.addColor(originalColor, index + group.length);
  }
};

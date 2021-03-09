module.exports = function check(str, bracketsConfig) {
  let elem = []
  let closeBracket = {}
  // console.log(bracketsConfig)
  for(var j = 0; j < bracketsConfig.length; j++) {
    closeBracket[bracketsConfig[j][0]] = bracketsConfig[j][1]
    // console.log(closeBracket)
  }
  
  // console.log(str)
  elem.push(str.charAt(0))
  // console.log(elem)
  for(var i = 1; i < str.length; i++) {
    if(str.charAt(i) === closeBracket[elem[elem.length - 1]]) {
      elem.pop()
    } else {
      elem.push(str.charAt(i)) 
    }
  }
  if (elem.length > 0) {return false}
  return true
};
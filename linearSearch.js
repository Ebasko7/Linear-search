function linearSearch(searchTerm, arr) {
  
  for(let i = 0; i<arr.length; i++){
    if (arr[i] === searchTerm) {
      return i
    }
  }
  return undefined
}

function globalLinearSearch(searchTerm, arr) {
  let occurrences = []

  for(let i = 0; i<arr.length; i++){
    if (arr[i] === searchTerm) {
      occurrences.push(i)
    }
  }
  if (occurrences.length >= 1){
      return occurrences
    }
  return undefined
}
module.exports = { linearSearch, globalLinearSearch };



console.log(globalLinearSearch('a', ["b", "a", "n", "a", "n", "a", "s"]))
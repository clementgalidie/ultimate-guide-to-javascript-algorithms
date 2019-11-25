// USING FOR LOOP
function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
                result++
            }
        }
        return result
    } else {
        throw new Error('Strings do not have equal length')
    }
}

// USING FOREACH LOOP
function hammingDistanceForEach(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    console.error('The two strings should have the same length.')
    return
  }

  let diffCounter = 0
  const arrStringA = [...stringA.toLowerCase()]
  const arrStringB = [...stringB.toLowerCase()]

  arrStringA.forEach((value, index) => {
    if (arrStringA[index] !== arrStringB[index]) {
      diffCounter++
    }
  })

  return diffCounter
}

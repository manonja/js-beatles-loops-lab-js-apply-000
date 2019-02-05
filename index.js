// add solution here

function theBeatlesPlay(musicians, instruments) {
  const play = []
  
  for (var i = 0; i < musicians.length; i++) {
    play.push(musicians[i] + " plays " + instruments[i])
  }
  
  return play

}

function johnLennonFacts(array) {
  var exclamation = []
  for (var i = 0; i < array.length; i++) {
    exclamation.push(array[i] + "!!!")
  }
  
  return exclamation
 
}

function iLoveTheBeatles(num) {
  var sentence = []
  var i = 0
  do {
    sentence.push("I love the Beatles!")
    i++
    
  } while (num < 15) {
    sentence.push("I love the Beatles!")
  }
  return sentence
}



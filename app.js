// 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.
// 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum]:*.
// Replacing [smallestNum] 
// Hint - use a template literal for the prompt message.
// 3. Ensure that the `getGuess` method returns a value that:
//     - Is a *number*, not a *string*.
//     - Is between `smallestNum` and `biggestNum`, inclusive.
//     - Hints:
//         - This is a great use case for a `while` loop.
//         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
// 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//     - Hint: this is an excellent use for a while loop (or even a do...while loop!)
// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//     - Hints:
//         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
//         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//         - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.



const game = {
  title: 'Guess the Number!',
  biggestNum: 25,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    do{
      this.prevGuesses.push(this.getGuess())
      this.render()
    } while (
      this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum
      )
},
getGuess(){
  let currentGuess = parseInt( prompt (`guess a number thats between ${this.smallestNum} and ${this.biggestNum} to play!`))
  while (
      currentGuess > this.biggestNum || currentGuess < this.smallestNum || isNaN(currentGuess)) {
        currentGuess = parseInt(
          prompt (` it has to be a number between ${this.smallestNum} and ${this.biggestNum}. Please try again`)
        )
}
return currentGuess

},

render(){
  if (this.prevGuesses[this.prevGuesses.length-1] < this.secretNum){
    alert(`sad:( your number was too low! so far you've tried ${this.prevGuesses.join()}`)
  } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum)
  {
    alert(`sad :( your number was too high! so far you've tried ${this.prevGuesses.join()}`)
} else {

    alert(` I'm proud of you :'), only took you ${this.prevGuesses.join()} tries!`)
   }
 }
}

game.play()

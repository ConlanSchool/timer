const args = process.argv.slice(2);
const sortArgs = args
  .map(Number) //removes non numbers
  .filter((num) => num > 0) //removes negatives
  .sort((a, b) => a - b); //sorts in ascending order

for (let i = 0; i < sortArgs.length; i++) {
  setTimeout(() => {
    process.stdout.write("\x07!\n"); //(\x07)sound effect special character
  }, sortArgs[i] * 1000); //converts seconds to milliseconds
}

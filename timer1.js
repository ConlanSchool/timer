const args = process.argv.slice(2);
const sortArgs = args
  .map(Number)
  .filter((num) => num > 0)
  .sort((a, b) => a - b);

for (let i = 0; i < sortArgs.length; i++) {
  if (sortArgs[i] < 0) {
    sortArgs.splice(i, 1);
  }

  setTimeout(() => {
    process.stdout.write("\x07!\n"); //(\x07)sound effect special character
  }, sortArgs[i] * 1000); //converts seconds to milliseconds
}

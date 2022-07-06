let userInput: unknown; // Similar to 'any', but is more restrictive
let userName: string;

userInput = 5;
userInput = 'Max';

// never type make sure that function do not return any value, including undefined value
function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code
  }
}

generateError('Critical error have occurred', 500);
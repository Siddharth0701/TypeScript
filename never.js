function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var errorreport = generateError('An error occurred!', 500);
console.log(errorreport);

"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const errorreport = generateError('An error occurred!', 500);
console.log(errorreport);
//# sourceMappingURL=never.js.map
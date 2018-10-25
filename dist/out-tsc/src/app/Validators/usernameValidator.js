export default function (control) {
    var compareRegExp = /^[A-z](?:[a-z]+)?(?: [A-z](?:[a-z]+)?)?$/;
    return new Promise(function (resolve) {
        setTimeout(function () {
            if (!(compareRegExp.test(control.value))) {
                resolve({
                    'incorrectName': true
                });
            }
            else {
                resolve(null);
            }
        }, 3000);
    });
}
//# sourceMappingURL=usernameValidator.js.map
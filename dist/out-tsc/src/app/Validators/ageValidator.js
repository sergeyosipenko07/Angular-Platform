export default function (control) {
    var minAge = 18;
    var maxAge = 65;
    if (control.value) {
        var value = Number(control.value);
        if (!isNaN(value)) {
            if (value < minAge || value > maxAge || Number.isInteger(value) === false) {
                return {
                    'invalidAge': true
                };
            }
        }
        else {
            return {
                'incorrectAge': true
            };
        }
    }
    return null;
}
//# sourceMappingURL=ageValidator.js.map
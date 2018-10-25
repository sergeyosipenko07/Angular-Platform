export default (function (words) {
    if (typeof words === 'string') {
        var name_1 = words.split(' ');
        if (name_1.length === 2) {
            return name_1[0].charAt(0).toUpperCase() + name_1[0].slice(1) + ' ' + name_1[1].charAt(0).toUpperCase() + name_1[1].slice(1);
        }
        else {
            return name_1[0].charAt(0).toUpperCase() + words.slice(1);
        }
    }
    return words;
});
//# sourceMappingURL=toUpperCase.js.map
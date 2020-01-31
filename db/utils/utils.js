var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.formatDates = function (list) {
    return list.map(function (singleObj) {
        var newObj = __assign({}, singleObj);
        var newDate = new Date(newObj.date_posted);
        newObj.date_posted = newDate;
        return newObj;
    });
};

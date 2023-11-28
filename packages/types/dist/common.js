"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROMOTION_VALUE_TYPE = exports.REFUND_STATUS = exports.USER_TYPE = exports.SORT_NUMBER_VALUE = exports.SORT_ORDER = exports.SORT_TYPE = exports.EIsoCode = void 0;
var EIsoCode;
(function (EIsoCode) {
    EIsoCode["VN"] = "VN";
    EIsoCode["TH"] = "TH";
    EIsoCode["ID"] = "ID";
})(EIsoCode || (exports.EIsoCode = EIsoCode = {}));
var SORT_TYPE;
(function (SORT_TYPE) {
    SORT_TYPE["ASCEND"] = "ascend";
    SORT_TYPE["DESCEND"] = "descend";
})(SORT_TYPE || (exports.SORT_TYPE = SORT_TYPE = {}));
var SORT_ORDER;
(function (SORT_ORDER) {
    SORT_ORDER["ASC"] = "asc";
    SORT_ORDER["DESC"] = "desc";
})(SORT_ORDER || (exports.SORT_ORDER = SORT_ORDER = {}));
var SORT_NUMBER_VALUE;
(function (SORT_NUMBER_VALUE) {
    SORT_NUMBER_VALUE[SORT_NUMBER_VALUE["ASCEND"] = 1] = "ASCEND";
    SORT_NUMBER_VALUE[SORT_NUMBER_VALUE["DESCEND"] = -1] = "DESCEND";
})(SORT_NUMBER_VALUE || (exports.SORT_NUMBER_VALUE = SORT_NUMBER_VALUE = {}));
var USER_TYPE;
(function (USER_TYPE) {
    USER_TYPE["ASKER"] = "ASKER";
    USER_TYPE["TASKER"] = "TASKER";
})(USER_TYPE || (exports.USER_TYPE = USER_TYPE = {}));
var REFUND_STATUS;
(function (REFUND_STATUS) {
    REFUND_STATUS["PAID"] = "PAID";
    REFUND_STATUS["ERROR"] = "ERROR";
    REFUND_STATUS["NEW"] = "NEW";
    REFUND_STATUS["PROCESSING"] = "PROCESSING";
    REFUND_STATUS["CANCELED"] = "CANCELED";
})(REFUND_STATUS || (exports.REFUND_STATUS = REFUND_STATUS = {}));
var PROMOTION_VALUE_TYPE;
(function (PROMOTION_VALUE_TYPE) {
    PROMOTION_VALUE_TYPE["MONEY"] = "MONEY";
    PROMOTION_VALUE_TYPE["PERCENTAGE"] = "PERCENTAGE";
})(PROMOTION_VALUE_TYPE || (exports.PROMOTION_VALUE_TYPE = PROMOTION_VALUE_TYPE = {}));

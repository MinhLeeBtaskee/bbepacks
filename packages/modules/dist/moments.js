"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_timezone_1 = __importDefault(require("moment-timezone"));
require("moment/locale/id");
require("moment/locale/ko");
require("moment/locale/th");
require("moment/locale/vi");
// List timezone moment
// https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a
// Fix error timezone when user # GMT+07
// set GMT +07
moment_timezone_1.default.tz.setDefault('Asia/Jakarta');
moment_timezone_1.default.locale('en');
exports.default = moment_timezone_1.default;

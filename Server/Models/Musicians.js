"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let MusiciansSchema = new mongoose_1.Schema({
    musiciansID: String,
    fullName: String,
    genres: String,
    instruments: String,
    labels: String,
    born: String,
    yearsActive: String,
    spouses: String,
    children: String,
    relatives: String,
    notableWorks: String,
    imageURL: String
});
let Musicians = (0, mongoose_1.model)('Musicians', MusiciansSchema);
exports.default = Musicians;
//# sourceMappingURL=Musicians.js.map
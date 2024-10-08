"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Musicians_1 = require("../Controllers/Musicians");
router.get('/', (req, res, next) => { (0, Musicians_1.DisplayMusiciansList)(req, res, next); });
router.get('/list', (req, res, next) => { (0, Musicians_1.DisplayMusiciansList)(req, res, next); });
router.get('/find/:id', (req, res, next) => { (0, Musicians_1.DisplayMusiciansById)(req, res, next); });
router.post('/add', (req, res, next) => { (0, Musicians_1.AddMusicians)(req, res, next); });
router.put('/update/:id', (req, res, next) => { (0, Musicians_1.UpdateMusicians)(req, res, next); });
router.delete('/delete/:id', (req, res, next) => { (0, Musicians_1.DeleteMusicians)(req, res, next); });
exports.default = router;
//# sourceMappingURL=Musicians.js.map
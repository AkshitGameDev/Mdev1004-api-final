"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMusiciansList = DisplayMusiciansList;
exports.DisplayMusiciansById = DisplayMusiciansById;
exports.AddMusicians = AddMusicians;
exports.UpdateMusicians = UpdateMusicians;
exports.DeleteMusicians = DeleteMusicians;
const Musicians_1 = __importDefault(require("../Models/Musicians"));
function DisplayMusiciansList(req, res, next) {
    Musicians_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Musicians List Retrieved and Displayed", data: data, token: null });
    })
        .catch((err) => {
        console.error(err);
    });
}
function DisplayMusiciansById(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrieve a Musicians", data: null, token: null });
    }
    else {
        Musicians_1.default.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "One Musicians Retrieved and Displayed", data: data, token: null });
            }
            else {
                res.status(404).json({ success: false, msg: "Musicians not found", data: null, token: null });
            }
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
function AddMusicians(req, res, next) {
    let _musicians = new Musicians_1.default({
        musiciansID: req.body.musiciansID,
        fullName: req.body.fullName,
        genres: req.body.genres,
        instruments: req.body.instruments,
        labels: req.body.labels,
        born: req.body.born,
        yearsActive: req.body.yearsActive,
        spouses: req.body.spouses,
        children: req.body.children,
        relatives: req.body.relatives,
        notableWorks: req.body.notableWorks,
        imageURL: req.body.imageURL
    });
    Musicians_1.default.create(_musicians)
        .then(() => {
        res.status(200).json({ success: true, msg: "Musicians added", data: Musicians_1.default, token: null });
    })
        .catch((err) => {
        console.error(err);
    });
}
function UpdateMusicians(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a Musicians", data: null, token: null });
    }
    else {
        let musiciansToUpdate = new Musicians_1.default({
            musiciansID: req.body.musiciansID,
            fullName: req.body.fullName,
            genres: req.body.genres,
            instruments: req.body.instruments,
            labels: req.body.labels,
            born: req.body.born,
            yearsActive: req.body.yearsActive,
            spouses: req.body.spouses,
            children: req.body.children,
            relatives: req.body.relatives,
            notableWorks: req.body.notableWorks,
            imageURL: req.body.imageURL
        });
        console.log(musiciansToUpdate);
        Musicians_1.default.updateOne({ _id: id }, musiciansToUpdate)
            .then(() => {
            res.status(200).json({ success: true, msg: "Musicians updated", data: musiciansToUpdate, token: null });
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
function DeleteMusicians(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete a Musicians", data: null, token: null });
    }
    else {
        Musicians_1.default.deleteOne({ _id: id })
            .then(() => {
            res.status(200).json({ success: true, msg: "Musicians deleted", data: id, token: null });
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
//# sourceMappingURL=Musicians.js.map
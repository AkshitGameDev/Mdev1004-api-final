import { Request, Response, NextFunction } from 'express';

import musicians from '../Models/Musicians';
import { SanitizeArray } from '../Util';

/**
 * This function displays the Musicians list in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMusiciansList(req: Request, res: Response, next: NextFunction): void
{
    musicians.find({})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "Musicians List Retrieved and Displayed", data: data, token: null})
    })
    .catch((err) =>
    {
        console.error(err);
    })
}

/**
 * This function displays a single Musicians by ID in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMusiciansById(req: Request, res: Response, next: NextFunction) : void
{
    // endpoint should be /api/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to retrieve a Musicians", data: null, token: null});
    }
    else
    {
        musicians.findById({_id: id})
        .then((data) =>
        {
            if(data)
            {
                res.status(200).json({success: true, msg: "One Musicians Retrieved and Displayed", data: data, token: null})
            }
            else
            {
                res.status(404).json({success: false, msg: "Musicians not found", data: null, token: null});
            }
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}

/**
 * This function adds a Musicians to the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function AddMusicians(req: Request, res:Response, next: NextFunction): void
{
    
    let _musicians = new musicians({
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
 
     musicians.create(_musicians)
     .then(() =>
     {
        res.status(200).json({success: true, msg: "Musicians added", data: musicians, token: null});
     })
     .catch((err) =>
     {
        console.error(err);
     })
}

/**
 * This function updates a Musicians in the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function UpdateMusicians(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/update/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to update a Musicians", data: null, token: null});
    }
    else
    {

        let musiciansToUpdate = new musicians({
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

        musicians.updateOne({_id: id}, musiciansToUpdate)
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Musicians updated", data: musiciansToUpdate, token: null});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}

/**
 * This function deletes a Musicians from the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DeleteMusicians(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/delete/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to delete a Musicians", data: null, token: null});
    }
    else
    {
        musicians.deleteOne({_id: id})
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Musicians deleted", data: id, token: null});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}
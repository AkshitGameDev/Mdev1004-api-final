import { Collection, Schema, model } from 'mongoose';

// Musicians Interface - defines the structure of a Musicians document
export interface IMusicians
{
    musiciansID: string,
    fullName: string,
    genres: string,
    instruments: string,
    labels: string,
    born: string,
    yearsActive: string,
    spouses: string,
    children: string,
    relatives: string,
    notableWorks: string,
    imageURL: string
}

// Musicians Schema - defines the structure of a Musicians document
let MusiciansSchema = new Schema<IMusicians> 
({
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

let Musicians = model<IMusicians>('Musicians', MusiciansSchema);

export default Musicians;





// import { Collection, Schema, model } from 'mongoose';

// // Movie Interface - defines the structure of a movie document
// export interface IMovie 
// {
//     movieID: string,
//     title: string,
//     studio: string,
//     genres: string[],
//     directors: string[],
//     writers: string[],
//     actors: string[],
//     year: number,
//     length: number,
//     shortDescription: string,
//     mpaRating: string,
//     criticsRating: number
// }

// // Movie Schema - defines the structure of a movie document
// let movieSchema = new Schema<IMovie>
// ({
//     movieID: String,
//     title: String,
//     studio: String,
//     genres: [String],
//     directors: [String],
//     writers: [String],
//     actors: [String],
//     year: Number,
//     length: Number,
//     shortDescription: String,
//     mpaRating: String,
//     criticsRating: Number
// });

// let Movie = model<IMovie>('Movie', movieSchema);

// export default Movie;
import Listing from "../models/Listing.model.js"
import { errorHandler } from "../utils/error.js";

export const createListing = async(req, res, next)=>{
    try {
        const listing = await Listing.create(req.body);
        console.log(req.body);
        return res.status(201).json(listing);

    } catch (error) {
        next(error)
    }
}

export const deleteListing = async(req, res, next)=>{
    const listing = await Listing.findById(req.params.id);

    if(!listing){
        return next(errorHandler(401, "Listing not found !"));
    }

    if(req.user.id !== listing.userRefs){
       return next(errorHandler(401, 'You can only delete Your own listings !'));
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json("Listing has been deleted !");
    } catch (error) {
        next(error);
    }

}

export const updateListing = async(req, res, next)=>{

const listing = await Listing.findById(req.params.id);
if(!listing){
    return next(errorHandler(404, 'Listing not found !'));
}
    if(req.user.id !== listing.userRefs){
        return next(errorHandler(401, 'You can only update your own listing !'));
    }
    try {

       const updated =  await Listing.findByIdAndUpdate(req.params.id, req.body, {new: true});

       res.status(200).json(updated)


    } catch (error) {
        next(error)
    }
}

export const getListing = async(req, res, next)=>{
    try {
        const listing = await Listing.findById(req.params.id);
        if(!listing){
            return next(errorHandler(404, 'Listing not found !'));
        }

        res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
}
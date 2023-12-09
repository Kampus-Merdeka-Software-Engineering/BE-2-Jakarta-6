import express, { request, response } from "express";
import { createPackage, readPackages, getPackages } from "../services/Packages.js";

export const getPackagesByDetails = async (request, response) => {
    
    const id = request.params.id;
    const packagesList = await readPackages(id);

    response.status(200).json({
        data: packagesList,
        massage: "Succesfully to get data!"
    });
};

export const postPackageItem = async (request, response) => {
    const { island_name, island_images1, island_images2, island_images3, island_images4, island_images5, island_activity, island_price } = request.body;

    const packages = await createPackage(island_name, island_images1, island_images2, island_images3, island_images4, island_images5, island_activity, island_price);

    response.json(packages);
};

export const getAllPackages = async(request, response) => {
    response.json({
        data: await getPackages()
    });
}
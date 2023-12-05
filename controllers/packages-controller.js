// export const getPackagesByDetails = (request, response) => {
//     response.status(200).json({
//         data: [
//         {
//             id: 1,
//             island_name: "Pulau Tidung",
//             island_images1: "https://source.unsplash.com/random/?Island",
//             island_images2: "https://source.unsplash.com/random/?Island",
//             island_images3: "https://source.unsplash.com/random/?Island", 
//             island_images4: "https://source.unsplash.com/random/?Island", 
//             island_images5: "https://source.unsplash.com/random/?Island", 
//             island_activity:"Snorkling",
//             island_price: "Rp 150.000",
//             },
//         ],
//         massage: "Data Succesfully Retrieved",
//     });
// };
import express, { request, response } from "express";
// import { islands } from "../constants/islands.js";
import { createPackage, readPackages, getPackages } from "../services/Packages.js";

export const getPackagesByDetails = async (request, response) => {
    
    const id = request.params.id;
    // response.send(id);
    const packagesList = await readPackages(id);

//     console.log({packagesList});

// // using public folder
//     // response.status(200).json({
//     //     data: packagesList.map((data) => ({
//     //         ...data.dataValues,
//     //         island_images1: `http://localhost:3000${data.dataValues.island_images1}`,
//     //         island_images2: `http://localhost:3000${data.dataValues.island_images2}`,
//     //         island_images3: `http://localhost:3000${data.dataValues.island_images3}`,
//     //         island_images4: `http://localhost:3000${data.dataValues.island_images4}`,
//     //         island_images5: `http://localhost:3000${data.dataValues.island_images5}`,
//     //       })),
    
    response.status(200).json({
        data: packagesList,
        massage: "Succesfully to get data!"
    });
};

// export const getPackagesById = (req, res) => {
//     for (let index = 0; index < packagesList.length; index++) {
//         const element = packagesList[index];
    
//         if (element.id == req.params.id) {
//             return res.json(element)
//         };
//     };
//     return res.json(null);

    // request parameter query
    //     const islandId = request.query.islandId;
    //     const islandData = packagesList[islandId];

    //     if(!islandData) {
    //     response.status(404).json({
    //         massage: "Island Not Found",
    //     });
    //     return;
    // };

        // response.json({
        //     packagesList: packagesList[islandId],
        // });
    // };

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
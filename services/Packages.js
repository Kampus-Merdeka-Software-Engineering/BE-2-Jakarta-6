import Packages from "../models/packages-model.js";

export const readPackages = async (id) => {
    return await Packages.findByPk(id);
};

export const getPackages = async() => {
    return await Packages.findAll({});
};

export const createPackage = async (island_name, island_images1, island_images2, island_images3, island_images4, island_images5, island_activity, island_price) => {
    return await Packages.create({
        island_name,
        island_images1,
        island_images2,
        island_images3,
        island_images4,
        island_images5,
        island_activity,
        island_price
    });
};
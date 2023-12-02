import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Packages = sequelize.define("Packages", {
    island_name: DataTypes.STRING,
    island_images1: DataTypes.STRING,
    island_images2: DataTypes.STRING,
    island_images3: DataTypes.STRING,
    island_images4: DataTypes.STRING,
    island_images5: DataTypes.STRING,
    island_activity: DataTypes.STRING,
    island_price: DataTypes.STRING,
});

export default Packages;
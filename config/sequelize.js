import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("mysql://root:Jaksa123@127.0.0.1:3306/group6-jakarta-db?allowPublicKeyRetrieval=true&useSSL=false");

export default sequelize;
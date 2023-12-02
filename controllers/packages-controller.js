export const getPackagesByDetails = (request, response) => {
    response.status(200).json({
        data: [
        {
           island_name: "Pulau Tidung",
           island_images1: "https://source.unsplash.com/random/?Island",
           island_images2: "https://source.unsplash.com/random/?Island",
           island_images3: "https://source.unsplash.com/random/?Island", 
           island_images4: "https://source.unsplash.com/random/?Island", 
           island_images5: "https://source.unsplash.com/random/?Island", 
           island_activity:"Snorkling",
           island_price: "Rp 150.000",
            },
        ],
        massage: "Data Succesfully Retrieved",
    });
};
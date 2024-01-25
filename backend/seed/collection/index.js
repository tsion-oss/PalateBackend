const db = require('../../db')
const {  new_collection } = require('../../models/index')



const main = async () => {

     const new_collections = [
        {
            id: 12,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image: "./product_12.png",
            new_price: 50.0,
            old_price: 80.5,
          },
          {
            id: 35,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            image: "./product_35.png",
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 14,
            name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
            image: "./product_14.png",
            new_price: 60.0,
            old_price: 100.5,
          },
          {
            id: 8,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image: "./product_8.png",
            new_price: 100.0,
            old_price: 150.0,
          },
          {
            id: 15,
            name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
            image: "./product_15.png",
            new_price: 50.0,
            old_price: 80.5,
          },
          {
            id: 2,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image: "./product_2.png",
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 17,
            name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
            image: "./product_17.png",
            new_price: 60.0,
            old_price: 100.5,
          },
          {
            id: 28,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            image: "./product_28.png",
            new_price: 100.0,
            old_price: 150.0,
          },
      ];

      await new_collection.deleteMany();
      await new_collection.insertMany(new_collections);
}

const run = async () => {
    await main()
    db.close()
}
run()
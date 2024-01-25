const db = require('../../db')
const { all_product, data, new_collection } = require('../../models/index')

const main = async () => {

    const data_product = [
      {
        id:1,
        name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        image:'./product_1.png',
        new_price:50.00,
        old_price:80.50,
      },
      {id:2,
        name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        image:'./product_2.png',
        new_price:85.00,
        old_price:120.50,
      },
      {id:3,
        name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        image:'./product_3.png',
        new_price:60.00,
        old_price:100.50,
      },
      {id:4,
        name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        image:'./product_4.png',
        new_price:100.00,
        old_price:150.00,
      },
      ];

      await data.deleteMany();
      await data.insertMany(data_product);


}

const run = async () => {
    await main()
    db.close()
}
run()
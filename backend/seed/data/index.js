const db = require('../../db')
const { all_product, data, new_collection } = require('../../models/index')

const main = async () => {

    const data_product = [
      {
        id:1,
        name: "Fitted Microfiber T-shirt",
        image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9f%2F3a%2F9f3a5e1df7d16133280d274a143a0777a66dfc07.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
        new_price:50.00,
        old_price:80.50,
      },
      {id:2,
        name: "Fitted Microfiber T-shirt",
        image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2F1a%2Fb51a563a02316ae308e9f5054325b10d57daf4de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
        new_price:85.00,
        old_price:120.50,
      },
      {id:3,
        name: "Asymmetric-neck Top",
        image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2F5c%2F465c37f950d74b4743c01cc73cbbc29e85a10440.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        new_price:60.00,
        old_price:100.50,
      },
      {id:4,
        name: "Ribbed Modal-blend Top",
        image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F93%2Fc6%2F93c6f9811c77c77b77f03f7b765b5a6940267ffb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
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
const db = require('../../db')
const {  new_collection } = require('../../models/index')



const main = async () => {

     const new_collections = [
        {
            id: 12,
            name: "Pointelle-knit Dress",
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F01%2F58%2F0158eaa6d204066c4b29b6603216bcaa040d3ae5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            new_price: 50.0,
            old_price: 80.5,
          },
          {
            id: 35,
            name: "Girls 2-piece Terry Set",
            image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F75%2Fdb%2F75db630fd591f7dea597bd43eef62838380aad57.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 14,
            name: "Long Hooded Cardigan",
            image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2a%2F94%2F2a94f5ba16c3aa17ae0f548934961ea5a721ddeb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_cardigans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
            new_price: 60.0,
            old_price: 100.5,
          },
          {
            id: 8,
            name: "Fine-knit Cardigan",
            image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2F27%2F7827255cfc526fdbfb669fc6fc13f725e5bc7a34.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_cardigans%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            new_price: 100.0,
            old_price: 150.0,
          },
          {
            id: 15,
            name: "Loose Fit Sweatshirt",
            image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F69%2Fb9%2F69b9e568cab3e5f22ab81148638bb62d950b15e1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 2,
            name: "Fitted Microfiber T-shirt",
            image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2F1a%2Fb51a563a02316ae308e9f5054325b10d57daf4de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 17,
            name: "Slim Fit Twill Joggers",
            image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F83%2F67%2F8367e8a2ea196a548b8d2598919788c6f4aff7a7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 28,
            name: "Girls Cotton T-shirts",
            image:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Ff1%2Fa8f1789c927161292ac9be478236928b1a4e1ac4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            new_price: 85.0,
            old_price: 120.5,
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
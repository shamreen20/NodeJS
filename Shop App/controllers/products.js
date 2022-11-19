const products = require('../Models/product')

exports.getAddProducts =(req, res, next) => {
    res.render('admin/add-product',{
               pageTitle:'add-Product',
               path:'/admin/add-product',
               formCSS:true,
               productCSS: true,
               activeAddProducts:true
    });
  };

exports.postAddProducts = (req, res, next) => {
  //  products.push({title: req.body.title});
  const product = new product(require.body.title)
    product.save()
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    products.fetchAll(products => {
    res.render('shop/product-list',{
                prods: products,
                  pageTitle:'Shop',
                path:'/',
              productCSS:true,
            activeShop:true,
          hasProducts : products.length > 0});
  });
};
  

 

exports.Error = (req,res,next) => {
    res.status(404).render('Error_page', { pageTitle: 'Page Not Found', path: '/Error_page' });
 }
 
const controller = {

    index: (req,res) => {
        res.render('products/showAll');
    },
    show: (req, res) => {
        res.render('products/show');
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: (req, res) => {
        res.render('products/edit');
    }

}

module.exports = controller;
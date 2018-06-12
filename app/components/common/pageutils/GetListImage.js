
function importAll(r) {
    return r.keys();
}
let imagesSlick = importAll(require.context('assets/images/slick', false, /\.(png|jpe?g|svg)$/));
let listImagesSlick = imagesSlick.map(e => e.split('./')[1])
let imagesModalProduct = importAll(require.context('assets/images/modalProducts', false, /\.(png|jpe?g|svg)$/));
let listImagesModalProduct = imagesModalProduct.map(e => e.split('./')[1])


module.exports = {
    listImagesSlick, 
    listImagesModalProduct,
    getListImages: function(path){
        if(path == 'newProducts'){
            let imagesNewProduct = importAll(require.context('assets/images/newProducts', false, /\.(png|jpe?g|svg)$/));
            return imagesNewProduct.map(e => e.split('./')[1])
        }
        else if(path == 'saleProducts'){
            let imagesNewProduct = importAll(require.context('assets/images/saleProducts', false, /\.(png|jpe?g|svg)$/));
            return imagesNewProduct.map(e => e.split('./')[1])
        }
        else if(path == 'promoProducts'){
            let imagesNewProduct = importAll(require.context('assets/images/promoProducts', false, /\.(png|jpe?g|svg)$/));
            return imagesNewProduct.map(e => e.split('./')[1])
        }
        else{
            console.log('error path')
        }
    }
}
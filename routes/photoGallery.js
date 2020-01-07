const fs = require('fs'); //NS photos
const path = require('path'); //NS photos
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send('Photo Gallery page');
  res.render('photoGallery', { title: 'Photo Gallery page' });
  //let images = getImagesFromDir(path.join(__dirname, 'uploads'));
  //let images = getImagesFromDir('static')
  //res.render('photos', { title: 'Photos page', images: images });
});

// dirPath: target image directory
function getImagesFromDir(dirPath) {
    // All iamges holder, defalut value is empty
    let allImages = [];
    // Iterator over the directory
    let files = fs.readdirSync(dirPath);
    // Iterator over the files and push jpg and png images to allImages array.
    for (file of files) {
        let fileLocation = path.join(dirPath, file);
        var stat = fs.statSync(fileLocation);
        if (stat && stat.isDirectory()) {
            getImagesFromDir(fileLocation); // process sub directories
        } else if (stat && stat.isFile() && ['.jpg', '.png'].indexOf(path.extname(fileLocation)) != -1) {
            allImages.push('static/'+file); // push all .jpf and .png files to all images
        }
    }
    // return all images in array formate
    //return allImages;
    //
    let googleAllImages = [];
    let googleDrive = 'https://drive.google.com/open?id=1K1xajRIckfhy8EwnvKDmfP-aDuVDp-jD';
    //let googleDrive = 'https://drive.google.com/drive/folders/1K1xajRIckfhy8EwnvKDmfP-aDuVDp-jD?usp=sharing';

    let googleFiles = fs.readdirSync(googleDrive);
    console.log(googleFiles)
    //for (googleFile of googleFiles) {
    //    let googleFileLocation = path.join(googleDrive, file);
    //    var googleStat = fs.statSync(googleFileLocation);
    //    googleAllImages.push(googleFile); // push all .jpf and .png files to all images
    //}
    //console.log(googleAllImages);
    return ['https://drive.google.com/uc?id=1PxA6zaF54fDmhlIFIrWHCm6yVaCfDipo'];
}

module.exports = router;

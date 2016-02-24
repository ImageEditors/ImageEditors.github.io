
function Draw() {
    var ctx = document.getElementById('cnvs').getContext('2d');
    ctx.font = "14px 'MS Pゴシック'";
    ctx.strokeStyle = "gray";
    ctx.strokeText("ここに画像をドラッグ&ドロップして下さい", [cnvs.width / 2], [cnvs.height / 2], [cnvs.width]);
    var imageData = ctx.createImageData(cnvs.width, cnvs.height);
    var width = imageData.width, height = imageData.height;
    //var imgd = imageData.data;
    
    //for (var y = 0; y < height; ++y) {
    //    for (var x = 0; x < width; ++x) {
    //        var base = (x + y * width) * 4;
    //        imgd[base + 0] = 255 * x / width;
    //        imgd[base + 1] = 255 * y / height;
    //        imgd[base + 2] = Math.max(255 - x - y, 0);
    //        imgd[base + 3] = 255;
    //    }
    //}
    //ctx.putImageData(imageData, 0, 0);
};

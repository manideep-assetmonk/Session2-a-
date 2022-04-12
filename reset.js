module.exports=function (...args) {
    var result = 0;
    args.forEach(function (value) {
        result =(result+value)
    });

    return result/args.length;
}

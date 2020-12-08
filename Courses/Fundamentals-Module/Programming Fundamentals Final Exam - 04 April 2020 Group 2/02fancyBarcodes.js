function fancyBarcodes(arr) {
    let barcodeCount = arr.shift()

    for (let i = 0; i < barcodeCount; i++) {
        let findDigits = /\d/g;
        let validBarcode = /@[\#]{1,}[A-Z][A-Za-z\d]{4,}[A-Z]@[\#]{1,}/g;
        let currentLine = arr[i];
        let match = validBarcode.exec(currentLine);

        if (!match) {
            console.log('Invalid barcode');
        } else {
            let concatDigits = '';
            let matchDigits = arr[i].match(findDigits)

            if (!matchDigits) {
                console.log('Product group: 00');
            } else {
                matchDigits.forEach(x => {
                    concatDigits += x;
                });
                console.log(`Product group: ${concatDigits}`);
            }
        }
    }
}
fancyBarcodes([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]);

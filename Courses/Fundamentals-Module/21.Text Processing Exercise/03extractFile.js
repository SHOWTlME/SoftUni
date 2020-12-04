function extractFile(file) {
    let directories = file.split('\\');
    let fileDirectory = directories.pop();
    let index = fileDirectory.lastIndexOf('.');
    let fileExtension = fileDirectory.substring(index + 1, fileDirectory.length)
    let fileName = fileDirectory.substring(index, - fileDirectory.length)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
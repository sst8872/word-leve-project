function getSheetsLength(callback) {
    document.querySelector('.loader').style.display = 'block';
    let appUrl = 'https://script.google.com/macros/s/AKfycbzyqLGZTdZSFlGtghA2wQRpPb8yMs88uWBB92iYnAga_OhSJ9c/exec';

    fetch(appUrl)
        .then(res => res.json())
        .then(callback);
}

export default getSheetsLength;


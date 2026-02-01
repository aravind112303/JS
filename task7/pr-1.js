function savetoDB(data) {
    return new Promise(() => {
        if(data > 5) {
            resolve("Internet access");
        } else {
            reject("Internet disconnect");
        }
    })
}
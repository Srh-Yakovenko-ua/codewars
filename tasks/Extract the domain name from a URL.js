function domainName(url) {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0]


}

console.log(domainName('http://google.co.jp'))
console.log(domainName('https://youtube.com'))
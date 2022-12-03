function removeUrlAnchor(url){
    return url.split('#')[0]
}

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
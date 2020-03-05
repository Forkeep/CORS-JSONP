getFriendsCORS.onclick=()=>{
    let request = new XMLHttpRequest()
    request.open('get','http://qq.com:9990/friends.json')
    request.onreadystatechange = ()=>{
        if (request.readyState ===4 ){
            if (request.status >=200 && request.status <400){
                console.log(request.response)

            }else{
                console.log('shibai')
            }
        }
    }
    request.send()
}

function jsonp(url) {
    return new  Promise((resolve,reject)=>{
        const random = 'hackerJSONPCallback' + Math.random()
        window[random] = (data)=>{
            console.log(window[random])
            resolve(data)
        }
        const   script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        // script.onload = ()=>{
        //     script.remove()
        // }
        script.onerror = ()=>{
            reject()
        }
        document.body.appendChild(script)
    })

}

getFriendsJSONP.onclick = ()=>{
    jsonp('http://qq.com:9990/friends.js').then(data=>{
        console.log(data)
    })
}

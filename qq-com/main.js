getFriends.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('get','/friends.json')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >=200 && request.status < 400){
                console.log(request.response)
                const friends = JSON.parse(request.response)
                console.log(friends);
            }else {
                console.log('访问失败')
            }
        }
    }
    request.send()
}
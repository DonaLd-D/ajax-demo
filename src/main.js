getCss.onclick=()=>{
    const xhr=new XMLHttpRequest();
    xhr.open('get','/getcss');
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4&&xhr.status===200){
            const style=document.createElement('style')
            console.log(xhr.response)
            style.innerHTML=xhr.response
            document.head.appendChild(style)
        }
    }
    xhr.send()
}

getJs.onclick=()=>{
    const xhr=new XMLHttpRequest()
    xhr.open('get','/getjs')
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4&&xhr.status===200){
            const src=document.createElement('script')
            console.log(xhr.response)
            src.innerHTML=xhr.response
            document.body.appendChild(src)
        }
    }
    xhr.send()
}

getHtml.onclick=()=>{
    const xhr=new XMLHttpRequest()
    xhr.open('get','/gethtml')
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4&&xhr.status===200){
            const div=document.createElement('div')
            console.log(xhr.response)
            div.innerHTML=xhr.response
            document.body.appendChild(div)
        }
    }
    xhr.send()
}
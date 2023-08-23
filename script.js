function toggleMode(){
    const html = document.documentElement 
    html.classList.toggle('light')
    //pegar a tag img
    const img = document.querySelector("#profile img")
    //substituir a imagem
    if(html.classList.contains('light')){
     // se estiver light mode, adicionar a imagem light
     img.setAttribute("src","./assets/avatar-light.png")
     img.setAttribute("alt","foto Mayk óculos escuros")

    }else{
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src","./assets/avatar.png")
        img.setAttribute("alt","foto Mayk fundo amarelo")

    }

    
    
    
    //if(html.classList.contains('light'))
    //    html.classList.remove('light')
    //}else{//
     //html.classList.add('light')
    //}//

    
    
}
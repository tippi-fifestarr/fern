const beginButt = document.getElementById("beginButt")
beginButt.onclick = function()
{
    const mainbox = document.getElementById("hero-div")
    mainbox.classList.remove("hide")
    document.querySelector('#beginButt').remove()
}

const dungEnter = document.querySelector('.dung')
dungEnter.addEventListener('click', dungeonGo)

function dungeonGo(){
    console.log(dungEnter)
    return dungEnter.classList
}

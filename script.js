var tagElArr, homeTabEl, destTabEl, crewTabEl, techTabEl, 
    homeTagEl, destTagEl, crewTagEl, techTagEl,inNavDivEl;

var mainContentHandler = e => {
    // e.preventDefault()
    console.log("main clicked")
    // console.log(e.target)
    debugger
    tagElArr.forEach(item => {
        if(item[0].id === e.target.id)   {
            item[1].classList.remove('hidden')
            item[1].classList.add('dFlex')
        }else{
            item[1].classList.remove('dFlex')
            item[1].classList.add('hidden')
        }
    });
}

var getEventListeners = () => {
    inNavDivEl.addEventListener('mouseup', mainContentHandler)
}

var initElements = () => {
    tagElArr = []
    homeTabEl = document.getElementById('homeTab')
    destTabEl = document.getElementById('destTab')
    crewTabEl = document.getElementById('crewTab')
    techTabEl = document.getElementById('techTab')

    homeTagEl = document.getElementById('homeTag')
    tagElArr.push([homeTagEl, homeTabEl])
    destTagEl = document.getElementById('destTag')
    tagElArr.push([destTagEl, destTabEl])
    crewTagEl = document.getElementById('crewTag')
    tagElArr.push([crewTagEl, crewTabEl])
    techTagEl = document.getElementById('techTag')
    tagElArr.push([techTagEl, techTabEl])
    inNavDivEl = document.getElementById('inNavDiv')
}

var init = () => {
    initElements()
    getEventListeners()
}

init()
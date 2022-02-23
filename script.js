var tagElArr, homeTabEl, destTabEl, crewTabEl, techTabEl, 
    homeTagEl, destTagEl, crewTagEl, techTagEl,inNavDivEl, bodyEl;

var inNavDivDestEl, destsImgEl, destsDivEl;
var inNavDivCrewEl, crewImgEl, crewDivEl;
var inNavDivTechEl, techsImgEl, techsDivEl;

var mainContentHandler = e => {
    console.log('mainContenthandler')
    tagElArr.forEach(item => {
        if(inNavDivEl !== e.target && inNavDivEl.contains(e.target))   {
            if(item[0] === e.target || item[0].contains(e.target))   {
                item[1].classList.remove('hidden')
                item[1].classList.add('dFlex')
                console.log(screen.width)
                if(item[1].id === 'homeTab')    {
                    bodyEl.classList.remove('dest', 'crew', 'tech')
                    bodyEl.classList.add('home')
                }else if(item[1].id === 'destTab'){
                    bodyEl.classList.remove('home', 'crew', 'tech')
                    bodyEl.classList.add('dest')
                }else if(item[1].id === 'crewTab'){
                    bodyEl.classList.remove('home', 'dest', 'tech')
                    bodyEl.classList.add('crew')
                }else   {
                    bodyEl.classList.remove('home', 'dest', 'crew')
                    bodyEl.classList.add('tech')
                }
            }else{
                item[1].classList.remove('dFlex')
                item[1].classList.add('hidden')
            }
        }
    });
}
var contentHandler = (navEl, imgsEl, descEl, e) => {
    console.log(e.target)
    // navEl.children.forEach((item, ind) => {
    //     if(navEl !== e.target && navEl.contains(e.target))   {
    //         if(item === e.target || item.contains(e.target))   {
    //             imgsEl.children[ind].classList.remove('hidden')
    //             descEl.children[ind].classList.remove('hidden')
    //             console.log(screen.width)
    //         }else{
    //             imgsEl.children[ind].classList.add('hidden')
    //             descEl.children[ind].classList.add('hidden')
    //         }
    //     }
    // });
    for(let i = 0; i < navEl.children.length; i++)  {
        if(navEl !== e.target && navEl.contains(e.target))   {
            if(navEl.children[i] === e.target || navEl.children[i].contains(e.target))   {
                imgsEl.children[i].classList.remove('hidden')
                descEl.children[i].classList.remove('hidden')
                console.log(screen.width)
            }else{
                imgsEl.children[i].classList.add('hidden')
                descEl.children[i].classList.add('hidden')
            }
        }
    }
}

var windowResizeHandler = e => {
    
    if(screen.width > 800)    {
        console.log(window.screen)
        bodyEl.classList.remove('t', 'm')
        bodyEl.classList.add('d')

    }else if(screen.width > 414)    {
        bodyEl.classList.remove('d', 'm')
        bodyEl.classList.add('t')
    }else   {
        bodyEl.classList.remove('d', 't')
        bodyEl.classList.add('m')
    }
}

var getEventListeners = () => {
    inNavDivEl.addEventListener('mouseup', mainContentHandler)
    inNavDivDestEl.addEventListener('mouseup', contentHandler.bind(this, inNavDivDestEl, destsImgEl, destsDivEl))
    inNavDivCrewEl.addEventListener('mouseup', contentHandler.bind(this, inNavDivCrewEl, crewImgEl, crewsDivEl))
    inNavDivTechEl.addEventListener('mouseup', contentHandler.bind(this, inNavDivTechEl, techsImgEl, techsDivEl))
    window.addEventListener('resize', windowResizeHandler)
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
    
    inNavDivEl = document.getElementById('inNavDivMain')
    inNavDivDestEl = document.getElementById('inNavDivDest')
    destsImgEl = document.getElementById('destsImg')
    destsDivEl = document.getElementById('destsDiv')

    inNavDivCrewEl = document.getElementById('inNavDivCrew')
    crewImgEl = document.getElementById('crewImg')
    crewsDivEl = document.getElementById('crewsDiv')

    inNavDivTechEl = document.getElementById('inNavDivTech')
    techsImgEl = document.getElementById('techsImg')
    techsDivEl = document.getElementById('techsDiv')
    // destElArr = []
    // homeTabEl = document.getElementById('homeTab')
    // destTabEl = document.getElementById('destTab')
    // crewTabEl = document.getElementById('crewTab')
    // techTabEl = document.getElementById('techTab')

    // homeTagEl = document.getElementById('homeTag')
    // tagElArr.push([homeTagEl, homeTabEl])
    // destTagEl = document.getElementById('destTag')
    // tagElArr.push([destTagEl, destTabEl])
    // crewTagEl = document.getElementById('crewTag')
    // tagElArr.push([crewTagEl, crewTabEl])
    // techTagEl = document.getElementById('techTag')
    // tagElArr.push([techTagEl, techTabEl])
    bodyEl = document.body
}

var setInitBackground = () => {
    if(screen.width > 1168)    {
        bodyEl.classList.remove('t', 'm')
        bodyEl.classList.add('d')

    }else if(screen.width > 414)    {
        bodyEl.classList.remove('d', 'm')
        bodyEl.classList.add('t')
    }else   {
        bodyEl.classList.remove('d', 't')
        bodyEl.classList.add('m')
    }
    bodyEl.classList.remove('dest', 'crew', 'tech')
    bodyEl.classList.add('home')
}

var init = () => {
    initElements()
    getEventListeners()
    setInitBackground()
}

init()
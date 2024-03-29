window.addEventListener("load", ()=>{
    function Data(){
        fetch("http://127.0.0.1:5500/malumot.json")
        .then((res)=>res.json())
        .then(data =>{
            HomePage(data)
            document.querySelector('header').style.backgroundImage = `url(${data[0].home[0].bg})`
        })
    }
    Data()
})



function HomePage(item){
    function NavBar(){
        let parent = document.getElementById('navBar')
        let logo = document.createElement('img')
        logo.src = item[0].home[0].title
        let List = document.getElementById('List')
        for(let i=0; i<item[0].home[0].navList.length; i++){
            let li = document.createElement('li')
            li.classList.add('list')
            li.innerHTML = item[0].home[0].navList[i]
            let a = document.createElement('a')
            a.href = item[0].home[0].navHref[i]
            a.append(li)
            List.append(a)
        }
        parent.append(logo)
        parent.append(List)
        let i = document.createElement('i')
        i.className = 'bx bx-search-alt-2'
        parent.append(i)
    }


    function PhoneList(){
        let List = document.getElementById('phoneList')
        for(let i=0; i <item[0].home[0].navPhones.length; i++){
            let li = document.createElement('a')
            li.href = item[0].home[0].PhoneHref[i]
            let phoneName = document.createElement('img')
            phoneName.src = item[0].home[0].navPhoneText[i]
            let img = document.createElement('img')
            img.src = item[0].home[0].navPhones[i]
            li.classList.add('box')
            img.classList.add('phoneImage')
            li.append(img)
            li.append(phoneName)
            List.append(li)
        }
    }

    PhoneList()
    NavBar()
}
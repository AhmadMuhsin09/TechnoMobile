window.addEventListener("load", ()=>{
    function Data(){
        fetch("http://127.0.0.1:5500/malumot.json")
        .then((res)=>res.json())
        .then(data =>{
            HomePage(data)
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
            li.innerHTML = item[0].home[0].navList[i]
            let a = document.createElement('a')
            a.href = item[0].home[0].navHref[i]
            a.append(li)
            List.append(a)
        }
        parent.append(logo)
        parent.append(List)
    }



    NavBar()
}
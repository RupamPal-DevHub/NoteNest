let listBox = document.querySelectorAll(".list-box")
let content = document.querySelectorAll(".content")
let maintext = document.querySelector(".main-texts")
let scrollmaincontent= document.querySelector(".scroll-main-content")
let addnoteButton= document.querySelector(".add-note")
let empty = document.querySelector(".empty")
let biglogoText= document.querySelector(".big-logo-text")
let buttomDetails= document.querySelector(".buttom-details")
let contentBox= document.querySelector(".content-box")
let title = document.createElement('p');

function addnote(){
    const newItem = document.createElement('div');
    newItem.classList.add("list-box")
    scrollmaincontent.insertBefore(newItem, scrollmaincontent.firstChild)

    const titleandtime = document.createElement('p');
    titleandtime.classList.add("title-time")
    newItem.insertBefore(titleandtime, newItem.firstChild)

    const title = document.createElement('p');
    title.classList.add("title")
    title.textContent = "Untitled note"
    titleandtime.insertBefore(title, titleandtime.firstChild)

    const time = document.createElement('p');
    time.classList.add('time')
    time.textContent= "last uodated 12:30 13/3/24"
    titleandtime.appendChild(time)

    const addContent = document.createElement('p');
    addContent.classList.add('content')
    addContent.textContent= ""
    titleandtime.appendChild(addContent)
    
}

addnoteButton.addEventListener("click", ()=>{
    addnote()
    updatenodelist()
})


let selectedindex = null;

function updatenodelist(){

    listBox = document.querySelectorAll(".list-box")
    content = document.querySelectorAll(".content")
    maintext = document.querySelector(".main-texts")
    scrollmaincontent= document.querySelector(".scroll-main-content")   
    addnoteButton= document.querySelector(".add-note")

    listBox.forEach((box,index)=>{
        
        box.addEventListener('click', function() {
        
            listBox.forEach((btn) => {
                btn.style.backgroundColor = '';
                btn.style.boxShadow= "";
    
            });
            
            this.style.backgroundColor = "#454545";
            this.style.boxShadow= "inset 0 0 0 1px #8a8a8a";
            selectedindex = index;
        
            maintext.value = content[index].textContent
            

            biglogoText.classList.add("hide")
            buttomDetails.classList.add("hide")
            contentBox.classList.remove("hide")
  
        })
        maintext.addEventListener("keyup",(value)=>{
                    
            content[selectedindex].textContent = maintext.value

            if(value.key == "Escape"){
                biglogoText.classList.remove("hide")
                buttomDetails.classList.remove("hide")
                contentBox.classList.add("hide")
                listBox.forEach((btn) => {
                    btn.style.backgroundColor = '';
                    btn.style.boxShadow= "";
    
                 });
            }
        })
        
    })
    if(listBox.length != 0){
        empty.remove()
    
    }
}



updatenodelist()








class Page{
constructor(){
this.pages={

    home:document.querySelector('.home'),
    about:document.querySelector('.about'),
    service:document.querySelector('.service'),
    contact:document.querySelector('.contact'),
    imagetemp:document.querySelector('.image-tempo')
}
this.array=[];


this.initailzation();
}


initailzation(){
 
    this.dispalypage('home')
    document.addEventListener('click',(event)=>{

if(event.target.matches('#home_link')){
    this.dispalypage('home')
 
 
    this.array=[];

}
else 
if(event.target.matches('#about_link')){
    this.dispalypage('about')
this.array.push('about')


}
else 
if(event.target.matches('#service_link')){
    this.dispalypage('service')
    this.array.push('service')
 

}
else 
if(event.target.matches('#contact_link')){
    this.dispalypage('contact')
    this.array.push('contact')

    
}
else if(event.target.matches('#tempo-image')){

    this.array.push('imagetemp')
   document.querySelector('.tempo').src="tempo.jpg"

    this.dispalypage('imagetemp')

}
else if(event.target.matches('#work-certi')){

    this.array.push('imagetemp')
   document.querySelector('.tempo').src="cert.jpg"

    this.dispalypage('imagetemp')

}


else if(event.target.matches('#backbutton')){
   
    let index=this.array.length-2;
    if(index>-1){


   
    let pag=this.array[index]
    this.array.pop()
   
    this.dispalypage(pag)

}else{
    this.dispalypage('home')

}

}
    })




}

dispalypage(pageName){
if(pageName==='home'){
document.querySelector('.button').style.display='none'
this.array=[]


}else{

    document.querySelector('.button').style.display='block'
}


for( let  key in this.pages){
    
    this.pages[key].style.display=(key===pageName)?(pageName==='contact')?'flex':'grid':'none'

    
}


}

}

let newpage=new Page()
inputElement=document.querySelector("#data")
secondDiv=document.querySelector(".seconddiv")
btn=document.querySelector(".btn")
box=document.querySelector("#list12")


 var check=0;
var array=new Array()

btn.addEventListener("click",function(){
    text=inputElement.value;
    if(text==null){ 
        text=" "
    array[check]=text;
    }
    else{ 
    array[check]=text;
    }

   
let list =document.createElement('li')
let chk=document.createElement('input')
let para=document.createElement('span')
var span = document.createElement("span");
var textNode=document.createTextNode(text)


list.style.display="flex"
list.style.justifyContent="space-between"
list.style.alignItems="center"
list.id="list"+check

span.class="text122"
span.innerHTML = '<i class=" btn12 ri-delete-bin-6-fill " ></i>';


chk.type="checkbox"
chk.id="sh"
chk.style.marginRight="10px"






chk.addEventListener("click",function(){
    if(this.checked){
        para.style.textDecoration="line-through"

    }
    else{
        para.style.textDecoration="none"

    }
    
})

para.appendChild(chk)
para.appendChild(textNode)

list.appendChild(para)
list.appendChild(span)

box.appendChild(list)

span.addEventListener("click",function(){
var txt=list.id
var txtt1 =txt.charAt(txt.length-1);

    box.removeChild(list)
    array.splice(txtt1,1)
    
})
    return check++;
   
})



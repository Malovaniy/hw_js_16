 getSel = x => document.querySelector(x)
 getSelAll = x => document.querySelectorAll(x)

 let f1 = document.forms[`f1`]
 let f2 = document.forms[`f2`]

 let f3 = document.forms[`f3`]
 let f4 = document.forms[`f4`]


 getSel(`.edit`).addEventListener(`click`, e =>{
    f2.style.display = `block`
    f3.style.display = `none`
      getSel(`.colorBlock1`).classList.remove(`disp`)
      getSel(`.colorBlock2`).classList.remove(`disp`)
 })
 getSel(`.style`).addEventListener(`click`, e =>{
    f2.style.display = `none`
    f3.style.display = `block`
 })

 f2.textarea.value = `
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`

 getSel(`.one`).innerHTML = f2.textarea.value 
 
 
 
 f2.save.addEventListener(`click`, e=>{
  
    getSel(`.one`).innerHTML = f2.textarea.value 
    f2.style.display = `none`
    
 })

 f3.fontSize.forEach(element => {
     element.addEventListener(`click`, e =>{
        getSel(`.one`).style.fontSize = element.value
     })
     
 });

 
 f3.fonts.addEventListener(`click`,element => {
      if (getSel(`.one`).style.fontFamily != element.target.value) {
         getSel(`.one`).style.fontFamily = element.target.value
      }
     })

     


     let colors = getSelAll(`.colors`)
     let colors2 = getSelAll(`.colors2`)
   
     colors.forEach( e =>{
      e.style.backgroundColor = e.id
   })
     colors2.forEach( e =>{
      e.style.backgroundColor = e.id
   })
      

     f3.color1.addEventListener(`click`, e =>{   
      getSel(`.colorBlock1`).classList.toggle(`disp`)
      getSel(`.colorBlock2`).classList.remove(`disp`)
      colors.forEach( e =>{
         e.addEventListener(`click`, element=>{
            getSel(`.one`).style.color = e.id

         })
      })
 
      
     })
     f3.color2.addEventListener(`click`, e =>{   
      getSel(`.colorBlock2`).classList.toggle(`disp`)
      getSel(`.colorBlock1`).classList.remove(`disp`)
      colors2.forEach( e =>{
         e.addEventListener(`click`, element=>{
         getSel(`.one`).style.backgroundColor = e.id
         })
      })
     })

f3.boldText.addEventListener(`input`, e =>{
   if (f3.boldText.checked != true) {
      getSel(`.one`).style.fontWeight = `normal`
   }
   else{
      getSel(`.one`).style.fontWeight = `bold`
   }
})
  f3.cursiveText.addEventListener(`input`, e=>{
     if (f3.cursiveText.checked != true) {
      getSel(`.one`).style.fontStyle = `normal`
     }
     else{
      getSel(`.one`).style.fontStyle = `italic`
     }
   })
   


   f2.button.addEventListener(`click`, e=>{
      getSel(`.parent`).classList.add(`dispNone`)
      getSel(`.three`).classList.add(`dispblock`)
      getSel(`.three`).classList.remove(`dispNone`)

   })


   f4.radio.forEach(element =>{
      element.addEventListener(`input`, e=>{

         let parentBlock = getSel(`.one`)
         
         if (element.id === `table`) {
            getSel(`.tableBox`).classList.add(`dispblock`)
            getSel(`.listBox`).classList.remove(`dispblock`)


            f4.createEl.addEventListener(`click`,d=>{

               let divka = document.createElement(`div`)
               let table = document.createElement(`table`)
            
              table.style.borderCollapse = `collapse`;
               for(let i=0; i < f4.countTr.value; i++){
                  let tr = document.createElement(`tr`)
                  table.appendChild(tr)
                  for(let i=0; i < f4.countTd.value; i++){
                     let td = document.createElement(`td`)
                     td.style.width = f4.widthTr.value+`px`
                     td.style.height = f4.widthTd.value+`px`
                     td.style.border = f4.borderTable.value+`px`
                     td.style.borderColor = f4.colorBorder.value
                     td.style.borderStyle = f4.typeBorder.value
                     td.innerText = `td`
                     td.style.width = f4.widthTd.value+`px`
                     tr.appendChild(td)
                  }
                  divka.appendChild(table)
                  
               }
              
               f2.textarea.value += divka.innerHTML
               getSel(`.parent`).classList.remove(`dispNone`)
               getSel(`.three`).classList.add(`dispNone`)
            })




         }
         if (element.id === `list`) {
            getSel(`.listBox`).classList.add(`dispblock`)
            getSel(`.tableBox`).classList.remove(`dispblock`)
            console.log(f4.createList);

            f4.createList.addEventListener(`click`, c=>{
               let ul = document.createElement(`ul`)
               for(let i=0; i< f4.countLi.value; i++){
                  let li = document.createElement(`li`)
                  li.innerText = `item`+[i+1]
                  li.type = f4.typeMarks.value
                  ul.appendChild(li) 
               }
               f2.textarea.value += ul.innerHTML
               getSel(`.parent`).classList.remove(`dispNone`)
               getSel(`.three`).classList.add(`dispNone`)
            })
         }

      })
   })
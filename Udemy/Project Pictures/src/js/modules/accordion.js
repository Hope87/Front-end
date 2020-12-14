// const accordion = (triggersSelector, itemsSelector) => {
//   const triggers = document.querySelectorAll(triggersSelector),
//         items = document.querySelectorAll(itemsSelector);

//         items.forEach(item => item.classList.add('animated', 'fadeInDown'));

//         triggers.forEach(trigger => {
//             trigger.addEventListener('click', function(){
//                 if(!this.classList.contains('active')){
//                     triggers.forEach(trigger => {
//                         trigger.classList.remove('active', 'active-style')
//                     })
//                     this.classList.add('active', 'active-style') 
//                 }
//             })
        // })

        //ВАРИАНТ №2============================================================================
        const accordion = (triggersSelector) => {
        const triggers = document.querySelectorAll(triggersSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', function(){
                this.classList.toggle('active-style')
                this.nextElementSibling.classList.toggle('active-content')

                if(this.classList.contains('active-style')){
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
                }else{
                    this.nextElementSibling.style.maxHeight = '0px';
                }
            })
        })
}

export default accordion;
const mask = (selector) => {

    const setCursorposition = (pos, elem) => {
        elem.focus();

        if(elem.setSelectionRange){
            elem.setSelectionRange(pos, pos)
        } else if(elem.createTextRange){
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();

        }
    }

    function creatMask(e){
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");

            if(def.length >= val.length){
                val = def;
            }

            this.value = matrix.replace(/./g, function(a){
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            })

            if(e.type === 'blur'){
               if(this.value.length === 2){
                   this.value = '';
               }
            }else{
                setCursorposition(this.value.length, this);
            }
    }

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', creatMask);
        input.addEventListener('focus', creatMask);
        input.addEventListener('blur', creatMask);
    })

}

export default mask;
const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector)
    
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1650){
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        }else{
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    })

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.5;

        links.forEach(link => {
            link.addEventListener('click', function(e) {
            e.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

                requestAnimationFrame(step)

                function step(time) {
                    if(start === null){
                        start = time;
                    }

                    let progress = time - start,
                        r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                        document.documentElement.scrollTo(0, r);

                        if(r !== widthTop + toBlock){
                            requestAnimationFrame(step);
                        }else{
                            location.hash = hash;
                        }
                }
            })
        })


    //===============Вариант №2======================================================================
    // const element = document.documentElement,
    //       body = document.body;

    //       const calcScroll = () => {
    //           upElem.addEventListener('click', function(e) {
    //               let scrollTop = Math.round(element.scrollTop || body.scrollTop);

    //               if(this.hash !== ""){
    //                   e.preventdefault();
    //                   let hashelem = document.querySelector(this.hash),
    //                       hashElemTop = 0;

    //                       while (hashelem.offsetParent) {
    //                           hashElemTop += hashelem.offsetTop
    //                           hashelem = hashelem.offsetParent
    //                       }

    //                       hashElemTop = Math.round(hashElemTop)
    //                       scrollFunc(scrollTop, hashElemTop, this.hash)
    //               }

    //           })
    //       }
    // const scrollFunc = (from, to, hash) => {
    //   let timeInterval = 1,
    //       prevScrollTop,
    //       speed;

    //     if(to > from){
    //         speed = 30
    //     }else{
    //         speed = -30
    //     }

    //     let intervalId = setInterval(() => {
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);
            
    //         if(
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ){
    //             clearInterval(intervalId)
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //         }else{
    //             element.scrollTop += speed;
    //             body.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }

    //     }, timeInterval);
    // }      
    
    // scrollFunc();
}

export default scrolling;
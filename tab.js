(()=>{
    const $tab=document.getElementById('js-tab')
    const $nav=$tab.querySelectorAll('[data-nav]')
    const $content=$tab.querySelectorAll('[data-content]')

    let index=0;
    const navLen=$nav.length;
    while(index<navLen){
        $nav[index].addEventListener('click',(e)=>clickHandler(e));
        index++;
    }


    const clickHandler=(e)=>{
        e.preventDefault();

        const $this=e.target
        const targetVal=$this.dataset.nav

        let index=0;
        const navLen=$nav.length;
        while(index<navLen){
            $nav[index].classList.remove('is-active')
            $content[index].classList.remove('is-show')
            index++;
        }

        $nav[targetVal].classList.add('is-active')
        $content[targetVal].classList.add('is-show')

    }
})();

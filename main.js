function autificationEMT(emt) {
    const OPTIONS = {
        'body': 'ЭЙ ТЫ, ДА-ДА ТЫ, А НУ СЮДА ИДИ',
        'icon': 'images/calculator.png'
    }
    new Notification('ВАШ ОПОВЕЩАТОР', OPTIONS)
}

document.addEventListener('DOMContentLoaded', function(){
    const height_elem = document.getElementById('exampleInputHeight')
    const width_elem = document.getElementById('exampleInputWidth')
    const btn_elem = document.getElementById('imt_btn')
    const answer_elem = document.getElementById('exampleInputIMT')


    btn_elem.addEventListener('click', function(){
        let h = +height_elem.value
        let w = +width_elem.value
        console.log(h)
        console.log(w)
        h=h/100
        let imt = w/(h*h);
        answer_elem.value = imt.toFixed(2)
        setInterval(()=>{
            Notification.requestPermission().then((result)=>{
                if (result==='granted') {
                    Notification(imt)
                }   
            })
        }, 10000);
       })
    })

window.addEventListener('load', function(){
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js')
        .then(reg=>{
            console.log('SW gen', reg)
        })
        .catch(error=> {
            console.log('SW failed', error)
        })
    }
})

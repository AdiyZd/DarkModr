document.getElementById("dark").addEventListener('click', function() {
    const s1 = document.getElementById('s1')
    const s2 = document.getElementById('s2')

    console.log('s1 display : ',  s1.style.display)
    console.log('s2 style : ', s2.style.display)

    if (s1.style.display === 'none' || s1.style.display === '' ) {
        s1.style.display = 'block' // menampilkan bahwa style ada lagh   
        s2.style.display = 'none'

    } else {
        s1.style.display = 'none'
        s2.style.display = 'block'
    }

    // console.error(s1.style.display === 'none')
})
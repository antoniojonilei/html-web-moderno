document.querySelectorAll('[wm-nav]').forEach(link => {
    const conteudo = document.getElementById('conteudo')

    link.onclick = e => {
        e.preventDefault()
        
        fetch(link.getAttribute('wm-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})
function filter(tipo) {
    // Alterar a visibilidade dos cards
    let cardCount = 0;
    document.querySelectorAll('.poke').forEach(card => {
        card.style.display = "flex";
        cardCount += 1;
        if (!card.classList.contains(tipo) && tipo !== ''){
            card.style.display = 'none';
            cardCount -= 1; 
        }    
    });

    // Verificar se existem cards com operador ternario
    let zeroPokemon = document.querySelector('#zeroPokemon');
    cardCount == 0 ? zeroPokemon.classList.remove('d-none') : zeroPokemon.classList.add('d-none');

    //Alterar o estilo dos botões de filtro
    document.querySelectorAll('.btn-filter').forEach(button => {
        button.classList.add('btn-sm');
        button.classList.remove('btn-md');
        if (button.id == `btn-${tipo}`) {
            button.classList.remove('btn-sm');
            button.classList.add('btn-md');
        }
    });
}

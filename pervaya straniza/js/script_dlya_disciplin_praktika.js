const form = document.getElementById('form');
function polucheniedannih(event) {
    event.preventDefault();
    const otdelenie=form.querySelector('[ name="vibor_otdeleniya"]')
    const terms=form.querySelector('[name="terms"]');
     const values={
        otdelenie: otdelenie.value,
        terms: terms.checked
     };   
     console.log('v1',values)
}
form.addEventListener('submit',polucheniedannih )

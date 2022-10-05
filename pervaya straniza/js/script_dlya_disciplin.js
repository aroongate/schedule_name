const form = document.getElementById('form');
function polucheniedannih(event) {
    event.preventDefault();
    const name=form.querySelector('[name="vvod_imeni"]')
    const otdelenie=form.querySelector('[ name="vibor_otdeleniya"]');
     const values={
        name: name.value,
        otdelenie: otdelenie.value
     };   
     console.log('v1',values)
}
form.addEventListener('submit',polucheniedannih )

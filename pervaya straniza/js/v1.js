const form = document.getElementById('form');
function polucheniedannih(event) {
    event.preventDefault();
    const name=form.querySelector('[name="vvod_imeni"]')
    const familiya=form.querySelector('[name="vvod_familii"]')
    const otchestvo=form.querySelector('[ name="vvod_otchestwa"]')
    const otdelenie=form.querySelector('[ name="vibor_otdeleniya"]');
     const values={
        name: name.value,
        familiya: familiya.value,
        otchestvo: otchestvo.value,
        otdelenie: otdelenie.value
     };   
     console.log('v1',values)
}
form.addEventListener('submit',polucheniedannih )

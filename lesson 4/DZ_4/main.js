//let button = document.getElementById('button')
//let input = document.getElementById('input')
//
//button.onclick = () => {
//    let tag = document.createElement('div');
//    let deletebutton = document.createElement('button')
//    deletebutton.innerText = 'delete';
//   deletebutton.onclick = () => {
//        tag.remove()
//   }
//    tag.setAttribute('class', 'block')
//    tag.innerText = input.value
//    tag.append(deletebutton)
//    document.body.append(tag);
//}

const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;

            if (direction === 'plus') {
                newValue = currentValue + 1;
            } else {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            }

            inp.value = newValue;
        })
    })

}

counter();
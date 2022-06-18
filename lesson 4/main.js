// block3.classList.add("NewClass")
// block3.classList.remove('block')
//
//
//  console.log(block3.classList)
//
//
// block3.onclick = () => {
//     block3.classList.toggle('path')
// }
//
// const block2 = document.querySelector('block');
// const block4 = document.querySelectorAll('block')
// console.log(block4)

const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {
    const tag = document.createElement('div');
    const deletebutton = document.createElement('button');
    deletebutton.innerText = 'delete';
    deletebutton.onclick = () => {
        tag.remove()
    }
    tag.setAttribute('class', 'block');
    tag.innerText = input.value;
    tag.append(deletebutton)
    document.body.append(tag);

}
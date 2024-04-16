# Projects Related to DOM

## project link 
[Click here](https://stackblitz.com/@Anish770/collections)

# Solution code
## project 1

```javascript
console.log(Anish);
const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');
btn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } 
    else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } 
    else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } 
    else {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
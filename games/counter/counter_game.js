const countEl = document.getElementById('count');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');


let count = 0;


function updateCount() {
countEl.textContent = count;
}


clickBtn.addEventListener('click', () => {
count++;
updateCount();
});


resetBtn.addEventListener('click', () => {
count = 0;
updateCount();
});
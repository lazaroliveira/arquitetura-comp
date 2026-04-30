function showTab(tabId){
  const tabs = document.querySelectorAll('.content');

  tabs.forEach(t => {
    t.classList.remove('active');
  });

  const selected = document.getElementById(tabId);

  setTimeout(() => {
    selected.classList.add('active');
  }, 50);
}

const items = document.querySelectorAll('.checklistItems li');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function updateProgress(){
  const total = items.length;
  const done = document.querySelectorAll('.checked').length;

  const percent = Math.round((done / total) * 100);
  progressBar.style.width = percent + '%';
  progressBar.innerText = percent + '%';
  progressText.innerText = done + ' de ' + total + ' etapas concluídas';
}

items.forEach((item, index) => {
  item.addEventListener('click', () => {

    if(index > 0 && !items[index - 1].classList.contains('checked')){
      alert("Complete a etapa anterior primeiro!");
      return;
    }

    item.classList.toggle('checked');
    updateProgress();
  });
});

updateProgress();


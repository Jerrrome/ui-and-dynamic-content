document.getElementById('addItem').addEventListener('click', function() {
  var itemInput = document.getElementById('itemInput');
  var itemsList = document.getElementById('itemsList');
  var errorMessage = document.getElementById('errorMessage');

  if (itemInput.value.trim() === '') {
      errorMessage.textContent = 'Enter Something?';
      errorMessage.style.color = 'white';
      return;
  }

  errorMessage.textContent = ''; 

  var li = document.createElement('li');
  li.textContent = itemInput.value;
  li.style.color = 'white';
  li.style.margin = '10px 0';
  li.style.padding = '10px';
  li.style.cursor = 'pointer';
  
  li.onmouseover = function() {
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
  }

  li.onmouseout = function() {
    this.style.backgroundColor = '';
    this.style.color = 'white';
  }

  li.onclick = function() {
    if (this.style.textDecoration === 'line-through') {
      this.style.textDecoration = 'none';
    } else {
      this.style.textDecoration = 'line-through';
    }
  }


  itemsList.appendChild(li);

  itemInput.value = ''; 
});

document.getElementById('clearAll').addEventListener('click', function() {
  var isConfirmed = confirm('Are you sure you want to clear all items?');
  if (isConfirmed){
    var itemsList = document.getElementById('itemsList');
    while (itemsList.firstChild) {
      itemsList.removeChild(itemsList.firstChild);
      }
  }
});
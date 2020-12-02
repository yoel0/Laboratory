function tree() {
  const line = document.getElementById('lines').value;
  let str = '';
  
  for(let i = 1; i <= line; i++) {
    for(let t = line; t >= i; t--) {
      str += '&nbsp '; 
    }
    for(let k = 1; k <= (i * 2 - 1); k++) {
      str += '^';
    }
    str += "<br>";
  }
  for(let i = 1; i <= 3; i++) {
    for(let t = 1; t <= line; t++) {
      str += '&nbsp ';
    }
    str += '*<br>';
  }
  document.getElementById('msg').innerHTML = str;
}
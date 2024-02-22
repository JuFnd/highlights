document.querySelector('.input-field').addEventListener('input', (event) => {
  let edit = document.querySelector('.output-field');
  let inputFieldText = event.target.innerHTML
  let words = ['int', 'char', 'bool', 'include'];
  inputFieldText = inputFieldText.replace(/<br\s*\/?>/ig, "");
  inputFieldText = inputFieldText.replace(/<div><\/div>/g, '');


  words.forEach((word) => {
    const regex = new RegExp(`(${word})`, 'gi');
    inputFieldText = inputFieldText.replace(regex, `<span class="highlight" style="color: red;">${word}</span>`)
  });

  const lastIndex = inputFieldText.length - 1;
  if (lastIndex >= 0 && !inputFieldText[lastIndex].match(/[\r\n]/)) {
    inputFieldText += '<span class="caret">|</span>';
    console.log(inputFieldText);
  } else {
    inputFieldText = inputFieldText.replace(/<\/?span[^>]*class="caret"\s*\/*>/gi, '');
  }
  edit.innerHTML = inputFieldText;
});
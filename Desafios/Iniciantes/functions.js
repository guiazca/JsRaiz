
getValue = (inputId) => {
  return document.getElementById(inputId).value;
}
deleteAnswer =(className = "answer") => {
  var element = document.getElementsByClassName(className);
  if (element) {
    while (element.length > 0) element[0].remove();
  }
}
addAnswer = (htmlTag, innerHTML) => {
  var tagElement = document.createElement(htmlTag);
  tagElement.classList.add("answer");
  tagElement.innerHTML = innerHTML;
  return tagElement;
}

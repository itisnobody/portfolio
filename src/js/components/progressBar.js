const progressBar = function() {
  const data = document.querySelectorAll('.progress__data'),
        bar = document.querySelectorAll('.progress__bar span');
  data.forEach((item, i) => bar[i].style.width = item.innerHTML);
};

export default progressBar;

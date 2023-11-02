const countdown = (num, callback) => {
  if (num > 0) {
    document.body.innerText = num;
    setTimeout(() => {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    callback();
  }
};

countdown(10, () => {
  document.body.innerText = "Happy Independence Day!";
});

function getMessage() {
  fetch('/api/hello')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('result').innerText = data.message;
    })
    .catch((err) => {
      document.getElementById('result').innerText = 'حدث خطأ!';
    });
}

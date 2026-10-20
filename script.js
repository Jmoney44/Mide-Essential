function go() {
  var name = document.getElementById('nm').value.trim();
  var message = document.getElementById('ms').value.trim();
  var text =
    'Hi Mide Essential, ' +
    (name ? 'my name is ' + name + '. ' : '') +
    (message || 'I would like to place an order.');

  window.open(
    'https://wa.me/2347016128148?text=' + encodeURIComponent(text),
    '_blank'
  );
}

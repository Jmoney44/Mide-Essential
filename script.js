function go(){var n=document.getElementById('nm').value.trim(),m=document.getElementById('ms').value.trim();
var t='Hi Mide Essential, '+(n?'my name is '+n+'. ':'')+(m||'I would like to place an order.');
window.open('https://wa.me/2347016128148?text='+encodeURIComponent(t),'_blank');}

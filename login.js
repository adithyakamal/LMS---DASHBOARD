document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  function showError(field, msg){
    const el = document.querySelector(`.error[data-for="${field}"]`);
    if(el) el.textContent = msg || '';
  }

  function validateEmail(v){
    return /\S+@\S+\.\S+/.test(v);
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    let ok = true;
    if(!email.value.trim()){ showError('email','Email is required'); ok = false; }
    else if(!validateEmail(email.value.trim())){ showError('email','Enter a valid email'); ok = false; }
    else showError('email','');

    if(!password.value){ showError('password','Password is required'); ok = false; }
    else if(password.value.length < 6){ showError('password','Minimum 6 characters'); ok = false; }
    else showError('password','');

    if(!ok) return;

    // Simulate login (replace with real auth call)
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Signing in...';
    setTimeout(()=>{
      btn.disabled = false; btn.textContent = 'Sign in';
      // On success, redirect or show message
      alert('Signed in — replace with real authentication flow.');
    }, 800);
  });
});

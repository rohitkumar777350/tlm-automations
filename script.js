document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.getElementById('quoteForm').addEventListener('submit',function(e){
  e.preventDefault();
  const d=new FormData(this);
  const subject=encodeURIComponent('New TLM Automations Website Enquiry - '+d.get('company'));
  const body=encodeURIComponent(`Name: ${d.get('name')}\nCompany: ${d.get('company')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\n\nRequirement:\n${d.get('message')}`);
  window.location.href=`mailto:madhu@tlmautomations.com?subject=${subject}&body=${body}`;
});
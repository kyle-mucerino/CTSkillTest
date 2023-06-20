const accordionTabs = document.querySelectorAll('nav li');

function toggleAccordionContent() {
  const content = this.nextElementSibling;
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

accordionTabs.forEach(tab => {
  tab.addEventListener('click', toggleAccordionContent);
});
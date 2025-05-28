document.addEventListener('DOMContentLoaded', () => {
  const componentMenuToggle = document.querySelector('.nav-component .nav-toggle')
  if (componentMenuToggle && componentMenuToggle.getAttribute('aria-expanded') === 'false') {
    componentMenuToggle.click()
  }
})

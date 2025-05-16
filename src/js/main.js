// 移动端菜单交互
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 页面滚动时改变导航栏样式
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
      } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
      }
    });
  }

  // FAQ 折叠功能
  const faqButtons = document.querySelectorAll('#faq button');
  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
        this.querySelector('svg').classList.remove('transform', 'rotate-180');
      } else {
        content.style.display = 'block';
        this.querySelector('svg').classList.add('transform', 'rotate-180');
      }
    });
  });
});
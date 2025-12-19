// Script para atualizar rodapé dinamicamente
// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const productParam = urlParams.get('product');
const emailParam = urlParams.get('email');
const phoneParam = urlParams.get('phone');

// Update company name in content
const companyName = productParam || 'Virilis Science';
const companyElements = document.querySelectorAll('#company-name, #company-name-2, #company-name-3, #company-name-4, #company-name-5, #company-name-6, #company-name-7, #company-name-8');
companyElements.forEach(el => {
  if (el) el.textContent = companyName;
});

// Update email addresses in content
const supportEmail = emailParam || 'info@virilisscience.com';
const emailLinks = document.querySelectorAll('#support-email, #support-email-2');
emailLinks.forEach(link => {
  if (link) {
    link.href = 'mailto:' + supportEmail;
    link.textContent = supportEmail;
  }
});

// Update footer site name
const footerSiteNameEl = document.getElementById('footer-site-name');
if (footerSiteNameEl) {
  const footerSiteName = productParam
    ? productParam.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + '.com'
    : 'HealthAlertNewsletter.com';
  footerSiteNameEl.textContent = footerSiteName;
}

// Update footer email
const footerEmailEl = document.getElementById('footer-email');
if (footerEmailEl) {
  footerEmailEl.href = 'mailto:' + supportEmail;
  footerEmailEl.textContent = supportEmail;
}

// Update footer phone if provided
const footerPhoneContainer = document.getElementById('footer-phone-container');
const footerPhone = document.getElementById('footer-phone');
if (phoneParam && footerPhoneContainer && footerPhone) {
  footerPhoneContainer.style.display = 'inline';
  footerPhone.textContent = phoneParam;
}

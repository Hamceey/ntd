const API_URL = 'https://script.google.com/macros/s/AKfycbyfZcDAVyFXRgDu9XdhjBpLDp8FJBJ7kt1R0EYIitdNNUy8t-b0TGuB0niFXdh4boUxBw/exec'; // ← make sure /exec is there

export const submitContactForm = async (data) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({ formType: 'contact', ...data })
  });
};

export const submitGetStartedForm = async (data) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({ formType: 'getstarted', ...data })
  });
};

export const submitConsultationForm = async (data) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({ formType: 'consultation', ...data })
  });
};

export const submitNewsletterSignup = async (email, source = 'website') => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      formType: 'newsletter',
      email,
      source,
      timestamp: new Date().toISOString()
    })
  });
};
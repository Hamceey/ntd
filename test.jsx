  <button className="bg-white text-deep-tide-blue px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition">
              View Our Services
            </button>


   <button
            onClick={() => scrollToSection('contact')}
            className="bg-quantum-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get Started
          </button>
google id = 1Y26wzLfTx7F9vLj2lWvvDMzbmuKMrJG51CbWHayejxs
api url....https://script.google.com/macros/s/AKfycbyfZcDAVyFXRgDu9XdhjBpLDp8FJBJ7kt1R0EYIitdNNUy8t-b0TGuB0niFXdh4boUxBw/exec
curl -X POST "https://script.google.com/macros/s/AKfycbyfZcDAVyFXRgDu9XdhjBpLDp8FJBJ7kt1R0EYIitdNNUy8t-b0TGuB0niFXdh4boUxBw/exec" \
-H "Content-Type: application/json" \
-d '{"formType":"newsletter","email":"test@example.com","source":"test"}'



api
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
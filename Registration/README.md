# 🔐 AuthVault — User Login Validation System

A clean, fully functional **Login & Registration** system built with pure HTML, CSS, and JavaScript — no frameworks, no backend required. User data is stored in the browser's `localStorage`, simulating a real database.

---

## ✨ Features

- 🗄️ **LocalStorage Database** — stores registered users persistently in the browser
- 🔒 **Password Hashing** — passwords are hashed before storage (demo-safe)
- 💪 **Password Strength Meter** — visual 4-level indicator
- ✅ **Real-time Field Validation** — instant feedback on all inputs
- 👁️ **Toggle Password Visibility** — show/hide password toggle
- 💾 **Remember Me** — saves session across browser restarts
- 📧 **Forgot Password** — demo flow with email simulation
- 🎉 **Validation Complete Screen** — shown after successful login
- 📱 **Fully Responsive** — works on mobile, tablet, desktop

---

## 🚀 Quick Start

```bash
git clone https://github.com/your-username/authvault.git
cd authvault
# Open index.html in your browser — no server needed!
open index.html
```

---

## 🔑 Demo Credentials

Two accounts are pre-seeded automatically on first load:

| Name | Email | Password |
|------|-------|----------|
| Demo User | `user@demo.com` | `Demo@1234` |
| Admin User | `admin@demo.com` | `Admin@5678` |

> You can also **register your own account** using the Register tab.

---

## 📁 Project Structure

```
authvault/
└── index.html    ← All HTML, CSS, and JS in one file
└── README.md     ← You are here
```

---

## 🛡️ Password Rules

Passwords must meet these requirements:

- Minimum **8 characters**
- At least **one uppercase letter**
- At least **one number**
- Optional special character for a "Strong" rating

---

## 📝 Notes

- This is a **front-end demo** — for production, replace `localStorage` with a real backend (Node.js, Firebase, Supabase, etc.)
- Passwords use a client-side pseudo-hash — **not suitable for production use as-is**

---

## 📄 License

MIT © 2025 AuthVault

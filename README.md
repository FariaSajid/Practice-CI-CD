# CI/CD Practice App

Chhota HTML + CSS + JavaScript app jis par hum pipeline practice karte hain.
Pipeline: **GitHub Actions** (lint + test) -> **Vercel** (auto deploy).

## Files kya hain

| File | Kaam |
| --- | --- |
| `public/index.html`, `style.css`, `script.js` | App (jo website par dikhta hai) |
| `public/utils.js` | Chhote functions jinke tests likhe hain |
| `tests/*.test.js` | Tests (pipeline mein chalte hain) |
| `eslint.config.js` | Lint ke rules |
| `.github/workflows/ci.yml` | Pipeline ki file (YAML format) |
| `vercel.json` | Vercel ko batata hai k site `public` folder mein hai |
| `package.json` | `npm run lint` aur `npm test` commands |

## Apne computer par chalana

```
npm install
npm run lint
npm test
npx serve public        # site browser mein dekhne ke liye
```

## Vercel ke 3 secrets (GitHub Settings -> Secrets and variables -> Actions)

| Secret name | Kahan se milega |
| --- | --- |
| `VERCEL_TOKEN` | Vercel -> Account Settings -> Tokens -> Create |
| `VERCEL_ORG_ID` | `.vercel/project.json` mein `orgId` (neeche step dekho) |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` mein `projectId` |

IDs nikalne ke liye (sirf ek baar):

```
npm install --global vercel
vercel login
vercel link
```

`vercel link` ke baad `.vercel/project.json` ban jati hai. Is folder ko GitHub par
push mat karna (`.gitignore` mein pehle se hai).

# Gamesii frontend - 23 novembre 2026

Static frontend for https://gamesii.github.io/.

## Upload
1. Extract the ZIP.
2. Open https://github.com/gamesii/gamesii.github.io
3. Add file > Upload files. Upload the CONTENTS of this folder (index.html,
   assets/, brawl-stars/, fonts/, region-unavailable/, and .nojekyll), not the ZIP
   or an extra containing folder. Include .nojekyll if your file browser shows it.
4. Commit to main.
5. Settings > Pages > Deploy from a branch > main > /(root) > Save.
6. Wait until the Pages deployment succeeds in Actions.

## Backend
https://gamesii-api.yassirdouieb100.workers.dev
Production variables:
- ADBLUEMEDIA_OFFERS_API_KEY: Secret, stored only in Cloudflare
- ADBLUEMEDIA_USER_ID: 781662
- ALLOWED_ORIGIN: https://gamesii.github.io

The backend is already deployed separately. Do not upload worker.js or secrets.
No ProPush scripts, tags, service workers or verification files are included.
Google Analytics and TikTok Pixel from the source have not been modified.

## Verification limits
The health check confirms configuration presence, not live AdBlueMedia access.
Offers are limited to a maximum of three eligible results; the network may
return fewer or none for a device/location. No fabricated offers are added.
The backend does not deliver items, verify game accounts or store manual claims.
The original backend's Morocco restriction remains on offers. GitHub static
hosting cannot reproduce Cloudflare's page-level geographic restriction.
The source font stylesheet references a missing local font; browser fallback
fonts remain unchanged from the source.

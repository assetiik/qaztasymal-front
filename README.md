# Qaztasymal landing page

Static, responsive Russian/Kazakh landing page. Serve `dist/` as the web root; no build or runtime dependencies.

## Content

- Taxi, courier, shops, pharmacies and restaurants service tabs.
- Real supplied screenshot, original brand logo and a generated hero illustration.
- App download dialog with customer / business switch and an official universal download QR.
- QaztasymalPro business app links.
- Full bilingual company details, phone and email links, BIN copy action.
- Responsive navigation, keyboard-accessible tabs/dialog, reduced-motion support.

Translations and app links are in `dist/app.js`; document content in `dist/index.html`; styles in `dist/styles.css`.

## Sources

- Company details: supplied by the user.
- Screenshot: supplied by the user.
- Logo: https://static.tildacdn.pro/tild3533-3466-4338-b430-393262623131/QT_1.png
- Customer app: https://apps.apple.com/kz/app/qaztasymal-kz/id6473836611 and https://play.google.com/store/apps/details?id=com.thousand.qaztasymal
- Business app: https://apps.apple.com/kz/app/qaztasymalpro/id6751494692 and https://play.google.com/store/apps/details?id=com.thousand.qaztasymalpro
- Universal customer app download: https://onelink.to/ezrhqf (linked from the original company site).
- Privacy policy: https://qaztasymal.kz/policymob.html
- Self-hosted Manrope font from Google Fonts.

## Hero illustration

Built-in Imagegen was used. Final project path: `dist/assets/hero.png`.

Prompt: Premium 3D studio illustration for a Kazakh taxi and courier app. Modern white sedan taxi with turquoise rear wrap and yellow taxi sign, turquoise delivery scooter and bags, cardboard parcel and a floating map pin, abstract pale city blocks, very pale mint background #eef8f6. Polished commercial CGI with soft shadows. No text, logos or people. Square composition with all objects inside image boundaries.

## Supplied documents, 22 October 2026

Added privacy and support pages at `/privacy/` and `/support/`, with `.html` aliases. Their Russian text is taken from the user-supplied files. Corrected the email deletion-request wording to ask the sender to include their registered phone number. Dedicated support numbers from the supplied page are preserved separately from the main corporate phone. The original policy revision date remains 21 October 2026.

`politika.html` was excluded because it belongs to Haragun. No user agreement was supplied, so no agreement or broken agreement link was added.

# YUMM Website

Next.js implementation of **DamigosWebsite** (Figma file `DDgNR7fl9dCCuHkyXyi19v`), matching every desktop (`1280px`) and mobile (`390px`) screen stitch-by-stitch.

## Design tokens

Colours and typography follow Figma variables: plum brand `#381932`, milk background `#fff3e6`, **Plus Jakarta Sans** + **Instrument Serif**. Static assets from Figma MCP live under `public/yumm-assets/`.

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes & Figma Screen Mapping

| Path | Figma Frame(s) | Description |
|------|----------------|-------------|
| `/` | `01 Home` (`94:9974`), `01a Products menu open` (`94:10266`), `Mobile 01a/01b Menu` (`94:9162`, `94:9164`) | Announcement bar, desktop/mobile nav + mega-menu, 02 Hero, 03 Trust strip, 04 Restaurant problem, 05 How it works (titanium iPhone frames + curved arrow), 06 WhatsApp demo (4-step scroll story), 07 Feature overview (hover-expand cards), 08 Economics teaser (interactive GMV/commission sliders), 09 Use cases, 10 FAQ, 11 Closing CTA with inline waitlist form, Footer |
| `/ordering` | `02 WhatsApp ordering` (`94:10313`) | 01 Hero with live chat mockup, 02 Demo (4-step scroll story), 03 Entry points (5 tiles), 04 Mini-site and offers, 05 Under the hood (5 layers), 07 Loyalty bridge, 08 Closing CTA |
| `/packaging` | `03 Packaging QR` (`94:10494`) | 01 Hero, 02 Sticker preview (English, Hindi, Kannada, Telugu), 03 Four surfaces (Bag, Box lid, Tissue, Sticker), 04 Print, pack, dispatch, 05 One guest identity, Page CTA |
| `/loyalty` | `04 Loyalty and CRM` (`94:10625`) | 01 Hero with sample dashboard, 02 Digital card (`160 pts`), 03 Redeem both ways (In the chat & At the table), 04 Interactive 5-slider Reward Calculator, 05 Data and consent, Page CTA |
| `/campaigns` | `05 Campaigns` (`94:10829`) | 01 Hero with campaign schedule, 02 Campaign types bento grid, 03 The loop (5 steps + approval card), 04 Interactive AI posters chip selector, 05 Automated loop with 4-node progress ring, Page CTA |
| `/delivery` | `06 Delivery` (`94:11010`) | 01 Hero with 4 numbered step pills, 02 Pay in chat (Razorpay/Meta/WhatsApp/UPI rails + 4 steps), 03 Kitchen packs photos, 04 Who carries the order (Own riders, Shadowfax, Dunzo, Porter), 05 Status in chat, Page CTA |
| `/pricing` | `07 Pricing` (`94:11176`) | 01 Hero with Marketplace vs Direct on WhatsApp comparison (`₹340` vs `₹447`), 03 Interactive 3-step Direct Order Calculator (with expandable "Edit costs"), Page CTA |
| `/calculator` | `08 Pricing calculator` (`94:11303`) | Standalone 3-step Direct Order Calculator + Page CTA (linked from the Products mega-menu and Home economics teaser) |
| `/waitlist` | `09 Waitlist` & states `09a`–`09f`, `09d2` (`94:11393`..`94:11656`, `94:11741`) | Hero + "What happens next" card + interactive waitlist form supporting all Figma states: Empty, Filled, Sending, You're on the list + 5 optional questions, All set (answers sent), On the list (questions skipped), Error (type `"error"` in restaurant name), and Already on the list (type `"already"` in restaurant name) |
| `/privacy` | `11 Privacy policy` (`94:11717`) | 760px article layout + dashed content-needed callout + Back to home |
| `/terms` | `12 Terms of use` (`94:11729`) | 760px article layout + dashed content-needed callout + Back to home |
| `/order` | `13 Order food and dine in` (`94:11752`) | Consumer discovery screen: 01 Hero with location/search bar + Food delivery & Dine in service cards, 02 "What are you craving?" 14-dish grid, 03 "Book a table near you" 4-restaurant cards |
| `404` (`not-found.tsx`) | `10 Page not found (404)` (`94:11706`) | `404` display, `"This page isn’t on the menu"`, Back to home + Join the waitlist CTAs |

# The Liquor District — GitHub Pages Website

A responsive inquiry website for The Liquor District mobile bartending and event staffing business.

## Files
- `index.html` — site content and inquiry form
- `styles.css` — visual design, responsive layouts, colors and typography
- `script.js` — mobile navigation and inquiry-form email draft
- `assets/` — logo and supplied event photos
- `CNAME` — custom domain configuration for `www.theliquordistrict.co`

## Preview locally
Open `index.html` in a browser. For best results, use a local static server or the GitHub Pages preview after publishing.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `the-liquor-district`.
2. Upload the contents of this folder (upload `index.html`, `styles.css`, `script.js`, `CNAME`, and the `assets` folder—not the ZIP itself).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. In the custom domain field, enter `www.theliquordistrict.co` if GitHub has not picked it up from `CNAME`.
6. At the domain provider, configure the DNS record for `www` as a CNAME pointing to `<your-github-username>.github.io`. Add GitHub Pages apex records for `theliquordistrict.co` only if you also want the root domain to work. DNS changes can take time to propagate.
7. Once DNS is verified, enable **Enforce HTTPS** in Settings → Pages.

## Inquiry form note
The inquiry form validates the required fields and opens a pre-filled email to `theliquordistrict@gmail.com`. The visitor must send the email from their email app to complete the inquiry. This static version does not store submissions in a database. To collect inquiries automatically without relying on the visitor's email app, connect a form backend such as Formspree or a serverless endpoint.

## Business details included
- Website: https://www.theliquordistrict.co
- Phone: 612-430-3403
- Email: theliquordistrict@gmail.com
- Instagram: @theliquordistrictbartending
- Facebook: The Liquor District Bartending & staffing. Co

Review contact links and social destinations before launch.

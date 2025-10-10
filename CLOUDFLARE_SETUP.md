# Cloudflare Pages Setup Guide

## Environment Variables Configuration

For the contact form and newsletter to work on Cloudflare Pages, you need to set up environment variables properly.

### 1. Local Development (.env.local)

Create a `.env.local` file in the project root with:

```bash
RESEND_MAIL=re_your_actual_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_here
NEXT_PUBLIC_BASE_URL=https://hestia-site-solutions.com
GOOGLE_VERIFICATION=your_verification_code
```

### 2. Cloudflare Pages Dashboard Setup

**Important:** For production, you MUST add these environment variables in the Cloudflare Pages dashboard.

#### Steps:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → Your project (`hestia-site-v2`)
3. Go to **Settings** → **Environment variables**
4. Add the following variables:

| Variable Name | Type | Value | Environment |
|--------------|------|-------|-------------|
| `RESEND_MAIL` | Secret | `re_your_api_key` | Production & Preview |
| `RESEND_AUDIENCE_ID` | Secret | `your_audience_id` | Production & Preview |
| `NEXT_PUBLIC_BASE_URL` | Plain text | `https://hestia-site-solutions.com` | Production |
| `GOOGLE_VERIFICATION` | Secret | `your_code` | Production (optional) |

5. Click **Save** after adding each variable
6. **Redeploy** your site for changes to take effect

### 3. Verify Setup

After deploying, test:
- Contact form: `/cleaning-contact`
- Newsletter signup: Footer on any page

Check the Cloudflare Pages **Functions logs** for any errors.

### 4. Troubleshooting

#### "Email service not configured" error
- ✅ Check that `RESEND_MAIL` is set in Cloudflare Pages dashboard
- ✅ Verify the API key is correct (starts with `re_`)
- ✅ Redeploy after adding environment variables

#### Environment variables not working
- ✅ Make sure variables are set for the correct environment (Production/Preview)
- ✅ Redeploy the project
- ✅ Check Cloudflare Functions logs for errors

#### Local development not working
- ✅ Create `.env.local` file (not committed to git)
- ✅ Add all required variables
- ✅ Restart dev server: `npm run dev`

### 5. Cloudflare Bindings (Alternative Method)

If environment variables still don't work, you can use Cloudflare bindings in `wrangler.toml`:

**Note:** Secrets should NOT be in wrangler.toml. Use Cloudflare dashboard for secrets.

## Testing

### Local Testing
```bash
npm run dev
```
Visit `http://localhost:3000/cleaning-contact` and test the form.

### Production Testing
After deployment, fill out the contact form and check `info@hestiasite.com` for the email.

## Important Notes

- ⚠️ **Never commit** `.env.local` to git
- ⚠️ **Always use Cloudflare dashboard** for production secrets
- ✅ Server actions work with edge runtime
- ✅ No Resend SDK needed (we use REST API directly)
- ✅ Compatible with Cloudflare Workers

## Support

- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Resend API: https://resend.com/docs
- Next.js on Cloudflare: https://github.com/cloudflare/next-on-pages


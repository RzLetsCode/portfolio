# EmailJS Setup Guide for Contact Form

## Overview

This guide explains how to set up EmailJS to enable the contact form on the portfolio website to send emails to your inbox.

## What is EmailJS?

EmailJS is a free service that allows you to send emails directly from your frontend application without needing a backend server. It's perfect for static sites hosted on GitHub Pages.

## Step-by-Step Setup

### Step 1: Create an EmailJS Account

1. Visit [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** (or **"Create new account"**)
3. Choose **"Sign up with Google"** or create with email
4. Verify your email address
5. You'll be redirected to the dashboard

### Step 2: Create an Email Service

1. In the EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Create Service"** button
3. Select your email provider:
   - For Gmail: Select **"Gmail"**
   - For Outlook: Select **"Outlook"**
   - For custom domain: Select **"Other SMTP"**

4. Connect your email:
   - For Gmail:
     - Enter your Gmail address
     - You may need to create an [App Password](https://myaccount.google.com/apppasswords) for Gmail
     - Use that app password in EmailJS
   - For other providers: Follow the on-screen instructions

5. Copy the **Service ID** (looks like `service_xxxxxxx`)
   - Save this securely - you'll need it for the environment variables

### Step 3: Create an Email Template

1. Click **"Email Templates"** in the sidebar
2. Click **"Create New Template"** button
3. Fill in the template details:
   - **Name**: Contact Form Template
   - **Subject**: New Message from {{from_name}}
   - **Content Template**:

```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Message:
{{message}}
```

4. In the variables section, add:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `from_phone` - Sender's phone
   - `message` - The purpose/message
   - `to_email` - Your email (rajeshkumar080817@gmail.com)

5. **Save Template** and copy the **Template ID** (looks like `template_xxxxxxx`)
   - Save this securely

### Step 4: Get Your Public API Key

1. Click **"Account"** in the sidebar
2. Find **"Public Key"** section
3. Copy your **Public Key** (looks like `xxxxxxxxxxxxxxxxxxxxxxxx`)
   - Save this securely

## Step 5: Add Environment Variables

### For Local Development

1. Create a `.env.local` file in the root directory of your project:

```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

2. Replace the values with your actual IDs from EmailJS

### For GitHub Pages Deployment

1. Go to your GitHub repository settings
2. Navigate to **Settings → Environments → Production** (or create a new environment)
3. Add **Repository secrets** with the same variables:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

4. Update your GitHub Actions workflow (`.github/workflows/deploy.yml`):

```yaml
env:
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }}
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_SERVICE_ID }}
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID }}
```

## Step 6: Install Dependencies

The contact form requires the EmailJS library. Add it to your project:

```bash
npm install @emailjs/browser
```

Or if using yarn:

```bash
yarn add @emailjs/browser
```

## Step 7: Test the Contact Form

1. Visit your portfolio website
2. Navigate to the Contact page (or click "Email Me" button)
3. Fill out the form with test information
4. Click "Send Message"
5. You should receive an email at your configured email address

## Troubleshooting

### "Error sending message" appears

**Possible causes:**
- Environment variables not properly configured
- Public key is invalid or missing
- Service ID or Template ID is incorrect
- Email service not properly connected in EmailJS

**Solutions:**
1. Check browser console (F12 → Console) for detailed error messages
2. Verify all three environment variables are set correctly
3. Re-check the values in EmailJS dashboard
4. Ensure Gmail app password is used (if using Gmail)

### Emails not received

**Possible causes:**
- Emails going to spam folder
- Email template not properly configured
- Service connection not verified in EmailJS

**Solutions:**
1. Check your spam/junk folder
2. Re-verify your email service in EmailJS
3. Test the template directly from EmailJS dashboard

### "Email service configuration needed" message

This means the environment variables are not loaded. Make sure:
1. Variables are correctly added to `.env.local` (for local development)
2. Variables are added to GitHub repository secrets (for production)
3. Rebuild/redeploy the site after adding variables

## Security Notes

⚠️ **Important**: 
- Your **Public Key** can be safely exposed (it's meant to be public)
- Your **Service ID** and **Template ID** are also safe to expose
- However, these should still be treated as environment variables for best practices
- Never commit sensitive keys directly to the repository

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails/month
- ✅ Unlimited templates
- ✅ Unlimited services
- ✅ Full features

If you exceed limits, you can upgrade to a paid plan.

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Contact Support](https://www.emailjs.com/contact-us/)
- [GitHub Issues](https://github.com/RzLetsCode/code2career_ai/issues)

## Additional Resources

- [EmailJS Tutorials](https://www.emailjs.com/docs/tutorial/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)

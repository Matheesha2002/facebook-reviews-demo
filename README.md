# Facebook Reviews Integration Demo

A Next.js demo application that compares multiple methods for displaying Facebook Page reviews inside a web application.

This project was created to test and compare four different Facebook reviews integration methods:

- Meta Graph API
- SociableKIT
- Elfsight
- Taggbox

## Live Demo

https://facebook-reviews-demo.vercel.app

## GitHub Repository

https://github.com/Matheesha2002/facebook-reviews-demo

---

## Project Overview

The main goal of this project is to find different ways to display Facebook Page reviews inside a web application.

The application compares a direct API-based solution with third-party widget solutions.

Each integration method is available on a separate page so that they can be tested and compared individually.

---

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Meta Graph API
- SociableKIT
- Elfsight
- Taggbox
- Vercel
- GitHub

---

## Integration Methods

### 1. Meta Graph API

Facebook Page reviews are fetched directly using the Meta Graph API.

Required permissions used during testing:

```text
pages_show_list
pages_read_engagement
pages_read_user_content

Advantages
- Direct access to Facebook review data
- Full control over the user interface
- No third-party widget branding
- Review data can be customized before displaying
Limitations
- Requires a Meta Developer App
- Requires Facebook permissions
- Access token management is required
- Access tokens may expire
- More technical setup and maintenance are required
During testing, an expired access token returned:
Error code: 190
Error subcode: 463
Session has expired

The issue was solved by generating a new Page Access Token and updating the environment variable.
2. SociableKIT
SociableKIT is a third-party service that provides a Facebook Page Reviews widget.
Advantages
- Easy to integrate
- Minimal coding required
- Facebook authentication is handled by the service
- Customizable widget design
Limitations
- Free plan has restrictions
- Manual sync may be required
- Review synchronization can be delayed
- During testing, the widget stayed at 70% while syncing
- Sync requests may become temporarily unavailable during high demand
- Third-party dependency
3. Elfsight
Elfsight provides an embeddable Facebook Reviews widget.
Advantages
- Very easy setup
- Simple embed code
- Good default design
- Minimal development work required
Limitations
- Free plan has view limits
- Free branding may appear
- New Facebook reviews may not update immediately
- Review data may be cached
- Third-party service dependency
During testing, only two reviews were initially displayed even though three reviews existed on the Facebook Page.
4. Taggbox
Taggbox was used to collect and display Facebook Page reviews using a widget.
Advantages
- Easy Facebook Page connection
- Imported all test reviews successfully
- Customizable layouts
- Simple website embed code
Limitations
- Free plan limitations
- Branding may appear
- Update frequency may be limited
- External scripts are required
- Third-party service dependency
Application Structure
app/
├── api/
│   └── facebook-reviews/
│       └── route.ts
│
├── components/
│   ├── Navbar.tsx
│   ├── FacebookReviews.tsx
│   ├── SociableKitReviews.tsx
│   ├── ElfsightReviews.tsx
│   └── TaggboxReviews.tsx
│
├── graph-api/
│   └── page.tsx
│
├── sociablekit/
│   └── page.tsx
│
├── elfsight/
│   └── page.tsx
│
├── taggbox/
│   └── page.tsx
│
├── layout.tsx
├── page.tsx
└── globals.css

Pages
Home
/

Displays an overview of all four integration methods.
Meta Graph API
/graph-api

Displays Facebook reviews fetched directly through the Meta Graph API.
SociableKIT
/sociablekit

Displays the SociableKIT Facebook Reviews widget.
Elfsight
/elfsight

Displays the Elfsight Facebook Reviews widget.
Taggbox
/taggbox

Displays the Taggbox Facebook Reviews widget.
Environment Variables
Create a .env.local file in the project root.
FACEBOOK_PAGE_ID=your_facebook_page_id
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_access_token

Do not commit .env.local to GitHub.
The access token must remain private and should only be used on the server side.
Run Locally
Clone the repository:
git clone https://github.com/Matheesha2002/facebook-reviews-demo.git

Go to the project directory:
cd facebook-reviews-demo

Install dependencies:
npm install

Create the .env.local file and add the required Facebook environment variables.
Start the development server:
npm run dev

Open:
http://localhost:3000

Production Build
To verify the production build:
npm run build

Then run:
npm start

Deployment
The project is deployed using Vercel.
Production environment variables were configured in Vercel:
FACEBOOK_PAGE_ID
FACEBOOK_PAGE_ACCESS_TOKEN

If the Facebook access token expires, update the token in:
Vercel
→ Project
→ Environment Variables
→ FACEBOOK_PAGE_ACCESS_TOKEN

Then redeploy the application.
Comparison Summary
Method	Setup Difficulty	Customization	Token Management	Main Limitation
Meta Graph API	Higher	High	Required	Token expiry and technical setup
SociableKIT	Easy	Medium	Handled by provider	Sync delays
Elfsight	Very Easy	Medium	Handled by provider	Free plan/view limits
Taggbox	Easy	Medium	Handled by provider	Free plan/update limitations


Key Findings
The Meta Graph API provides the most control because review data is fetched directly and can be displayed using a custom interface.
However, it requires more technical setup and access-token maintenance.
Third-party services such as SociableKIT, Elfsight, and Taggbox are easier to integrate because they provide ready-made widgets.
Their main disadvantages are free-plan restrictions, branding, synchronization delays, and dependency on external services.
Conclusion
This project demonstrates four practical methods for integrating Facebook Page reviews into a Next.js web application.
For applications that require full design control and direct access to review data, the Meta Graph API is suitable.
For applications that require a faster and simpler integration, third-party widgets such as Elfsight, SociableKIT, or Taggbox can reduce development effort.
Author
Kavindu Matheesha
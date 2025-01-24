# SAAS Automation Builder  

A powerful **B2C SaaS** platform built from the ground up to demonstrate the intricate process of creating an automation ecosystem. Every connection has been custom-developed without using integration libraries—because we wanted to show you what it takes to make it all work!  

---

## Features  

### 🤯 B2C SaaS Platform
- 🏢 **Google Drive Integration**  
  - Connect users' Google Drive to the app.  
  - Watch for changes in Google Drive and trigger automations.  
- 🚀 **Slack Notifications**  
  - Send notifications and custom messages to Slack channels.  
- 💻 **Discord Notifications**  
  - Send notifications and custom messages to Discord servers.  
- 🔄 **Notion Integration**  
  - Create entries in a Notion database seamlessly.  
- 🛒 **Stripe Payment System**  
  - Support for month-to-month subscriptions.  
  - Payments based on credits consumed.  

### 🛠️ Workflow Automation Builder  
- 📊 **Sequence of Actions**  
  - Create a series of actions to execute after a trigger event.  
- 💰 **Drag-and-Drop Node Builder**  
  - Visually build automation workflows with ease.  
- 🚨 **Mini Map**  
  - View all workflow nodes at a glance.  
- ⭐️ **Infinite Canvas**  
  - Never run out of space for creating automation flows.  
- ✨ **Expandable Sidebar**  
  - Drag-and-drop functionality with a sleek expandable sidebar.  
- ⚡️ **Aceternity UI**  
  - Intuitive interface to streamline user experience.  

### 🌟 Design and Usability
- ☀️ **Light & Dark Mode**  
  - Aesthetic themes for different environments.  
- 📄 **Landing Page**  
  - A beautiful, fully functional landing page to showcase the app.  

---

## Built With  

- **Frontend:** React.js, Next.js  
- **Backend:** Node.js, Express  
- **Database:** Neon Tech  
- **Authentication:** Clerk  
- **Payments:** Stripe  
- **Styling:** TailwindCSS  
- **Hosting:** Vercel  

---

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/saas-automation-builder.git  
   cd saas-automation-builder  
2. Install Dependencies**  
   ```bash
   npm install
## Set up Environment Variables

Create a .env.local file in the root directory and add the following variables:

- sCLERK_FRONTEND_API=<your-clerk-frontend-api>
- CLERK_API_KEY=<your-clerk-api-key>
- NEON_DATABASE_URL=<your-neon-database-url>
- STRIPE_SECRET_KEY=<your-stripe-secret-key>
- GOOGLE_API_KEY=<your-google-api-key>
- NOTION_API_KEY=<your-notion-api-key>
- SLACK_API_KEY=<your-slack-api-key>
- DISCORD_API_KEY=<your-discord-api-key>

## Run the Development Server

npm run dev

## Usage

1. Authenticate Users: Sign up or log in using Clerk.
2. Connect Services: Add integrations for Google Drive, Slack, Discord, Notion, and Stripe.
3. Build Workflows: Use the drag-and-drop node builder to create workflows.
4. Monitor Automations: View real-time changes and notifications.
5. Manage Payments: Track credit usage and subscription plans through Stripe.

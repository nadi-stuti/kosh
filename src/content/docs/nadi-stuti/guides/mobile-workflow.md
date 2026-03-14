---
title: Mobile Workflow
description: This walkthrough guide give a easy tutorial of setting up github and obsidian on mobile to easily edit and create markdown files for kosh
---
Video walkthrough: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/M55DPiDDLTc?si=Frvku7muf4BD-W9i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Mobile Obsidian + GitHub: Full Setup Walkthrough (for NadiKosh Contributors)

This guide explains how to use the **GitHub app** and **Obsidian** on your mobile phone to create and edit Markdown files for the **NadiKosh (kosh) repository**.

You can follow this as a written companion to the video tutorial.

---

## 1. What You Need

### Apps to install

Install these two apps on your mobile:

- **GitHub** (official GitHub mobile app)
- **Obsidian** (note‑taking and Markdown editor)

> Optional but recommended: connect a **physical keyboard** to your phone for easier typing.

### Why GitHub?

- Stores all NadiKosh content in one place
- Tracks every change (version control)
- Makes collaboration easy (branches, pull requests, reviews)

### Why Obsidian?

- A powerful **Markdown editor**
- Simple mobile UI for writing
- Supports **plugins** (like Git integration) to sync with GitHub
- Great for structured writing and knowledge management

---

## 2. Getting Access to the NadiKosh Repo

### 2.1 Log in to GitHub app

1. Open the **GitHub** app.
2. **Log in** to your account or **sign up** if you don’t have one.

### 2.2 Find and star the `kosh` repository

1. In the GitHub app, use **Search**.
2. Search for the organisation: `nadi-stuti`.
3. Open the organisation and go to **All repositories**.
4. Find the repo named **`kosh`**.
5. Open it and tap **Star**.

### 2.3 Send your GitHub username

To become a collaborator:

1. In the GitHub app, go to your **profile** to see your **GitHub username**.
2. Send your **username** to us on our **WhatsApp channel**.
3. Wait for an **invitation** to collaborate on the `kosh` repo.
4. Accept the invitation from your **GitHub inbox / email**.

Once accepted, you will have permission to push changes and create pull requests.

---

## 3. First-Time Obsidian Setup (Mobile)

### 3.1 Open Obsidian as a new user

1. Open the **Obsidian** app.
2. When it asks how to start:
   - Create a **new vault** on your device.
   - You can name it something like `NadiKosh` or anything you prefer.

You will now be inside an empty vault.

### 3.2 Enable and install the Git plugin

Obsidian supports many plugins that extend its power.

1. Open **Settings** in Obsidian.
2. Go to **Community plugins**.
3. Turn on **“Allow community plugins”**.
4. Tap **Browse** and search for **“Obsidian Git”**.
5. Install and **enable** the **Obsidian Git** plugin.

> Note: Obsidian has many useful plugins for writing. You can search the community plugins later to explore more tools that help with writing and organizing content.

---

## 4. Generate a GitHub Personal Access Token (PAT)

To let Obsidian Git talk to GitHub, you need a **Personal Access Token**.

### 4.1 Open GitHub in browser

1. Open your mobile browser.
2. Go to: `https://github.com`
3. Log in with the **same account** you used in the GitHub app.

### 4.2 Create a personal access token - classic

The exact UI may change over time, but generally:

1. Go to your **profile** → **Settings**.
2. Scroll down to **Developer settings**.
3. Go to **Personal access tokens** (classic).
4. Create a new token (for general use with repos).
5. Give it:
   - A **name** (for example: `obsidian-mobile`).
   - **Expiration** (choose a reasonable duration).
   - **Public Repo access** permissions (select the public_repo option from repo access).
1. Generate the token.
2. **Copy and save**:
   - Your **GitHub username**
   - Your **email** (used on GitHub)
   - The **personal access token**

> Keep your token secret. Treat it like a password.

---

## 5. Configure Obsidian Git Plugin

1. In Obsidian, go to **Settings** → **Community plugins** → **Obsidian Git** (plugin settings).
2. Fill in:
   - **Username**: your GitHub username
   - **Email**: the email used in your GitHub account
   - **Token**: paste the personal access token you generated

Make sure these values are correct, otherwise Git operations will fail.

---

## 6. Clone the NadiKosh Repository into Obsidian

You will now clone the `kosh` repo into your Obsidian vault.

### 6.1 Open command palette

1. In Obsidian, look for the **hamburger menu** at the bottom (three horizontal lines).
2. Tap it to open the **Command palette**.

### 6.2 Clone the repo

1. In the Command palette, search for the **Obsidian Git** clone command, for example: - 
	`Git: Clone an existing remote repo` 
2. When asked for the repo URL, enter: 
	```text https://github.com/nadi-stuti/kosh```
3. When asked for folder name, use something like:
		nadikosh
Obsidian will now clone the repo into your vault.

---

## 7. Branch Workflow: Always Work on a Separate Branch

You should never edit directly on the `master` branch. Always create a **new branch** from the latest `master`.

### 7.1 The 3‑step rule for every new branch

Whenever you start a new piece of work:

1. **Switch to the master branch**
2. **Pull the latest changes** from remote
3. **Create a new branch** for your work

### 7.2 Switching to master and pulling

Use the **Obsidian Git** commands:

1. Switch to the **master** branch (e.g. `Git: Checkout master`).
2. Run **pull** (e.g. `Git: Pull`).

If you get an error about missing name or email:

- Go back to **Obsidian Git settings**.
- Make sure **username** and **email** are correctly set (matching your GitHub account).

### 7.3 Create a new branch

After `master` is updated:

1. From the command palette, run the **create branch** command (e.g. `Git: Create new branch`).
2. Give the branch a clear name, for example:
   - `ganga-research-update-01`
   - `add-ganga-article-username`

Make sure you are **now on the new branch** before editing any files.

---

## 8. Navigating to the Ganga Research Folder

You will usually edit content inside the `src` folder of the repo.

1. Switch to **folder view** in Obsidian.
2. Navigate to:
   ```text
   src/content/docs/thinking-grounds/river-research/ganga
   ```
3. Find the `ganga` folder.
4. Long press on the `ganga` folder.
5. Choose **Create new note** (or similar option).

This will create a new Markdown file inside the `ganga` folder.

---

## 9. Writing and Editing in Obsidian

### 9.1 Add properties (frontmatter)

1. Open your new note.
2. Scroll to the **editing area**.
3. From the top‑right **three dots**, select **Add property** (or similar).
4. Add the required metadata/properties (title & description)

### 9.2 Use editing tools

- Use the **heading** buttons to create titles and sections.
- Use **bold**, **italic**, **lists**, and other tools in the bottom toolbar.
- Structure your article clearly:
  - Title
  - Introduction
  - Main sections (with headings)
  - References or notes if needed

Write your content normally in Markdown.

---

## 10. Using Git Inside Obsidian (Stage, Commit, Sync)

After you make some changes, you must **save** and then **sync** them to GitHub.

### 10.1 Open Git source control in Obsidian

1. Tap the bottom **hamburger menu**.
2. Open the **Git source control** view (Obsidian Git panel).

### 10.2 Refresh, stage, commit, sync

1. Tap the **refresh** icon to scan for changes.
2. Use the **`+` (plus)** button to **stage** all changed files.
3. Tap the **tick (✔)** button to **commit** your changes.
   - Enter a clear commit message, e.g. `Add new Ganga research note`.
4. Tap the **up arrow** button to **sync/push** your commits to GitHub.

Your branch with changes is now on GitHub.

---

## 11. Create a Pull Request (PR) in GitHub App

Now you will open a PR so your changes can be reviewed and merged.

1. Open the **GitHub** app.
2. Navigate to the **`nadi-stuti/kosh`** repository.
3. Switch to your **feature branch** (the one you created).
4. Tap to create a **New pull request**.
5. Fill in:
   - **Title**: short summary of the change.
   - **Description**: explain what you added/edited.
6. Tap **Create pull request**.

### 11.1 Assign the PR

- In the PR view, set an **assignee** (who should review it), as defined by your team process.

---

## 12. Preview and Update Your Changes

After the PR is created:

1. Wait for the **deployment/preview** to be generated for the PR.
2. Open the **PR preview link** to see how your article looks on the site.
3. If something is wrong (formatting, content, etc.):
   - Go back to **Obsidian**.
   - Make changes in the **same branch**.
   - Repeat the **stage → commit → sync** steps.
   - The PR will update automatically with new commits.

You can push more changes to the same branch until everything looks good.

---

## 13. Quick Edits Directly in GitHub App

For **small and fast fixes** (typos, small wording changes):

1. Open the `kosh` repo in the **GitHub app**.
2. Navigate to the file you want to edit.
3. Use the **edit** option in GitHub to change the content.
4. Commit the change directly from the app.

This is useful when you don’t want to open Obsidian for minor edits.

---

## 14. Keeping Your Master Branch Updated

To avoid conflicts and stay in sync:

- **Occasionally**:
  1. Switch to the **master** branch in Obsidian Git.
  2. Run **pull** to update it with the latest changes.

- **Always**:
  - Create a **new branch from the updated master** before starting any new work.

This keeps your work clean and reduces merge issues.

---

## 15. Summary

- Install **GitHub** and **Obsidian** on your mobile.
- Get collaboration access to the **`nadi-stuti/kosh`** repo.
- Use **Obsidian Git** with a **personal access token** for syncing.
- Always:
  - Update **master**
  - Create a **new branch**
  - Edit inside the correct folder
  - **Stage → Commit → Sync**
  - Create a **Pull Request** from the GitHub app
- Use PR previews to check your article and push more commits if needed.
- For small edits, you can directly change files in the **GitHub app**.

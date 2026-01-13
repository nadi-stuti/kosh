---
title: Github
description: A guide on how to use github
---

# How to Edit This Repository Using GitHub

This guide will walk you through the process of editing this knowledgebase using GitHub. Don't worry if you're new to programming or GitHub – we'll go step by step. By the end, you'll be able to make changes to the website and suggest them to the project owners.

## What You'll Need

- A computer with internet access
- A web browser (like Chrome, Firefox, or Edge)
- Basic computer skills (opening programs, typing, clicking)

## Step 1: Create a GitHub Account

GitHub is a website where people store and share code. You need an account to contribute to projects.

1. Open your web browser and go to [github.com](https://github.com)
2. Click the "Sign up" button (usually in the top right corner)
3. Enter your email address
4. Create a username (something simple like your name or a nickname)
5. Choose a strong password
6. Click "Create account"
7. GitHub might ask you to solve a puzzle or verify your email – follow the instructions
8. Once your account is created, you'll be logged in automatically

Great! You now have a GitHub account.

## Step 2: Download and Install Visual Studio Code (VS Code)

VS Code is a free code editor that makes it easy to work with files and use Git (the tool behind GitHub).

1. Go to [code.visualstudio.com](https://code.visualstudio.com) in your web browser
2. Click the "Download" button (it should automatically detect your operating system)
3. Once the download finishes, open the downloaded file
4. Follow the installation wizard:
   - Accept the license agreement
   - Choose the installation location (default is fine)
   - Select any additional tasks if prompted (like adding to PATH)
   - Click "Install"
5. When installation is complete, click "Finish"
6. Open VS Code from your Start menu or desktop shortcut

VS Code is now installed on your computer!

## Step 3: Clone the Repository

"Cloning" means downloading a copy of the project to your computer so you can work on it.

Our github repository for kosh is: [Nadi-Stuti Kosh Github repo](https://github.com/nadi-stuti/kosh)

1. Open VS Code
2. Look for the "Source Control" icon on the left sidebar (it looks like a branching tree) and click it
3. If you don't see it, go to View > Command Palette (or press Ctrl+Shift+P), type "Git: Clone", and select it
4. In the box that appears at the top, paste this URL: `https://github.com/nadi-stuti/kosh`
5. Press Enter
6. Choose a folder on your computer where you want to save the project (like your Documents folder)
7. VS Code will ask if you want to open the cloned repository – click "Open"

The project is now on your computer!

## Step 4: Create a New Branch

A "branch" is like a separate version of the project where you can make changes without affecting the main version.

1. In VS Code, look at the bottom left corner – you should see the current branch name (probably "main" or "master")
2. Click on the branch name
3. In the menu that appears, click "Create new branch..."
4. Give your branch a name. Use something descriptive like "my-changes" or "add-new-page"
5. Press Enter

You've created a new branch! Any changes you make will be on this branch only.

## Step 5: Make Changes

Now you can edit the files in the project.

1. In VS Code, look at the left sidebar for the "Explorer" (it looks like a folder icon)
2. Click on it to see the project files
3. Open the file you want to edit (for example, a .md file in the `src/content/docs` folder)
4. Make your changes in the editor
5. Save the file by pressing Ctrl+S (or File > Save)

Remember, all your changes are happening on your new branch, so the original project stays safe.

## Step 6: Commit Your Changes

"Committing" saves your changes with a message explaining what you did.

1. Go back to the Source Control sidebar (the branching tree icon)
2. You'll see a list of files you've changed
3. Click the "+" icon next to each changed file to "stage" it (this prepares it for committing)
4. In the message box at the top, write a short description of your changes (like "Added a new section to the guide")
5. Click the checkmark icon (or press Ctrl+Enter) to commit

Your changes are now saved locally on your computer.

## Step 7: Push Your Branch to GitHub

"Pushing" sends your branch and commits to GitHub so others can see them.

1. In the Source Control sidebar, click the "..." menu (three dots) at the top
2. Select "Push"
3. If asked, select your new branch to push
4. VS Code might ask for your GitHub username and password – enter them
   - Note: You might need to use a "Personal Access Token" instead of your password. If so, GitHub will guide you on how to create one.

Your branch is now on GitHub!

## Step 8: Create a Pull Request

A "Pull Request" (PR) is how you ask the project owners to review and accept your changes.

1. Open your web browser and go to the repository: [Kosh github repository](https://github.com/nadi-stuti/kosh)
2. You should see a message at the top saying "Your recently pushed branches:" with your branch name
3. Click "Compare & pull request" next to your branch
4. Give your pull request a title (like "My suggested changes")
5. In the description box, explain what you changed and why
6. Click "Create pull request"

Congratulations! You've submitted your changes for review.

## What Happens Next?

- The project maintainers will review your pull request
- They might ask questions or suggest improvements
- If everything looks good, they'll merge your changes into the main project
- You'll get notified via email about any updates

## Troubleshooting

If you run into problems:

- Double-check each step carefully
- Make sure you're logged into GitHub in your browser
- Ensure VS Code is up to date
- Search online for the specific error message you're seeing

Remember, contributing to open source projects is a learning process. Don't be afraid to ask for help in the project's discussions or issues section!

## Additional Resources

- [GitHub's Hello World Guide](https://guides.github.com/activities/hello-world/)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Markdown Guide](https://www.markdownguide.org/) (for editing .md files)

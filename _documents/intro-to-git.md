---
title: "Introduction to Git and GitHub"
---

## What is Git?
Git is a version control system; it allows you to keep track of the history of files in a development project.  Git is free and open source, and it has been designed to be both efficient and easy to learn. While there are numerous options for VCS or version control systems, git has become increasingly popular in recent years and is a great skill for any developer to have.

We will be working with Git mainly through the command line interface, using public repositories created on [GitHub](https://github.com/).  [GitHub](https://github.com/) is a service that hosts Git repositories in the cloud.  As you are job hunting, these repositories can serve as an online portfolio for your skills, and are an excellent way to show a prospective employer what you can do.

## Setup a GitHub Account
If you do not already have an account on [GitHub](https://github.com/), go create one now - with a nice professional user name. Make sure to use your actual name in the account profile.  This will get you a free public account. You can get a free micro account (5 private repos), plus access to other neat things, while you are a student by registering separately for a [GitHub Student Pack](https://education.github.com/pack)

<div class="well well-sm">
:memo: If you already have an account, but aren't to sure you want me or a future employer to see your current user name, you're in luck because it's easy to change under Settings (click the gear).  
</div>

If an employer searches for you by name, you want this account to show up. You can search for a user on GitHub by using `fullname:` in the search box. For example:
<img src="{{ "/assets/intro-to-git-user-search.png" | prepend:site.baseurl }}">
You can use just a first or last name to search, but you would still use `fullname:` before the name. 

## Installing Git
In the classroom, git will be installed for you, but you will  also want to have this installed on the computer you will be working on at home.  Git is fairly easy to install;  follow the instructions below for your operating system.


### Install on Windows
On Windows, the simplest option is to install [GitHub for Windows](http://windows.github.com).  This includes a command line version of Git as well as the GitHub GUI. We will be working with git from the command line, so you'll want convenient access to the *Git Shell*.  You may want to add this as a shortcut on your desktop or pin it to the start menu or taskbar.

We will focus on using git from the command line, as this is a more portable and marketable skill. The GitHub UI is nice, but on the job, it is unlikely your repository will be on GitHub, so you don't want to become dependent on this interface.


### Install on Mac
If you are using a Mac, open up a [Terminal]({{ "/documents/mac-terminal.html" | prepend:site.baseurl }}) window and type git.  You may find that it is already installed, or if not that it will prompt you to install the XCode Command Line Developer Tools.  If it does not, you likely have an older version of the Mac OS and should download and install the tools from the [Apple Developer Site](https://developer.apple.com/downloads/index.action).  You can also install the full XCode suite from the Apple App Store, but this will take additional space.  


### Install on Linux
If you are on a Linux system, I'm going to assume that you know how to use your package manager - on a Debian system this would be apt-get.  Using the package manager for your system, install git.
{% highlight bash %}
$ sudo apt-get install git
{% endhighlight %}


## Configure Git
Before you dive in, you'll want to configure git with your user information. In the commands below, fill in your name and the email you used with your GitHub account.  This email is what will tie your activity to your account.  **Make sure that you are using the same email and check for typos.**
{% highlight bash %}
$ git config --global user.name "User Name"
$ git config --global user.email "user@email"
{% endhighlight %}


## Using a portable Drive
Since our classroom computers are wiped on reboot, it's a good idea to work off a portable drive while in class. If you choose to do this, you can configure git locally for each repository, then that configuration can be carried over into the classroom.  You can't do this now, since you don't have a repository yet, but keep this in mind for later.
{% highlight bash %}
$ git config --local user.name "User Name"
$ git config --local user.email "user@email"
{% endhighlight %}


## Using Git and GitHub
Now that you've got a GitHub account and have git installed on your computer, let's get you introduced to the rest of the class while practicing using git.  The workflow that follows is what you will be using to complete your class assignments.


### Fork a repository
Locate your Course Organization on [GitHub](https://github.com/).  The name is available from your course website, but follows the convention of htc-ccis####. Once there, you should see a **`students`** repository.  Click the link for this repository.

This page shows the files currently in the repository, along with the comments from the last commit to that file.  In the upper right, click the button to *fork* the repository. (The number shows how many times the repository has been forked, so it may not match the image below.)  
<img src="{{"/assets/intro-to-git-fork.png" | prepend:site.baseurl}}" alt="Image of fork button.">

When the fork (or copy) of the repository is complete, you'll be looking at the forked repository under your own GitHub account. A forked repository has a *fork* icon instead of a *book* icon.  You'll also notice that it has a note indicating where it originated from.
<img src="{{"/assets/intro-to-git-repo-fork.png" | prepend:site.baseurl}}" alt="Image showing the book icon vs the fork icon.">

Now you have a private copy of the repository where you can work on changes until they are ready to share back to the original project.  This allows you to commit changes that may not be complete yet, but are in a state where you don't want to lose them.  It is important to commit changes to your fork regularly.  I'm not sympathetic to hearing that you can't turn in your work because you've lost your portable drive, your home computer was ruined by your morning coffee, etc. 


### Clone a repository
Before you can make changes to the code, you need to get a copy of the files locally on your computer. Along the right side of the screen, you'll notice a HTTPS Clone URL.  (This is the same as the URL in the browser with .git appended to the end.) Copy this URL.  
<img src="{{"/assets/intro-to-git-clone-url.png" | prepend:site.baseurl}}" alt="Image showing the book icon vs the fork icon.">

Open your command shell (Git Shell on Windows, Terminal on Mac, etc.) and go to the location where you want to work with these files.  If you have a location set up on a portable drive go there, otherwise pick a spot easy to get to like C:\Projects on Windows, or make a folder in your user directory on a Mac.

Enter the following command, replacing <repo-url> with the HTTPS clone url that you copied. 
{% highlight bash %}
$ git clone <repo-url> 
{% endhighlight %}

If you list your directories, you'll now see that a students directory has been created for you.  Go into that directory.  If you've put this onto a portable drive, apply the local configuration discussed above.

### Make changes
Now that you have your local repository, you are ready to make changes.  To add yourself to the course directory, add a new `USERNAME.yml` file under the appropriate `_data/TERM_YEAR/` directory.  See the example file `htcmosman.yml`, and replace the values with your own name, emoji (see this list), and introduction.

When you've got your file ready to go, switch back to your command shell. Use the following command to see what has changed.
{% highlight bash %}
$ git status
{% endhighlight %}
This should show you that you have a file that is "untracked".  

To add this file to your repository so that changes will be tracked on commit, enter: 
{% highlight bash %}
$ git add <full-path-and-file-name>
{% endhighlight %}

Alternately, to add all untracked files enter:
{% highlight bash %}
$ git add .
{% endhighlight %}

### Commit and push changes
A git `commit` is used to track changes in your **_local_** repository.  It gives you a point locally that you can go back to and compare against.  However it does not store those changes on GitHub or the **_remote_** repository. If you have previously worked with other version control systems, this is a *huge* difference.  If you lose your local repository, those local commits are also lost. To move those changes to the remote repository you also need to `push` your changes.

First do a commit using the following command:
{% highlight bash %}
$ git commit -m "A message describing the changes."
{% endhighlight %}

It is a good idea to do a commit for every task. This allows you to have a good commit message, and a way to roll-back or undo any one thing.  If you do a bunch of tasks as one commit, it is much harder to identify the changes for any one specific task.

To push your changes, you need to specify the remote branch to push to. It will often be `master`, but in this case it is `gh-pages`. 
<img src="{{"/assets/intro-to-git-remote-branch.png" | prepend:site.baseurl}}" alt="Image showing the book icon vs the fork icon.">

When you are ready to push your changes (at the end of class or a work session) run the following command:
{% highlight bash %}
$ git push origin [remote-branch]
{% endhighlight %}


### GitHub Pages
The `gh-pages` branch in GitHub that publishes to a web server where you can host a project web site.  If you click the Settings tab for your repository (found along the right side), you'll notice a section toward the bottom called GitHub Pages.  If your repository has a gh-pages branch, it will show a green panel that gives the URL where your site is published.  Follow that link to see how your changes to our Student Directory look.  If it's not what you want, go back and make updates locally then commit and push those changes and retest before moving on.


### Submit a pull request
The last step - the part that turns in your assignment - is to submit a pull request back to the orginal course repository. This is done through GitHub.  From your repository page, click the Pull Requests tab (found along the right side).  Click the green button to create a new pull request.  This will show you all the changes between your forked repository and the original.  

Before you create the pull request, you should review the changes to ensure that you see everything you expect.  Think of this as proof reading.  Make sure to not only consider what you see, but try to identify anything that might be missing as well.  Here you should only be adding one file, so it is pretty simple.  For future assignments, multiple files will be involved.

When you are ready to submit the assignment, click the button to create the pull request.  Give it a title and add any comments you want me to see when grading.  

The pull request will be where you see feedback on your work.  When looking at your pull request, the conversation tab shows an overview of all activity.  Both general and code specific feedback will be shown here.  
<img src="{{"/assets/intro-to-git-pull-feedback.png" | prepend:site.baseurl}}" alt="Image showing the feedback in a pull request.">


## Learn more about Git
This exercise has walked you through the basic workflow you'll need to complete a typical assignment.  We'll be repeating this often, so you should get used to it in no time at all.  

For some additional practice, [Try Git Hub](https://try.github.io/levels/1/challenges/1) is a quick (about 15 minute) online course that will walk you through more basics of using git.  It is recommended that you take the time to go through this additional online tutorial as well.

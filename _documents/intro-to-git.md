---
title: "Introduction to Git and GitHub"
---

## What is Git?
Git is a version control system; it allows you to keep track of the history of files in a development project.  Git is free and open source, and it has been designed to be both efficient and easy to learn. While there are numerous options for VCS or version control systems, git has become increasingly popular in recent years and is a great skill for any developer to have.

We will be working with Git mainly through the command line interface, using public repositories created on [GitHub](https://github.com/).  [GitHub](https://github.com/) is a service that hosts Git repositories in the cloud.  As you are job hunting, these repositories can serve as an online portfolio for your skills, and are an excellent way to show a prospective employer what you can do.

## Setup a GitHub Account
If you do not already have an account on [GitHub](https://github.com/), go create one now - with a nice professional user name. Make sure to use your actual name in the account profile.  This will get you a free public account. You can get a free micro account (5 private repos), plus access to other neat things, while you are a student by registering separately for a [GitHub Student Pack](https://education.github.com/pack)

<div class="well well-sm">
:memo: If you already have an account, but aren't to sure you want me or a future employer to see your current user name, you're in luck because it's easy to change under Settings.  
</div>

If an employer searches for you by name, you want this account to show up. You can search for a user on GitHub by using *fullname:* in the search box. For example:
<img src="{{ "/assets/intro-to-git-user-search.png" | prepend:site.baseurl }}">
You can use just a first or last name to search, but you would still use "fullname:" before the name. 

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


## Using Git and GitHub
Now that you've got a GitHub account and have git installed on your computer, let's get you introduced to the rest of the class while practicing using git.

<div class="well well-sm">
If you have a portable drive, I suggest you use that and make a directory there for this course.  You can then transport the directory and file between school and home, avoiding the need to download and config your repository each day in class.  Note however that you should still commit your work regularly so that if you lose the drive, you do not lose all your course work. 
</div>

1. Locate your Course Organization on GitHub.  The name is available from your course website, but follows the convention of htc-ccis####.  
2. Once there, you should see a *students* repository.  Click the link for this repository.
3. This page shows the files in the repository, along with the comments from the last commit to that file.  Along the right side you'll notice a HTTPS Clone URL.  This is the same as the URL in the browser with .git appended to the end. Copy this URL.  
4. Open your command shell (Git Shell on Windows, Terminal on Mac, etc.) and go to the location where you want to work with these files.  (If you have a location set up on a portable drive go there, otherwise pick a spot easy to get to like C:\Projects on Windows, or make a folder in your user directory on a Mac.)
5. Next we will clone (or make a local copy) of the students repository.
{% highlight bash %}
$ git clone [
{% endhighlight %}

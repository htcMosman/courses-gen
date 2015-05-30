---
title: "Using the Command Line on a Mac"
---

## The Terminal Application
The Terminal application, often called the console, gives us access to the Unix command line, or shell. The shell is the outer layer, which wraps the operating system internals. Those are called the kernel.

You can access the Terminal application by using the Command-Spacebar combination and searching for "Terminal". You can also locate it using the Finder.  It is in the Applications/Utilities/ folder. Once you have it open, I suggest that you pin it to your Dock.  As a developer you'll be using it often.

The Terminal window should look something like this, though the name of your mac and your username will be different.
<img src="{{ "/assets/mac-terminal-new-window.png" | prepend:site.baseurl }}">
Note that the color scheme is configurable through the Preferences. You can also change it when creating a new window from the Shell menu.


## Basic Commands
Let's learn a few basic commands.  In command examples, it is convention that the lines that begin with a $ show commands.  Lines that do not begin with a $ are showing examples of the output from the command on the line with the $ above it.  

Don't worry that your Terminal window has stuff before the $. Mine does too (see image above.) Since everyone's is different, we only use the $.  When entering a command, do not type the $, just what comes after it.

To figure out where you are (print working directory):
*Remember, you only type the "ls" and then enter.*
{% highlight bash %}
$ pwd
{% endhighlight %}

To make a new directory (or folder) called "temp" type:
{% highlight bash %}
$ mkdir temp
{% endhighlight %}

To change to (or go to) that directory: 
{% highlight bash %}
$ cd temp
{% endhighlight %}

To make an empty file:
{% highlight bash %}
$ touch readme.txt
$ touch readme-too.txt
{% endhighlight %}

To list the contents of your current directory: 
{% highlight bash %}
$ ls
readme-too.txt	readme.txt
{% endhighlight %}
Somewhere in the list of directories there, you should see "temp".

To change to (or go to) the parent directory: 
{% highlight bash %}
$ cd ..
{% endhighlight %}

To remove a directory: 
{% highlight bash %}
$ rmdir temp
rmdir: temp: Directory not empty
{% endhighlight %}

The rmdir command will only remove an *empty* directory, making it somewhat *safe*.  To delete the directory using rmdir, you would first need to delete all of the files in the directory.  

To remove a file:
{% highlight bash %}
$ rm temp/readme.txt
{% endhighlight %}

To list the contents of another directory: 
{% highlight bash %}
$ ls temp
readme-too.txt
{% endhighlight %}

To remove a non-empty directory:
{% highlight bash %}
$ rm -r temp
{% endhighlight %}

To exit the terminal: 
{% highlight bash %}
$ exit
{% endhighlight %}
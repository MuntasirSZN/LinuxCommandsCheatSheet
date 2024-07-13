<div style="text-align: center;">
    
# Linux Commands Cheat Sheet 🐧📚📚

</div>

<div style="text-align: center;">
    <img src="https://github.com/MuntasirSZN/LinuxCommandsCheatSheet/blob/main/Linux%20Commands.jpeg?raw=true" width="50%" alt="">
</div>


<div style="text-align: center;">

# Why this repo❓

</div>

A lot of people is learning linux, for development reasons. They sometimes forget the commands. To help them **memorize** the commands, I made this repo. This is my personal repo, where I keep all the commands I use. I hope this repo helps you too. I provided a short description with it, also usage and an example.**Remember**,these are bash commands.

# Table of Contents


- [Most Used Commands](#most-used-commands)
  - [01.```ls```](#01ls)
  - [02.```cd```](#02cd)
  - [03.```pwd```](#03pwd)
  - [04.```touch```](#04touch)
  - [05.```mkdir```](#05mkdir)
  - [06.```rm```](#06rm)
  - [07.```cp```](#07cp)
  - [08.```mv```](#08mv)
  - [09.```cat```](#09cat)
  - [10.```more```](#10more)
  - [11. ```less```](#11-less)
  - [12.```head```](#12head)
  - [13.```tail```](#13tail)
  - [14.```grep```](#14grep)
  - [15.```find```](#15find)
  - [16.```whereis```](#16whereis)
  - [17.```which```](#17which)
  - [18.```man```](#18man)
- [Not that much used Commands](#not-that-much-used-commands)
  - [1.```chmod```](#1chmod)
  - [2.```chown```](#2chown)
  - [3.```whoami```](#3whoami)
  - [4.```date```](#4date)
  - [5.```cal```](#5cal)
  - [6.```clear```](#6clear)
  - [7.```echo```](#7echo)
  - [8.```uname```](#8uname)
  - [9.```uptime```](#9uptime)
  - [10.```w```](#10w)
  - [11.```who```](#11who)
  - [12.```ps```](#12ps)
  - [13.```kill```](#13kill)
  - [14.```killall```](#14killall)
  - [15.```pkill```](#15pkill)
  - [16.```pgrep```](#16pgrep)
  - [17.```top```](#17top)
  - [18.```htop```](#18htop)
  - [19.```free```](#19free)
  - [20.```df```](#20df)
- [All in one chart](#all-in-one-chart)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Conclusion](#conclusion)

# Most Used Commands

## 01.```ls```

This command is used to list the files and directories in the current directory. You can either use ```ls``` or ```ls -l``` to list the files in long format. Or, you can use ```ls -a``` to list all files including hidden files. You can also use ```ls -lh``` to list the files in long format with human-readable file sizes. And, use ```ls -R``` to list all files in the subdirectories. And, use ```ls -t``` to list the files by last modified time. Also, use ```ls -S``` to list the files by file size. You can also specify the path after the ```ls``` command to list the files in that directory.

### Usage
    
```bash
ls
```

#### Output 
```bash
Desktop  Documents  Downloads  Music  Pictures  Videos
```

## 02.```cd```

This command is used to change the directory. You can use ```cd``` to change to the home directory. Or, you can use ```cd ..``` to move to the parent directory. You can also use ```cd -``` to move to the previous directory. You can also specify the path after the ```cd``` command to move to that directory. Or,use ```cd ../..``` to move two directories down. You can use ```cd ~``` to move to the home directory. You can also use ```cd /``` to move to the root directory. You can also use ```cd ``` then the directory path to move to that directory.

### Usage
    
```bash
cd
```
#### Output 
```bash
/home/username
```

## 03.```pwd```

This command is used to print the current working directory. You can use ```pwd``` to print the current working directory.

### Usage
    
```bash
pwd
```

#### Output 
```bash
/home/username
```

## 04.```touch```

This command is used to create a new file. You can use ```touch``` then the file name to create a new file.

### Usage
    
```bash
touch file.txt
```
#### Output 
```bash
file.txt
```

## 05.```mkdir```

This command is used to create a new directory. You can use ```mkdir``` then the directory name to create a new directory.

### Usage
    
```bash
mkdir directory
```

#### Output 
```bash
directory
```

## 06.```rm```

This command is used to remove files or directories. You can use ```rm``` then the file name to remove a file. You can also use ```rm -r``` then the directory name to remove a directory. Or, ```rm -rf``` then the directory name to remove a directory forcefully. You can also use ```rm -i``` then the file name to remove a file interactively. You can append ```sudo``` before the ```rm``` command to remove a file or directory that requires root permission. Remember, the ```rm``` command is irreversible.

### Usage
    
```bash
rm file.txt
```
#### Output 
If you use the command ```ls``` then you will see the file is removed.

## 07.```cp```

This command is used to copy files or directories. You can use ```cp``` then the source file name and the destination file name to copy a file. You can also use ```cp -r``` then the source directory name and the destination directory name to copy a directory. You can also use ```cp -i``` then the source file name and the destination file name to copy a file interactively. You can append ```sudo``` before the ```cp``` command to copy a file or directory that requires root permission.

### Usage
    
```bash
cp file.txt file2.txt
```
#### Output 
```bash
file2.txt
```
### Usage Number 2

```bash
cp -r directory directory2
```

#### Output Number 2
```bash
directory2
```

You will see the files are copied.

## 08.```mv```

This command is used to move files or directories. You can use ```mv``` then the source file name and the destination file name to move a file. You can also use ```mv -i``` then the source file name and the destination file name to move a file interactively. You can append ```sudo``` before the ```mv``` command to move a file or directory that requires root permission.

### Usage
    
```bash
mv file.txt directory
```
#### Output 
```bash
directory/file.txt
```

## 09.```cat```

This command is used to display the contents of a file. You can use ```cat``` then the file name to display the contents of a file. You can also use ```cat -n``` then the file name to display the contents of a file with line numbers. You can also use ```cat -b``` then the file name to display the contents of a file with line numbers except for blank lines. You can also use ```cat -s``` then the file name to display the contents of a file with multiple blank lines compressed into a single blank line.


### Usage
    
```bash
cat file.txt
```
#### Output 
```bash
Hello World
```

If ```file.txt``` contains ```Hello World```, then the output will be ```Hello World```. If there is nothing,  then the output will be empty.

## 10.```more```

This command is used to display the contents of a file one page at a time. You can use ```more``` then the file name to display the contents of a file one page at a time. You can use the ```space``` key to move to the next page. You can use the ```enter``` key to move to the next line. You can use the ```q``` key to quit the display. You can use the ```b``` key to move to the previous page.

### Usage
    
```bash
more file.txt
```

#### Output 
```bash
Hello World
``` 
## 11. ```less```

This command is used to display the contents of a file one page at a time. You can use ```less``` then the file name to display the contents of a file one page at a time. You can use the ```space``` key to move to the next page. You can use the ```enter``` key to move to the next line. You can use the ```q``` key to quit the display. You can use the ```b``` key to move to the previous page. You can use the ```/``` key to search for a pattern in the file. You can use the ```n``` key to move to the next occurrence of the pattern. You can use the ```N``` key to move to the previous occurrence of the pattern. This command is similar to the ```more``` command. But, it is mainly used if the file is so big that no text editor can handle it.

### Usage
    
```bash
less file.txt
```
#### Output 
```bash
Hello World
```
If ```file.txt``` contains ```Hello World```, then the output will be ```Hello World```. If there is nothing, then the output will be empty.

## 12.```head```

This command is used to display the first few lines of a file. You can use ```head``` then the file name to display the first few lines of a file. You can also use ```head -n``` then the number of lines and the file name to display the first few lines of a file. You can also use ```head -c``` then the number of bytes and the file name to display the first few bytes of a file.

### Usage
    
```bash
head file.txt
```

#### Output 
```bash
This is the headline
```

If ```file.txt``` contains ```This is the headline``` at the headline, then the output will be ```This is the headline```. If there is nothing, then the output will be empty.

## 13.```tail```

This command is used to display the last few lines of a file. You can use ```tail``` then the file name to display the last few lines of a file. You can also use ```tail -n``` then the number of lines and the file name to display the last few lines of a file. You can also use ```tail -c``` then the number of bytes and the file name to display the last few bytes of a file. You can also use ```tail -f``` then the file name to display the last few lines of a file and keep the file open for new lines.

### Usage
    
```bash
tail file.txt
```

#### Output 
```bash
This is the last line
```

If ```file.txt``` contains ```This is the last line``` at the end, then the output will be ```This is the last line```. If there is nothing, then the output will be empty.

## 14.```grep```

This command is used to search for a pattern in a file. You can use ```grep``` then the pattern and the file name to search for a pattern in a file. You can also use ```grep -i``` then the pattern and the file name to search for a pattern in a file case-insensitively. You can also use ```grep -v``` then the pattern and the file name to search for a pattern in a file inversely. You can also use ```grep -c``` then the pattern and the file name to search for a pattern in a file and display the count of the pattern. You can also use ```grep -n``` then the pattern and the file name to search for a pattern in a file and display the line numbers of the pattern. You can also use ```grep -l``` then the pattern and the file name to search for a pattern in a file and display the file names containing the pattern. You can also use ```grep -r``` then the pattern and the directory name to search for a pattern in a directory recursively.

### Usage
    
```bash
grep "pattern" file.txt
```

#### Output 
```bash
pattern
```

If ```file.txt``` contains ```pattern``` 1 or more times, then the output will be ```pattern```. If there is nothing, then the output will be empty.

## 15.```find```

This command is used to find files or directories. You can use ```find``` then the directory name to find files or directories in a directory. You can also use ```find -name``` then the file name to find files or directories with the specified name. You can also use ```find -iname``` then the file name to find files or directories with the specified name case-insensitively. You can also use ```find -type``` then the file type to find files or directories with the specified type. You can also use ```find -empty``` to find empty files or directories. You can also use ```find -size``` then the file size to find files or directories with the specified size. You can also use ```find -exec``` then the command to execute the command on the found files or directories.

### Usage
    
```bash
find directory
```

#### Output 
```bash 

directory
```

If the directory exists, then the output will be the directory name. If there is nothing, then the output will be empty.

## 16.```whereis```

This command is used to find the binary, source, and manual page files for a command. You can use ```whereis``` then the command name to find the binary, source, and manual page files for a command.

### Usage
    
```bash
whereis ls
```

#### Output 
```bash
ls: /bin/ls
```

## 17.```which```

This command is used to find the location of a command. You can use ```which``` then the command name to find the location of a command.


### Usage
    
```bash
which ls
```

#### Output 
```bash
/bin/ls
```

## 18.```man```

This command is used to display the manual page of a command. You can use ```man``` then the command name to display the manual page of a command. You can use the ```space``` key to move to the next page. You can use the ```enter``` key to move to the next line. You can use the ```q``` key to quit the display. You can use the ```/``` key to search for a pattern in the manual page. You can use the ```n``` key to move to the next occurrence of the pattern. You can use the ```N``` key to move to the previous occurrence of the pattern.

### Usage
    
```bash
man brew
```

#### Output 
```bash
BREW(1)                  Homebrew Manual                  BREW(1)

NAME
       brew - The Missing Package Manager for macOS

SYNOPSIS
        brew command [options] [formula]      
        brew help [command]
        brew home
        brew --version
        brew --prefix
        brew --cache
        brew --cellar
        brew --repository
        brew update
        brew list [--full-name]
        brew search [text|/text/]
        brew install formula
        brew uninstall formula
        brew info [formula]
        brew deps formula
        brew uses formula
        brew outdated
        brew upgrade [formula]
        brew pin formula
        brew unpin formula
        brew list [formula]
        brew cleanup
        brew doctor
        brew missing
        brew link formula
        brew unlink formula
        brew switch formula
        brew list --versions formula
        brew cat formula
        brew edit formula
        brew create [URL [--no-fetch]]
        brew home formula
        brew options formula
        brew install formula
        brew fetch [formula]
        brew update
        brew upgrade
        brew uninstall formula
        brew pin formula
        brew unpin formula
        brew tap user/repo
        brew tap --repair
        brew tap --list
        brew tap --prune
        brew tap --search
        brew tap --list-official
        brew tap --list-pinned
        brew tap --list-unpinned
        brew tap --list-versions
        brew tap --list-pinned-versions
        brew tap --list-unpinned-versions
        brew tap --list-pinned-official
        brew tap --list-unpinned-official
        brew tap --list-pinned-user
        brew tap --list-unpinned-user
        brew tap --list-pinned-user-versions
        brew tap --list-unpinned-user-versions
        brew tap --list-pinned-user-official
```

And, it will show you a lot more. I am not going to show you the whole manual page. This manual page is for homebrew. If you want to see the manual page of a command, then use ```man``` then the command name.


# Not that much used Commands

## 1.```chmod```   

This command is used to change the permissions of a file or directory. You can use ```chmod``` then the permissions and the file name to change the permissions of a file or directory. You can also use ```chmod -R``` then the permissions and the directory name to change the permissions of a directory recursively. You can also use ```chmod u+x``` then the file name to add execute permission to the owner of the file. You can also use ```chmod g+x``` then the file name to add execute permission to the group of the file. You can also use ```chmod o+x``` then the file name to add execute permission to others. You can also use ```chmod a+x``` then the file name to add execute permission to all. You can also use ```chmod u-x``` then the file name to remove execute permission from the owner of the file. You can also use ```chmod g-x``` then the file name to remove execute permission from the group of the file. You can also use ```chmod o-x``` then the file name to remove execute permission from others. You can also use ```chmod a-x``` then the file name to remove execute permission from all. You can also use ```chmod u=rwx``` then the file name to set read, write, and execute permissions for the owner of the file. You can also use ```chmod g=rwx``` then the file name to set read, write, and execute permissions for the group of the file. You can also use ```chmod o=rwx``` then the file name to set read, write, and execute permissions for others. You can also use ```chmod a=rwx``` then the file name to set read, write, and execute permissions for all. You can also use ```chmod 777``` then the file name to set read, write, and execute permissions for all. You can also use ```chmod 755``` then the file name to set read, write, and execute permissions for the owner and read and execute permissions for the group and others. You can also use ```chmod 644``` then the file name to set read and write permissions for the owner and read permissions for the group and others. You can also use ```chmod 600``` then the file name to set read and write permissions for the owner and no permissions for the group and others. You can also use ```chmod 666``` then the file name to set read and write permissions for all. You can also use ``` chmod 444``` then the file name to set read permissions for all. You can also use ```chmod 400``` then the file name to set read permissions for the owner and no permissions for the group and others. You can also use ```chmod 200``` then the file name to set write permissions for the owner and no permissions for the group and others. You can also use ```chmod 100``` then the file name to set execute permissions for the owner and no permissions for the group and others. You can also use ```chmod 000``` then the file name to set no permissions for all.

### Usage
    
```bash
chmod 777 file.txt
```

#### Output 
```bash
file.txt
```
If you use the command ```ls -l``` then you will see the permissions are changed.

## 2.```chown```

This command is used to change the owner of a file or directory. You can use ```chown``` then the owner name and the file name to change the owner of a file or directory. You can also use ```chown -R``` then the owner name and the directory name to change the owner of a directory recursively. You can also use ```chown owner:group``` then the owner name, group name, and the file name to change the owner and group of a file or directory. You can also use ```chown -R owner:group``` then the owner name, group name, and the directory name to change the owner and group of a directory recursively.

### Usage
    
```bash
chown owner file.txt
```

#### Output 
```bash

file.txt
```
If you use the command ```ls -l``` then you will see the owner is changed.

## 3.```whoami```

This command is used to print the current user. You can use ```whoami``` to print the current user.

### Usage
    
```bash
whoami
```

#### Output 
```bash
username
```

## 4.```date```

This command is used to print the current date and time. You can use ```date``` to print the current date and time. The format will be ```Day, Date, Month, Year, Time, Timezone```.

### Usage
    
```bash
date
```

#### Output 
```bash
Sun 10 Oct 2021 10:10:10 PM IST
```

## 5.```cal```

This command is used to print the calendar of the current month. You can use ```cal``` to print the calendar of the current month.

### Usage
    
```bash
cal
```

#### Output 
```bash
    October 2021
Su Mo Tu We Th Fr Sa
                1  2    
3  4  5  6  7   8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31
```

## 6.```clear```

This command is used to clear the terminal. You can use ```clear``` to clear the terminal. You can do ctrl+l to clear the terminal too.

### Usage
    
```bash
clear
```

#### Output 
```bash
```
You will see the terminal is cleared.

## 7.```echo```

This command is used to print a message. You can use ```echo``` then the message to print a message. You can also use ```echo -e``` then the message to print a message with escape characters interpreted. You can also use ```echo -n``` then the message to print a message without a newline.

### Usage
    
```bash
echo "Hello World"
```

#### Output 
```bash
Hello World
```

## 8.```uname```

This command is used to print the system information. You can use ```uname``` to print the system information. You can also use ```uname -a``` to print all the system information. You can also use ```uname -s``` to print the system name. You can also use ```uname -n``` to print the network node hostname. You can also use ```uname -r``` to print the kernel release. You can also use ```uname -v``` to print the kernel version. You can also use ```uname -m``` to print the machine hardware name. You can also use ```uname -p``` to print the processor type. You can also use ```uname -i``` to print the hardware platform. You can also use ```uname -o``` to print the operating system.

### Usage
    
```bash
uname
```

#### Output 
```bash
Linux
```

## 9.```uptime```

This command is used to print the uptime of the system. You can use ```uptime``` to print the uptime of the system.

### Usage
    
```bash
uptime
```

#### Output 
```bash
10:10:10 up 10 days, 10:10, 10 users, load average: 1.10, 1.10, 1.10
```

If the system is up for 10 days,10 hours,10 minutes, then the output will be ```10:10:10 up 10 days, 10:10, 10 users, load average: 1.10, 1.10, 1.10```. If there is nothing, then the output will be empty.

## 10.```w```

This command is used to print the users who are currently logged in and what they are doing. You can use ```w``` to print the users who are currently logged in and what they are doing.

### Usage
    
```bash
w
```

#### Output 
```bash
10:10:10 up 10 days, 10:10, 10 users, load average: 1.10, 1.10, 1.10
USER     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT
username tty1     :0               10:10    10:10  10:10  10:10 -bash
```

If the user is logged in and is doing something, then the output will be the user's information. If there is nothing, then the output will be empty.

## 11.```who```

This command is used to print the users who are currently logged in. You can use ```who``` to print the users who are currently logged in.

### Usage
    
```bash
who
```

#### Output 
```bash
username tty1 2021-10-10 10:10 (:0)
```

If the user is logged in, then the output will be the user's information. If there is nothing, then the output will be empty.

## 12.```ps```

This command is used to print the currently running processes. You can use ```ps``` to print the currently running processes. You can also use ```ps -e``` to print all the processes. You can also use ```ps -f``` to print the full-format listing. You can also use ```ps -l``` to print the long-format listing. You can also use ```ps -u``` then the username to print the processes of the user. You can also use ```ps -aux``` to print all the processes in full-format listing.

### Usage
    
```bash
ps
```

#### Output 
```bash
  PID TTY          TIME CMD
  123 tty1     00:00:00 bash
```

If the process is running, then the output will be the process information. It will also show system running processes.

## 13.```kill```

This command is used to kill a process. You can use ```kill``` then the process ID to kill a process. You can also use ```kill -9``` then the process ID to kill a process forcefully. You can also use ```kill -l``` to list all the signals.

### Usage
    
```bash
kill 123
```

#### Output 
```bash
```

If the process is killed, then the output will be empty. 

## 14.```killall```

This command is used to kill all processes by name. You can use ```killall``` then the process name to kill all processes by name. You can also use ```killall -9``` then the process name to kill all processes by name forcefully.

### Usage
    
```bash
killall bash
```

#### Output 
```bash
```

If the process is killed, then the output will be empty. 

## 15.```pkill```

This command is used to kill a process by name. You can use ```pkill``` then the process name to kill a process by name. You can also use ```pkill -9``` then the process name to kill a process by name forcefully.

### Usage
    
```bash
pkill bash
```

#### Output 
```bash
```

If the process is killed, then the output will be empty.

## 16.```pgrep``` 

This command is used to find the process ID by name. You can use ```pgrep``` then the process name to find the process ID by name.

### Usage
    
```bash
pgrep bash
```

#### Output 
```bash
123
```

If the process is found, then the output will be the process ID. If there is nothing, then the output will be empty.

## 17.```top```

This command is used to display the dynamic real-time view of a running system. You can use ```top``` to display the dynamic real-time view of a running system. You can use the ```q``` key to quit the display.

### Usage
    
```bash
top
```

#### Output 
```bash
top - 10:10:10 up 10 days, 10:10, 10 users, load average: 1.10, 1.10, 1.10
Tasks: 123 total, 1 running, 122 sleeping, 0 stopped, 0 zombie
%Cpu(s): 10.0 us, 10.0 sy, 10.0 ni, 10.0 id, 10.0 wa, 10.0 hi, 10.0 si, 10.0 st
MiB Mem : 1000.0 total, 100.0 free, 900.0 used, 100.0 buff/cache  

PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
123 username  20   0  100.0m  10.0m  10.0m S  10.0   1.0  10:10.10 bash
```

If the system is running, then the output will be the system information. If there is nothing, then the output will be empty.

## 18.```htop```

This command is used to display the dynamic real-time view of a running system. You can use ```htop``` to display the dynamic real-time view of a running system. You can use the ```q``` key to quit the display.  

### Usage
    
```bash
htop
```

#### Output
![htop](https://github.com/MuntasirSZN/LinuxCommandsCheatSheet/blob/main/htop.png?raw=true)


## 19.```free```

This command is used to display the amount of free and used memory in the system. You can use ```free``` to display the amount of free and used memory in the system. 

### Usage
    
```bash
free
```


#### Output 
```bash
              total        used        free      shared  buff/cache   available
Mem:        1000.0       900.0       100.0        10.0       100.0       100.0
Swap:       1000.0       900.0       100.0
```

## 20.```df```

This command is used to display the amount of disk space available on the file system. You can use ```df``` to display the amount of disk space available on the file system. You can also use ```df -h``` to display the amount of disk space available on the file system in human-readable format. You can also use ```df -T``` to display the amount of disk space available on the file system with the file system type.

### Usage
    
```bash
df
```

#### Output 
```bash
Filesystem     1K-blocks     Used Available Use% Mounted on
udev             1000000        0   1000000   0% /dev
tmpfs            1000000      100    100000   1% /run
/dev/sda1        1000000    10000    900000   1% /
tmpfs            1000000      100    100000   1% /dev/shm
tmpfs            1000000      100    100000   1% /run/lock
tmpfs            1000000      100    100000   1% /sys/fs/cgroup
/dev/sda2        1000000    10000    900000   1% /home
tmpfs            1000000      100    100000   1% /run/user/1000
```

# All in one chart

| Command       | Description                                                         | Usage                         |
|---------------|---------------------------------------------------------------------|-------------------------------|
| ```ls```      | List files and directories                                          | ```ls```                      | 
| ```cd```      | Change directory                                                    | ```cd```                      | 
| ```pwd```     | Print current working directory                                     | ```pwd```                     | 
| ```touch```   | Create a new file                                                   | ```touch file.txt```          | 
| ```mkdir```   | Create a new directory                                              | ```mkdir directory```         | 
| ```rm```      | Remove files or directories                                         | ```rm file.txt```             | 
| ```cp```      | Copy files or directories                                           | ```cp file.txt file2.txt```   | 
| ```mv```      | Move files or directories                                           | ```mv file.txt directory```   |
| ```cat```     | Display the contents of a file                                      | ```cat file.txt```            | 
| ```more```    | Display the contents of a file one page at a time                   | ```more file.txt```           | 
| ```less```    | Display the contents of a file one page at a time                   | ```less file.txt```           | 
| ```head```    | Display the first few lines of a file                               | ```head file.txt```           |
| ```tail```    | Display the last few lines of a file                                | ```tail file.txt```           | 
| ```grep```    | Search for a pattern in a file                                      | ```grep "pattern" file.txt``` | 
| ```find```    | Find files or directories                                           | ```find directory```          | 
| ```whereis``` | Find the binary, source, and manual page files for a command        | ```whereis ls```              | 
| ```which```   | Find the location of a command                                      | ```which ls```                | 
| ```man```     | Display the manual page of a command                                | ```man brew```                | 
| ```chmod```   | Change the permissions of a file or directory                       | ```chmod 777 file.txt```      | 
| ```chown```   | Change the owner of a file or directory                             | ```chown owner file.txt```    | 
| ```whoami```  | Print the current user                                              | ```whoami```                  | 
| ```date```    | Print the current date and time                                     | ```date```                    | 
| ```cal```     | Print the calendar of the current month                             | ```cal```                     | 
| ```clear```   | Clear the terminal                                                  | ```clear```                   | 
| ```echo```    | Print a message                                                     | ```echo "Hello World"```      | 
| ```uname```   | Print the system information                                        | ```uname```                   | 
| ```uptime```  | Print the uptime of the system                                      | ```uptime```                  | 
| ```w```       | Print the users who are currently logged in and what they are doing | ```w```                       | 
| ```who```     | Print the users who are currently logged in                         | ```who```                     | 
| ```ps```      | Print the currently running processes                               | ```ps```                      | 
| ```kill```    | Kill a process                                                      | ```kill 123```                |
| ```killall``` | Kill all processes by name                                          | ```killall bash```            |
| ```pkill```   | Kill a process by name                                              | ```pkill bash```              | 
| ```pgrep```   | Find the process ID by name                                         | ```pgrep bash```              |
| ```top```     | Display the dynamic real-time view of a running system              | ```top```                     | 
| ```htop```    | Display the dynamic real-time view of a running system              | ```htop```                    |
| ```free```    | Display the amount of free and used memory in the system            | ```free```                    | 
| ```df```      | Display the amount of disk space available on the file system       | ```df```                      | 

# Contributing

If you want to contribute to this repo, then you can fork this repo and make a pull request. I will review the pull request and merge it if it is good. You can also open an issue if you find any bugs or want to suggest something. I will try to fix the issue as soon as possible.# Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request

# License

This repo is licensed under the MIT license. See [LICENSE.md](LICENSE.md) for more details.

# Author

Muntasir Mahmud (Also known in GitHub as MuntasirSZN)

# Conclusion

I hope this repo helps you to memorize the linux commands. If you have any questions, then you can ask me in the issues section. I will try to answer your questions as soon as possible. If you want to contribute to this repo, then you can fork this repo and make a pull request. I will review the pull request and merge it if it is good. I hope this repo helps you. Thank you for reading this repo. Have a nice day. Goodbye.👋👋👋

**And**, don't forget to give a star to this repo.⭐⭐⭐

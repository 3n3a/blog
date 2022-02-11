---
title: "Guide: Install Windows on a Mac"
date: 2021-04-18T16:12:16+01:00
draft: false
authors: enk
tags: [guide, macos, windows]
---

_This guide covers the installation of Windows 10 on an Apple Mac. For demonstration purposes an [iMac (Mid-2011)](https://everymac.com/systems/apple/imac/specs/imac-core-i5-2.7-21-inch-aluminum-mid-2011-thunderbolt-specs.html) was utilised._

_This guide aims to show that Windows 10 can be installed without the use of Bootcamp at all. But as far as I know you still need a Mac for certain Steps._

> If you own a newer Mac it might be worthwile using the Official Boot Camp Installation & Setup Guide. But also if you need further guidance, which you can't find on [Apple's Forums](https://discussions.apple.com/community/windows_software/boot_camp).

## 1. Step: **Format the USB-Drive** {#format-usb}

The USB-Drive needs to be formatted as _ExFAT_, because _FAT32_ only supports file sizes of up to 4GB and Windows 10 has some files which exceed that limitation. [^1]
    
Boot into MacOS (if you are in a different partition on your mac, you can hold down the ```ALT``` key on boot and then select _MacOS_.) and open _Disk Utility_. Then insert the USB-Drive and _Erase_ it as _ExFAT_ (as can be seen in the image below). 
    
![Screenshot Disk Utility App's Erase Screen](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ab1973af-734d-4a3c-9a1d-6acbf16c725d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T112331Z&X-Amz-Expires=86400&X-Amz-Signature=95260cd5d1ee75c282f5f40c406803d85701827c5249ad9dbde6c81122395137&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22 "Screenshot: DiskUtility.app's Erase Screen")

## 2. Step: **Download Windows 10 ISO** {#download-iso}

Head over to the [Microsoft Download Website](https://www.microsoft.com/en-us/software-download/windows10ISO) preferably on a Non-Windows Computer and Download the Windows 10 ISO for your language. [^3]
    
![Screenshot: The Microsoft ISO Download Website](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1e8b4053-413f-4e10-8e43-fb6649743a2f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T113633Z&X-Amz-Expires=86400&X-Amz-Signature=a86319128c18b91e3149b450fdf5a7498e4b16f70409529770649185d540b769&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22 "Screenshot: The Microsoft ISO Download Website")
    
## 3. Step: **Download Bootcamp Software**

The Bootcamp Support Package for my specific iMac Model was downloaded by using [brigadier](https://github.com/timsutton/brigadier) [^2]. The following are the commands I ran in Terminal:
    

```bash
git clone https://github.com/timsutton/brigadier
python2 brigadier -m YOUR_MAC_MODEL_ID
```
    
Your specific Mac Model Id can be found on your Mac's casing, or on [everymac.com (Desktop)](https://everymac.com/systems/apple/index-apple-specs-applespec.html) / [(Mobile)](https://everymac.com/app/). In my case the ID of the iMac 2011 was ```iMac12,1```.
    
## 4. Step: **Copy Windows 10 to USB-Drive**
    
Once you have [downloaded the Windows 10 ISO](#download-iso) you should open it with _DiskImageMounter_, do this by _right-clicking_ it, then go to _Open With_ and finally select _DiskImageMounter_. This will open a new Window with its contents, now you're going to drag all of those files onto the USB-Drive, [which you formatted before](#format-usb).

![Screenshot: Finder Windows of Windows 10 Disk Image's Contents](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ca0de37e-ce14-4634-92d4-7354d80cae05/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T114533Z&X-Amz-Expires=86400&X-Amz-Signature=366534ad74a516c480c3863ba11b10202ef684d3a3012b53f78e57f1d4d5e854&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22 "Screenshot: Finder Windows of Windows 10 Disk Image's Contents")

## 5. Step: **Copy Bootcamp onto USB-Drive**

Go to the folder named _brigadier_ and open the folder within it, called something along the lines of _BootCamp-041-84868_. Inside of this folder you can find the _WindowsSupport.dmg_. Mount this Disk Image by _right-clicking_ it, then go to _Open With_ and then selecting _DiskImageMounter_. 

![Screenshot: Finder window of Brigadier Download](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1dca9160-44d7-4a1b-8eec-a17385f11f05/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T115845Z&X-Amz-Expires=86400&X-Amz-Signature=e405a8d0cee1c0f3b1df61c11106317c6b19821971cab0e774c3e88fb77ba05c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22 "Screenshot: Finder window of Brigadier Download")

A new Finder window opens with the Boot Camp Drivers, these are needed for Windows to interface with the Mac's hardware. Next you're going to copy all the files in the window _Boot Camp_ to your USB-Drive, by dragging them onto the USB-Drive Icon. 

![Screenshot: Finder window with Boot Camp Drivers](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7605f16a-5e15-4049-bb14-129065efddf2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210418T115847Z&X-Amz-Expires=86400&X-Amz-Signature=bc359ba9c87c41ea3f0aac3a08049121c1614ac62b50e1fbfdec21b565d95947&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22 "Screenshot: Finder window with Boot Camp Drivers")

Finder will ask you if you want to keep both copies of files, the best option here is to select _Apply to All_ and _Replace_.

## 6. Step: **Installing Windows**

First thing after finishing the above steps, is to eject the USB-Drive and shutdown your system. Then boot the system while holding down the ```ALT```-Key. As can be seen below, you select the Windows Icon and press ```Enter```

[^1]: [Install windows on a mac](https://gist.github.com/levibostian/1307b4f329562245900cb449bbcfdefa): Used as a general guide for the installation 
[^2]: [brigadier: Fetch and install Boot Camp ESDs with ease.](https://github.com/timsutton/brigadier): Used to download the correct bootcamp drivers from Apple's Servers.
[^3]: [Windows ISO Download (Microsoft)](https://www.microsoft.com/en-us/software-download/windows10ISO): Downloaded the Windows 10 ISO from here. Only works on Non-Windows Devices, e.g. a Mac.

# GM Companion
A simple cross-OS app to help GM run their games around a table.

## Introduction

I searched for a long time for an app that could help me run the campaign I GM for my kids. After several tries I often find out apps with bad UI design, breaking bugs or big bad paywall that make a "free" app being free only to register your credit card.

So, being the masochist I'm, I decided to begin writing my own, just for me. If someone else out there want to use it, you're welcome, let me know if you found it useful or what you found out not so useful.

You can download the built clients for:

- Windows: (link soon)
- Mac (link soon)
- Linux (link soon)

Eventually I could try and adapt the UI to works on mobile (do not expect phones as I don't think a phone will have enough battery to last a session anyway, maybe for tablets.

However please not that I can only test bugs on Windows and Linux (specifically Ubuntu 18+).

## Roadmap


 - [ ] Characters Manager  
 Help keep track of the character of your players.
 - [ ] Library import/creation  
 Allow users to create new items, monsters, spells, etc to be used in the rest of the application
 - [ ] Combat/Initiative Tracker
 Help keep track of the initiative, damage and buff/debuff during a fight.
 - [ ] Dungeon Manager  
 Help keeping track of which events happens in a dungeon map. Mind that it's not meant to be shared with the players so you'll still need a paper or board to which draw/represent the encounter as this UI will have all notes available for the GM to be seen.
 - [ ] Campaign Manager  
 Help grouping together different adventures belonging to the same campaign.
 - [ ] Adventure Manager  
 Help have various chapter of an adventure in an easy-to-browse way.

## You wanna help? Great!

GM companion currently runs with

- Angular v6.0.5 (+ angular-cli)
- Electron v2.0.3
- Electron Builder v20.13.4

It is built using the boilerplate provided by the nice guys at [Angular Electron](https://github.com/maximegris/angular-electron)!

### Getting Started

Clone this repository locally :

``` bash
git clone https://github.com/thecrius/gm-companion.git
```

Install dependencies with npm :

``` bash
npm install
```

### To build for development

- **in a terminal window** -> npm start  

The Electron code is managed by `main.ts`.
The Angular code is inside `/src`.

### Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

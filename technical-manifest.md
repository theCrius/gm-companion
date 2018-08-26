
# GM Companion Technical Manifest

## Entities Structure & Relations

For the prototype we are going for json file stored in locally. The names of the entity created will act as key so they will have to be unique. For the names, the `spaces` will be converted in `_`.

## Index
It's basically a simple array (`[Thing]` means `Array of Things`) that list the created campaigns. Something like:

```
[
  "campaign.file_name_1",
  "campaign.file_name_2",
  ...
]
```

It is created as an empty array by default the first time the application start.

## Campaign
Created by adding a new json file with prefix `campaign.`  
The Campaign Object follow this structure:

```
{
  name: ["campaign name"], // Every edit add a new element, most recent is the one displayed
  author: ["author name"], // Every edit add a new element, most recent is the one displayed
  adventures: ["adventure.file_name"], // Check the Adventure object for details
  heroes: ["hero.file_name"] //Check the Hero object for more details
}
```

Every Hero or Adventure must have a unique name as well. When one of this entity is saved, the system will tell the user if there is already an occurrence of the name already stored.  
If there is, the user should be able to decide to overwrite it or change the name of the new one.


## Adventures
Created by adding a new json file with prefix `adventure.`  
The Adventure Object follow this structure:

```
{
  name: ["adventure name"], // Every edit add a new element, most recent is the one displayed
  author: ["author name"], // Every edit add a new element, most recent is the one displayed
  chapters: [Chapter], // read below for the chapter structure,
  challenges: [Challenge], // read below for the Challenge structure
  npcs: [Npc], // read below for the NPC structure
  maps: [map.file_name], // read below for the map structure
  audio: ["audio.file_name"] // Check the Media object for details
}
```

### Mentions

Before going into details it's important to talk about `Mentions`. Mentions are not a data model per se but a mechanics that will be widely available in the application. Lots of entity (adventures, challanges, etc) will support Mentions inside their description. The mentions are way of referring to other entities that will make the text actionable (a link in appearance). Interacting with a mention will open the details of the mentioned entity in a separated view (modal, dialog or sidebar, yet to be decided).

### Chapters

A Chapter is basically a well defined part of an adventure. It hasn't any code-related meaning, in fact it's loaded into the same file of the adventure itself. It's just to help the user organize their adventure in smaller sections. An example of chapter could be "Meeting at the tavern", followed by "Town's attacked", and so on.

A Chapter's structure is as follows:

```
{
  name: "Chapter's title",
  order: 0, // will be used to display the chapters and reorder them
  summary: "A short description of the events in this chapter",
  full: "A detailed description of the events in this chapter. Following the example mentioned before, this attribute will have the full description of the tavern, the guests that are present if relevant. Challenges, NPCs (important ones), Maps and Media will be inserted using the UI that will write them down using a sort of markdown format, something like \[NPC\](npc:id) so that in the UI it will be rendered as an interactable element that will open a dedicated modal/sidebar/something with the additional informations."
}
```

### Challenges

A Challenge is everything that involves a potential failure of the players. This includes a fight, a trap or a puzzle. The structure is as follows:

```
{
  id: 1, // assigned by the system
  name: "A human friendly name like 'spike traps' or 'band of goblins'",
  type: "trap", // can be: trap, puzzle or fight
  description: "A description for the challange, detailed as necessary. A fight could have description of strategy that will be used by the NPCs, a trap a description of the trap itself as well as relatives checks to notice and disable it. A puzzle would have the description as well as the resolution or any hint to be given. This section, as well as the Chapter one, will have the support of Mentions for NPCs"
}
```

### NPCs

An NPC is a simply a character not played by the players but by the GM.  
It will be possible to create a character from scratch or load one from a previously loaded library of NPCs. In any case, the structure of the NPC object will be as follows:

```
{
  id: 1, //Assigned by the system
  name: "some guy",
  description: "Some generic or detailed description of this NPC",
  attributes: [
    { name: "strenght", value: 10 },
    { name: "cleverness", value: 15 },
    { name: "AC", value: 25 },
    { name: "Willpower", value: "+10" },
    { name: "whatever", value: "don't care" }
    //The attributes will be a generic key:value pair to support different type of ruleset. It will be rendered as a sort of table in the UI. These should be basic key attributes of the NPC.
  ],
  special: [
    { name: "flaming breath", value: "This guy have a nasty breath and standing too close will cause mild nausea, -1 to any insight roll against him" },
    // Again this will be a generic key:value pair but it will be rendered differently in the UI. This should be things that are important in specific situations or complicated effects (signature powers and the like)
  ]
}
```

## Maps

A map is a file that will have a prefix `maps.` and must be one of the common image format.

After the initial release, we'll implement ways to add POI in the maps UI so that it will be possible to properly plan encounters, traps and puzzle in the map interface as well as keep track of the players positions meanwhile they progress through a location.

## Audio

A media is a file that will have a prefix `audio.` and will be played by the application through the appropriated UI when its Mention is being activated (a simple UI to play it once or in loop should be easy enough to be included in the first version).


-- First draft 26th Aug 2018

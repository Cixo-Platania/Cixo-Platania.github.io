// All project content lives here. Text comes from the original Wix portfolio
// and the CV; nothing is invented. Image paths are relative to src/assets/,
// video names refer to public/videos/<name>.mp4 (+ .jpg poster).

export type Media =
  | { type: 'image'; src: string; alt: string; caption?: string }
  | {
      type: 'video';
      src: string;
      title: string;
      caption?: string;
      /** Short silent clip: autoplays muted in a loop, like a GIF. */
      loop?: boolean;
      /** Phone capture: rendered in a narrow column. */
      portrait?: boolean;
    };

export interface Section {
  title: string;
  body?: string[];
  list?: string[];
  links?: { label: string; href: string }[];
  media?: Media[];
  /** Number of columns for the media grid on desktop (default 2). */
  columns?: 1 | 2 | 3 | 4;
}

export interface Project {
  slug: string;
  /** Dominant colour of the game's art; tints the project's banner and page. */
  accent: string;
  title: string;
  tagline: string;
  kind: 'Professional' | 'Academic' | 'Personal' | 'Game jam';
  context: string;
  year: string;
  engine: string;
  team?: string;
  duration?: string;
  tools: string[];
  roles: string[];
  cover: string;
  featured: boolean;
  links: { label: string; href: string }[];
  overview: string[];
  contributions: string[];
  sections: Section[];
}

export const projects: Project[] = [
  {
    slug: 'vaf-survivor',
    accent: '#35d8ff',
    title: 'VAF-Survivor',
    tagline: 'Vampire Survivors-style horde shooter for PC and mobile, built solo in Unreal Engine 5.',
    kind: 'Professional',
    context: 'VAF Gaming Studio',
    year: '2026',
    engine: 'Unreal Engine 5',
    team: 'Solo',
    tools: ['Unreal Engine 5', 'Blueprint', 'UMG', 'Claude Code', 'Blender'],
    roles: ['Game Design', 'Level Design', 'Technical Design', 'UI Implementation', 'Builds & Release'],
    cover: 'vaf-survivor/cover.jpg',
    featured: true,
    links: [],
    overview: [
      'VAF-Survivor is a horde-survival shooter in the vein of Vampire Survivors, played from a third-person camera on PC and phones. You pick a character, drop into the arena and survive wave after wave while auto-firing, collecting XP and choosing power-ups.',
      'I made the game on my own in Unreal Engine 5: design, level, gameplay logic, UI implementation and builds. The starting point was a marketplace survivors template; the art comes from online asset packs and AI-generated assets, and I used Claude Code connected to the Unreal editor as a pair programmer.',
    ],
    contributions: [
      "Camera and controls: replaced the template's fixed top-down view with a free third-person orbit camera, with auto-aim and always-on auto-fire, and fixed movement so it stays camera-relative at any pitch.",
      'Balancing: found that the player killed twice as fast as enemies spawned, then retuned five values (spawn interval, enemies per round, fire range, enemy health) so that standing still gets you surrounded.',
      'Progression: extended the level-up system with new passive power-ups (damage, fire rate), XP pickups dropped by enemies, temporary area-of-effect weapons, and a persistent currency saved between runs.',
      'Arena: turned a closed bunker into an open fantasy field with a sci-fi road built on a spline, clusters of houses, foliage and cinematic lighting (volumetric fog, god rays, colour grade).',
      'UI: built every screen in UMG from the UI kits: HUD, main menu, character select with a 3D showcase, settings, how-to-play (PC and mobile tabs), loading screen, level-up cards and game over.',
      'Mobile: dual virtual joysticks, a HUD layout for touch, and quality profiles for phones.',
      'Performance: profiled the arena, found it was CPU-bound (game thread about twice the GPU time) and optimised how enemies animate and tick.',
      'Builds: packaged for Windows, Android and iOS (TestFlight), including fixing a first-launch crash on iOS.',
    ],
    sections: [
      {
        title: 'Gameplay',
        body: [
          'Highlights from waves 8 and 16: moving through the arena under auto-fire, combo and XP feedback, weapon pickups and the grenade launcher.',
        ],
        media: [{ type: 'video', src: 'vaf-survivor-gameplay', title: 'VAF-Survivor gameplay highlights' }],
        columns: 1,
      },
      {
        title: 'Balancing: making standing still lethal',
        body: [
          'At one point the game was trivial: you could stand still and kill everything without risk. Instead of guessing, I looked at the numbers. The weapon dealt 50 damage every 0.4 seconds, a level-1 zombie had 10 HP and one enemy spawned every 0.8 seconds: about 2.5 kills per second against 1.25 arrivals, so nothing ever piled up.',
          'The fix was five values and no new logic:',
        ],
        list: [
          'Spawn interval: 0.8 s to 0.35 s.',
          'Base enemies per round: 6 to 14, and enemies added each round: 3 to 6.',
          'Fire range: 1200 to 650, the most sensitive of the five, so enemies get close before they die.',
          'Zombie health: from 10 HP to 55 HP at level 1, chosen so the 50-damage weapon needs two hits.',
        ],
        media: [
          { type: 'image', src: 'vaf-survivor/gameplay-2.jpg', alt: 'Wave 16: a group of enemies advancing on the player across the arena', caption: 'Wave 16 after the rebalance' },
          { type: 'image', src: 'vaf-survivor/level-up.jpg', alt: 'Level-up screen offering a choice between a heal and a damage power-up', caption: 'Level-up choice' },
        ],
      },
      {
        title: 'Menus and UI flow',
        body: [
          'The full front end, from the main menu to the arena: settings, the how-to-play window with separate PC and mobile tabs, character select with a 3D showcase you can rotate, and a loading screen that loads the real assets step by step.',
          'The UI kits were source images, so each screen was rebuilt in UMG and wired to the gameplay variables. Number count-ups, fades and flying tokens are animated by hand.',
        ],
        media: [{ type: 'video', src: 'vaf-survivor-ui', title: 'VAF-Survivor menu and UI flow' }],
        columns: 1,
      },
      {
        title: 'Screens',
        media: [
          { type: 'image', src: 'vaf-survivor/main-menu.jpg', alt: 'VAF Survivor main menu with the cast of characters', caption: 'Main menu' },
          { type: 'image', src: 'vaf-survivor/character-select.jpg', alt: 'Character select screen with a 3D model on a stage and its card', caption: 'Character select' },
          { type: 'image', src: 'vaf-survivor/settings.jpg', alt: 'Settings window with audio and game options', caption: 'Settings' },
          { type: 'image', src: 'vaf-survivor/how-to-play-mobile.jpg', alt: 'How-to-play window on the mobile tab: drag to move, auto-fire, collect everything', caption: 'How to play, mobile tab' },
          { type: 'image', src: 'vaf-survivor/loading.jpg', alt: 'Loading screen with a progress bar', caption: 'Loading screen' },
          { type: 'image', src: 'vaf-survivor/gameplay-1.jpg', alt: 'Wave 1 in the arena with the HUD: health, wave timer, minimap, weapon and XP bar', caption: 'In-game HUD' },
        ],
        columns: 3,
      },
      {
        title: 'From first playable to demo',
        body: [
          'An early build from late August, with the first version of the character select, loading screen and HUD. Compare it with the videos above to see how far the interface and the arena moved in three weeks.',
        ],
        media: [{ type: 'video', src: 'vaf-survivor-early', title: 'VAF-Survivor early build' }],
        columns: 1,
      },
      {
        title: 'How I worked with Claude Code',
        body: [
          'The whole project ran through three long Claude Code sessions between July and September 2026. Claude was connected to the running Unreal editor through MCP servers, so it could read Blueprint graphs, widgets and data tables, run Python in the editor and make the edits I asked for.',
          'The division of work stayed the same throughout. I decided what the game should be, played every change, and described what felt wrong ("the player moves strangely", "it is too easy standing still"). Claude traced the cause in the project, proposed a fix with the numbers behind it, and applied it once I agreed. Then I played again.',
          'To keep long sessions from losing context, the project keeps a written memory: about fifty short notes, one per system or trap, covering how the weapon and damage pipeline works, how the HUD is wired, which editor operations are destructive, and what broke only in packaged builds. Every new session started from those notes.',
        ],
        list: [
          'Session 1 (July): migrating the project to the current engine version and setting up the editor connection.',
          'Session 2 (August): gameplay, including the third-person camera, XP drops and the arena overhaul.',
          'Session 3 (August to September): UI, mobile controls, performance, balancing, and the Windows, Android and iOS builds.',
        ],
      },
    ],
  },
  {
    slug: 'sacred-vendors',
    accent: '#d8a45c',
    title: 'Sacred Vendors',
    tagline: 'First-person horror-stealth set in a 1980s Catholic medical institution.',
    kind: 'Personal',
    context: 'Bad Idea Games',
    year: '2023 – 2024',
    engine: 'Unreal Engine 5',
    team: '11 people',
    duration: '6 months (vertical slice)',
    tools: ['Unreal Engine 5', 'Trello', 'G-Suite'],
    roles: ['Level Design', 'Balancing', '3C Design'],
    cover: 'sacred-vendors/cover.png',
    featured: true,
    links: [],
    overview: [
      'Sacred Vendors is a first-person horror-stealth game where the scandal of Los niños robados del franquismo is exposed through the eyes of a hypothetical child striving to escape from a Catholic medical institution.',
      'We were a team of 11 and worked for six months to build this vertical slice in Unreal Engine 5.',
    ],
    contributions: [
      'Designed the first level together with another level designer.',
      'Designed the tutorial level on my own.',
      'Worked on the flow chart and beat breakdown that set the pacing of the level.',
      'Balancing and 3C (character, camera, controls) design.',
    ],
    sections: [
      {
        title: 'Gameplay',
        media: [{ type: 'video', src: 'sacred-vendors-gameplay', title: "Sacred Vendors gameplay" }],
        columns: 1,
      },
      {
        title: 'Flow chart',
        body: [
          'This was the first step of our work: we created a legend and then broke the game down into beats to show the pacing and to teach the player how to go through the level. In the first part of the game we keep a much slower pace, so the player can get used to the mechanics at their own speed.',
        ],
        media: [
          {
            type: 'image',
            src: 'sacred-vendors/flow.png',
            alt: 'Flow chart of the level broken down into beats, with a colour legend',
            caption: 'Level flow, broken down into beats',
          },
        ],
        columns: 1,
      },
      {
        title: 'Level design',
        body: [
          "Right after the flow, we began drafting the level's layout. Going into the engine beforehand gave us references for the player's speed and size.",
          'Then we started working on the actual level, splitting it into two clear floors. We wanted to give players the ability to explore both floors in any order they chose. For this we used locked doors, which force players to move up and down between the two floors.',
          "We also added a small corridor that can be entered through an opening grate, so the player doesn't unintentionally end up in a dead end while being chased by the enemy.",
        ],
        media: [
          {
            type: 'image',
            src: 'sacred-vendors/draft-f1.png',
            alt: 'Top-down layout draft of the first floor',
            caption: 'Draft: floor 1',
          },
          {
            type: 'image',
            src: 'sacred-vendors/draft-f2.png',
            alt: 'Top-down layout draft of the second floor',
            caption: 'Draft: floor 2',
          },
        ],
      },
      {
        title: 'Final result',
        body: [
          "We managed to make a scary, creepy hospital with an attached church. We also tried to be as realistic as possible and to use old furniture, because the game is set in the '80s: we studied furniture and hospitals of that period and tried to replicate the feeling.",
        ],
        media: [
          { type: 'image', src: 'sacred-vendors/church.png', alt: 'In-engine screenshot of the church area', caption: 'Church' },
          { type: 'image', src: 'sacred-vendors/hospital.png', alt: 'In-engine screenshot of the hospital ward', caption: 'Hospital' },
          { type: 'image', src: 'sacred-vendors/second-floor.png', alt: 'In-engine screenshot of the second floor', caption: 'Second floor' },
          { type: 'image', src: 'sacred-vendors/hub.png', alt: 'In-engine screenshot of the hub', caption: 'Hub' },
          { type: 'image', src: 'sacred-vendors/dormitory.png', alt: 'In-engine screenshot of a dormitory with hospital beds' },
          { type: 'image', src: 'sacred-vendors/room.png', alt: 'In-engine screenshot of a tiled room with a single bed' },
        ],
      },
    ],
  },
  {
    slug: 'into-the-soundscape',
    accent: '#ff5fa8',
    title: 'Into the Soundscape',
    tagline: 'Third-person roguelite rhythm action game.',
    kind: 'Academic',
    context: 'Digital Bros Game Academy',
    year: '2024',
    engine: 'Unreal Engine 5',
    team: '16 people',
    duration: '9 months',
    tools: ['Unreal Engine 5', 'Visual graph paper', 'Trello', 'G-Suite'],
    roles: ['Level Design', 'Game Design'],
    cover: 'into-the-soundscape/cover.png',
    featured: true,
    links: [],
    overview: [
      'Into the Soundscape unfolds as a third-person roguelite rhythm action game, made in Unreal Engine 5.',
      'On this project I focused on level design. Since there were quite a lot of designers on board, I was able to concentrate on what I love most as a designer.',
      'We were a team of 16 and worked for nine months to make the game, with two worlds.',
    ],
    contributions: [
      'Designed a system that makes each room a bit different every time the player enters it, which let us deliver two worlds in nine months.',
      'Made three different drafts for each map, to keep the number of maps low while still giving players the feeling of discovering something new.',
      'Set up and maintained the metrics for every object and every map.',
    ],
    sections: [
      {
        title: 'Trailer',
        media: [{ type: 'video', src: 'soundscape-trailer', title: 'Into the Soundscape trailer' }],
        columns: 1,
      },
      {
        title: 'Level design',
        body: [
          'For this project I created a system that makes the room a bit different every time the player enters it. This is how we were able to develop two worlds in nine months.',
          'Then I made three different drafts for each map: fewer maps to build, but players still get the feeling of discovering something new every time.',
          'To keep things tidy we created two separate project files: one collects every variant of each map, including the metrics of each object; the other compiles the metrics of all the maps.',
        ],
        media: [
          {
            type: 'image',
            src: 'into-the-soundscape/legend.png',
            alt: 'Isometric legend with the metrics of doors, spawners, traps, obstacles and loot boxes',
            caption: 'Legend and object metrics',
          },
          {
            type: 'image',
            src: 'into-the-soundscape/room-empty.png',
            alt: 'Two empty isometric room outlines on graph paper',
            caption: 'Empty room shells',
          },
        ],
      },
      {
        title: 'System breakdown',
        body: ['The key to making this system work, and keeping gameplay efficient, was twofold:'],
        list: [
          "Design rooms that don't have too much collision.",
          'Never let a larger object appear in front of a smaller one, or the smaller one will be hidden.',
        ],
        media: [
          {
            type: 'image',
            src: 'into-the-soundscape/map-before.jpg',
            alt: 'Isometric grid of a room with a legend of spawner types, before the player enters',
            caption: 'Map before the player enters',
          },
          {
            type: 'image',
            src: 'into-the-soundscape/map-after.png',
            alt: 'Isometric grid of the same room after the player enters',
            caption: 'Map after the player enters',
          },
          {
            type: 'image',
            src: 'into-the-soundscape/spawn-system.png',
            alt: 'Diagram of how loot boxes, traps and enemies are spawned within a range',
            caption: 'Loot boxes, traps and enemy spawning',
          },
        ],
        columns: 3,
      },
      {
        title: 'Drafts',
        media: [
          {
            type: 'image',
            src: 'into-the-soundscape/draft-iso.png',
            alt: 'Isometric blockout draft of a room with colour-coded objects',
            caption: 'Draft 1',
          },
          {
            type: 'image',
            src: 'into-the-soundscape/drafts.png',
            alt: 'Four isometric variants of the same room',
            caption: 'Draft 2: room variants',
          },
        ],
      },
      {
        title: 'Final result',
        body: [
          'As a final result we decided to rework the hub itself, which was designed on a square base. This way we could use the modular design much more neatly.',
        ],
        media: [
          { type: 'image', src: 'into-the-soundscape/shot-1.png', alt: 'Gameplay screenshot of a forest room with a rhythm bar' },
          { type: 'image', src: 'into-the-soundscape/shot-2.png', alt: 'Gameplay screenshot of a combat encounter at night' },
          { type: 'image', src: 'into-the-soundscape/shot-3.png', alt: 'Gameplay screenshot of a night forest room' },
          { type: 'image', src: 'into-the-soundscape/shot-4.png', alt: 'Gameplay screenshot of a boss fight with a health bar' },
          { type: 'image', src: 'into-the-soundscape/shot-5.png', alt: 'Gameplay screenshot of a room with a pond' },
          { type: 'image', src: 'into-the-soundscape/shot-6.png', alt: 'Gameplay screenshot of a daytime forest room' },
        ],
        columns: 3,
      },
    ],
  },
  {
    slug: 'vaf-arcade',
    accent: '#c05bff',
    title: 'VAF-Arcade',
    tagline: 'Endless space-invader game, kept alive with live ops.',
    kind: 'Professional',
    context: 'VAF Gaming Studio',
    year: '2021 – now',
    engine: 'Unity',
    team: '9 people',
    tools: ['Unity', 'ClickUp', 'Discord'],
    roles: ['Game Design', 'Technical Design', 'UX/UI Design'],
    cover: 'vaf-arcade/cover.png',
    featured: false,
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.VAFGamingStudios.VAFFACosmo' },
      { label: 'App Store', href: 'https://apps.apple.com/no/app/vaf-arcade/id1634205392' },
    ],
    overview: [
      'VAF-Arcade is an endless space-invader game where I work as both a game designer and a technical designer.',
      "I've worked at VAF for almost four years, and right now we're keeping the game updated with live ops. We are a team of nine, communicating on Discord and using ClickUp for tasks and documentation.",
    ],
    contributions: [
      'Designed the majority of the mechanics and of the user experience of the game.',
      'Wrote the feature documents: technical details for development plus the UX/UI section describing how the interface should look and where each element goes.',
      'Researched how popular games implement comparable systems before designing ours.',
    ],
    sections: [
      {
        title: 'UX/UI showcase',
        media: [
          { type: 'video', src: 'vaf-arcade-flow-a', title: 'Main menu flow', caption: 'Main menu flow', portrait: true },
          { type: 'video', src: 'vaf-arcade-flow-b', title: 'Purchase flow', caption: 'Purchase flow', portrait: true },
        ],
      },
      {
        title: 'How the project works',
        body: [
          'I joined the project when it was already in progress. I was first introduced to the idea of a space invader living in a play-to-earn system similar to Axie Infinity.',
          'After the first release we brainstormed and decided to create a more complete game: multiple cells, each with special abilities, a versus mode, quests, and an integrated AI system using Convai. The AI is not only a tutorial helper but also an assistant for the player: it listens and responds to commands, or performs an action such as opening a menu.',
        ],
        media: [
          { type: 'image', src: 'vaf-arcade/gameplay.png', alt: 'VAF-Arcade gameplay: a cell firing a beam upwards in space' },
          { type: 'image', src: 'vaf-arcade/cover.png', alt: 'VAF Cosmo marketplace key art' },
        ],
      },
      {
        title: 'Design workflow at VAF',
        body: [
          'Usually we start with just an idea or, more often, a feature request, like a quest system or a levelling system. Then we break down how other popular games have implemented that feature, looking for all the implicit information we need to include.',
          'Only then do we start on the document, which includes all the technical details for developing the feature and the UX/UI section, which describes how the interface should look and where each element should be located.',
        ],
      },
    ],
  },
  {
    slug: 'vaf-kart',
    accent: '#ffb526',
    title: 'VAF-Kart',
    tagline: 'Multiplayer kart racer for PC and phone, set in the VAF universe.',
    kind: 'Professional',
    context: 'VAF Gaming Studio',
    year: '2021 – now',
    engine: 'Unity',
    team: '9 people',
    duration: '3 months, then live updates',
    tools: ['Unity', 'ClickUp', 'Discord'],
    roles: ['Game Design', 'Technical Design', 'UX/UI Design', 'Testing'],
    cover: 'vaf-kart/cover.jpg',
    featured: false,
    links: [],
    overview: [
      'VAF-Kart is a racing game similar to Mario Kart. We had to develop it in three months and then keep it updated.',
      'I worked as a game designer, covering all the design roles that needed to be filled: UX/UI, testing, even technical design. We were a group of nine, communicating on Discord and using ClickUp for task management and documentation.',
    ],
    contributions: [
      "Redesigned the company's initial idea to fit the VAF universe.",
      'Designed the UX/UI.',
      'Customised the power-ups and worked on the maps.',
      'Set up the reward and leaderboard systems.',
      'Multiplayer testing and bug reporting.',
    ],
    sections: [
      {
        title: 'Gameplay',
        media: [{ type: 'video', src: 'vaf-kart-gameplay', title: 'VAF-Kart gameplay (tutorial)' }],
        columns: 1,
      },
      {
        title: 'How the project works',
        body: [
          'This had to be a fun, easy-to-play game for all ages. It also needed to be playable on PC and phone. Lastly, the game needed to involve the VAF universe and include multiple players.',
        ],
        media: [
          { type: 'image', src: 'vaf-kart/matchmaking.png', alt: 'Matchmaking screen with power-up descriptions and player slots', caption: 'Matchmaking' },
          { type: 'image', src: 'vaf-kart/race-1.png', alt: 'Race gameplay on a snowy track with a minimap' },
          { type: 'image', src: 'vaf-kart/race-2.png', alt: 'Race gameplay approaching a boost pad' },
          { type: 'image', src: 'vaf-kart/race-3.png', alt: 'Race gameplay showing a wrong-direction warning' },
        ],
      },
      {
        title: 'Design workflow',
        body: [
          'The company gave us the idea and we redesigned it to make it suitable for the VAF universe: we created the UX/UI, customised the power-ups and started building the maps. After that we set up all the rewards and the leaderboard system.',
          'Then we moved on to testing the multiplayer game and bug fixing.',
        ],
      },
    ],
  },
  {
    slug: 'save-the-dungeon',
    accent: '#8fd14f',
    title: 'Save the Dungeon',
    tagline: 'Solarpunk dungeon crawler where powerful skills pollute the world.',
    kind: 'Game jam',
    context: 'Bad Idea Games · Day Zero Games Solarpunk Jam',
    year: 'April – May 2025',
    engine: 'Unity',
    team: '14 people',
    tools: ['Unity', 'ClickUp', 'G-Suite'],
    roles: ['Game Design', 'Combat Design', 'UX/UI', 'VFX'],
    cover: 'save-the-dungeon/cover.png',
    featured: true,
    links: [
      { label: 'Play on itch.io', href: 'https://itch.io/jam/day-zero-games-solarpunk-jam/rate/3542242' },
    ],
    overview: [
      'Save the Dungeon aims not only to raise awareness about pollution, but also to offer moments of reflection and small technical insights that highlight the importance of technology and research in building a sustainable future.',
      'The core concept is to encourage players to reflect on these themes not solely through narrative, but primarily through gameplay that is thematically linked to the real-world condition of planet Earth today.',
      'The build is the prototype of the tutorial and first level. The full vision is a solarpunk Darkest Dungeon with a simplified management system and a twist: the weight of the player\'s choices. To this end we developed the "Pollutant Skills" mechanic: powerful but polluting abilities that offer great short-term benefits and come with significant long-term consequences.',
    ],
    contributions: [
      'Combat design: typing, damage, health, speed priority and pollutant attacks.',
      'Designed all the UX wireframes, studying well-known JRPGs.',
      'Built the UI in Unity, working side by side with the art department, who sent me the pieces.',
      'VFX made with the Unity particle system, including all the materials for the effects.',
    ],
    sections: [
      {
        title: 'Gameplay',
        media: [{ type: 'video', src: 'save-the-dungeon-gameplay', title: "Save the Dungeon gameplay" }],
        columns: 1,
      },
      {
        title: 'The game',
        body: [
          "A Pokémon-style type-combination system for attacks (with far fewer combinations) is only partially implemented: it works, but it isn't made explicit. It is intuitive, though: a mechanical engineer will be more effective than a veterinarian at fixing an exhaust pipe, and so on.",
          'To make sure the prototype is fully playable and understandable, we opted for easier balancing.',
        ],
        media: [
          { type: 'image', src: 'save-the-dungeon/hub.png', alt: 'The hub: a solarpunk village with the party list', caption: 'Hub' },
          { type: 'image', src: 'save-the-dungeon/overworld-1.png', alt: 'Dungeon exploration along a polluted purple river', caption: 'Dungeon' },
          { type: 'image', src: 'save-the-dungeon/overworld-2.png', alt: 'Dungeon exploration on a forest path' },
          { type: 'image', src: 'save-the-dungeon/logo.png', alt: 'Save the Dungeon logo' },
        ],
      },
      {
        title: 'Combat design',
        body: [
          'The combat system is based on typing for attacks and enemies, damage, health points and speed priority:',
        ],
        list: [
          'Each attack and each enemy has an assigned type, with specific interactions with other types.',
          'Each playable character is neutral type, and has a related type which determines the types of attack they can learn. All characters can learn neutral attacks.',
          'After selecting an attack, players choose the target (single-target attacks) or confirm it (AoE attacks).',
          'Each combat is set in a static combat map which loads when interacting with a point of interest in the dungeon or when a random encounter happens. Characters and enemies are both arranged in a line.',
          'Action priority is based on speed, fastest to slowest. Each character can attack only once per turn.',
          "Players can spend a character's turn to heal with a potion. There are 3 potions for the whole dungeon, shown at the bottom left of the screen.",
          'Each attack can deal damage, heal, buff, debuff, inflict a status, or a combination of these.',
          'Each playable character has a pollutant attack which is very powerful, but leads to negative effects in the long term.',
          'Each enemy has an eco-points value which players gain after defeating it. At the end of a fight a reward is awarded (eco-points or a potion).',
          'When a playable character dies, they are lost forever. When all characters die, players go back to the hub.',
        ],
        links: [
          { label: 'Combat flow sheet', href: 'https://docs.google.com/spreadsheets/d/1A7H3mz-7VBL9SXUkdrxdVqjl9Uv-edlq_dsv5wbUi8c/edit?gid=640711690#gid=640711690' },
          { label: 'Type interactions sheet', href: 'https://docs.google.com/spreadsheets/d/1A7H3mz-7VBL9SXUkdrxdVqjl9Uv-edlq_dsv5wbUi8c/edit?gid=904959989#gid=904959989' },
          { label: 'Economy and balance sheet', href: 'https://docs.google.com/spreadsheets/u/0/d/1qBXIRWuPbYQDi8FWN9BCjcHjT906IAjUEFIqyVlJQjM/edit' },
          { label: 'Combat layout reference (YouTube)', href: 'https://youtu.be/cL0uCWVxTvM?si=GPbwxhPwLCDOiWLQ&t=396' },
        ],
        media: [
          { type: 'image', src: 'save-the-dungeon/fight.png', alt: 'Combat screen: two characters facing an enemy, with the turn order on the left', caption: 'Combat' },
          { type: 'image', src: 'save-the-dungeon/fight-heal.png', alt: 'Combat screen with the attack and heal menu open', caption: 'Attack and heal menu' },
        ],
      },
      {
        title: 'UX/UI',
        body: [
          "To make a good JRPG you have to produce a lot of UX, test whether it fits the game, and then change what doesn't work. We studied a lot from other famous JRPGs.",
          'These are the UX wireframes I made and then ported into the game. For the porting I worked side by side with the art department: they sent me the pieces and I built the UI in Unity.',
        ],
        media: [
          { type: 'image', src: 'save-the-dungeon/ux-fight.png', alt: 'Wireframe of the fight HUD and game-over screen', caption: 'Fight HUD' },
          { type: 'image', src: 'save-the-dungeon/ux-gameover.png', alt: 'Wireframes of the "you died" and "dungeon finished" screens', caption: 'End-of-run screens' },
          { type: 'image', src: 'save-the-dungeon/ux-map.png', alt: 'Wireframe of the map and overworld HUD', caption: 'Map and overworld HUD' },
          { type: 'image', src: 'save-the-dungeon/ux-guild.png', alt: 'Wireframe of the Ecologist guild and Bloomforge hub screens', caption: 'Hub: Ecologist guild, Bloomforge' },
          { type: 'image', src: 'save-the-dungeon/ux-clinic.png', alt: 'Wireframe of the Biodome clinic and Symbiosis lab hub screens', caption: 'Hub: Biodome clinic, Symbiosis lab' },
        ],
        columns: 3,
      },
    ],
  },
  {
    slug: 'the-gondoliers-fugue',
    accent: '#8f8cff',
    title: "The Gondolier's Fugue",
    tagline: 'A gondolier trapped in a time loop in a Venetian canal.',
    kind: 'Professional',
    context: 'Bad Idea Games',
    year: 'February – April 2025',
    engine: 'Unity 6',
    team: '14 people',
    tools: ['Unity', 'ClickUp', 'G-Suite'],
    roles: ['Puzzle & Game Design', 'QA & Feedback Design', 'VFX & Shaders'],
    cover: 'the-gondoliers-fugue/cover.png',
    featured: true,
    links: [{ label: 'Play on itch.io', href: 'https://solzimer23.itch.io/the-gondoliers-fugue' }],
    overview: [
      'You are a gondolier trapped in a time loop in a Venetian canal. Solve puzzles to uncover the mystery behind it and choose the ending you prefer.',
      'This is an experimental indie game, deeply inspired by P.T. and Lovecraft. The only mechanics are rowing through the canal, moving your view and zooming in.',
    ],
    contributions: [
      'Puzzle and game design: mapped every action the player needs to complete each puzzle across all the loops.',
      'QA and feedback design: ran playtests at each stage with people who knew nothing about the game.',
      'VFX and shaders, made with the Unity particle system, including all the materials for the effects.',
    ],
    sections: [
      {
        title: 'Gameplay',
        media: [{ type: 'video', src: 'gondoliers-fugue-gameplay', title: "The Gondolier's Fugue gameplay" }],
        columns: 1,
      },
      {
        title: 'Puzzle & game design',
        body: [
          'We made a scheme that divides each action the player needs to perform to complete a puzzle across all the loops of the game. This way we know if the player has too many things to do in one loop, and whether a loop is too confusing.',
          'In the full scheme the numbers are the loops and the yellow boxes on top are the puzzles. Inside each green box are the actions the player has to perform to finish that part of the puzzle.',
        ],
        media: [
          { type: 'image', src: 'the-gondoliers-fugue/scheme-detail.png', alt: 'Detail of the puzzle scheme: three loops with the actions required for each puzzle', caption: 'Scheme detail: loops 1 to 3' },
          { type: 'image', src: 'the-gondoliers-fugue/scheme-full.png', alt: 'Full puzzle scheme across ten loops', caption: 'Full scheme: loops as rows, puzzles as columns' },
        ],
      },
      {
        title: 'QA & testing',
        body: [
          'The core of this project was testing the game as much as we could, not only to see if players knew what to do, but also to see if the core mechanics were fun even though the player can only move and look.',
          'We added screen shake, sound effects, visual effects and the voice of the "alien", which sometimes talks to the player and gives hints, but sometimes leads the player to fail the puzzle.',
          'We ran multiple tests at each stage with people who knew nothing about the game, to see if it was going in the right direction and if players understood what to do, or when they had done something right.',
        ],
        media: [
          { type: 'image', src: 'the-gondoliers-fugue/canal-1.png', alt: 'In-game view of the Venetian canal at night' },
          { type: 'image', src: 'the-gondoliers-fugue/canal-2.png', alt: 'In-game view of the canal under a full moon' },
        ],
      },
      {
        title: 'VFX',
        body: [
          'These are some of the effects I made during the jam. I used the Unity particle system and created all the materials for the effects.',
        ],
        media: [
          { type: 'video', src: 'vfx-splash-1', title: 'Splash effect 1', loop: true },
          { type: 'video', src: 'vfx-splash-2', title: 'Splash effect 2', loop: true },
          { type: 'video', src: 'vfx-lights', title: 'Lights effect', loop: true },
          { type: 'video', src: 'vfx-watch', title: 'Watch effect', loop: true },
        ],
        columns: 4,
      },
    ],
  },
  {
    slug: 'drahive',
    accent: '#ff8a2a',
    title: 'DrAHIve',
    tagline: 'A rage game about road safety. Theme: "Nothing can go wrong".',
    kind: 'Game jam',
    context: 'Bad Idea Games · Brackeys Game Jam 2025.1',
    year: 'February 2025',
    engine: 'Unity',
    team: '11 people',
    duration: '1 week',
    tools: ['Unity', 'ClickUp', 'G-Suite', 'GitHub'],
    roles: ['Puzzle Design', 'C# Programming', 'VFX'],
    cover: 'drahive/cover.jpg',
    featured: true,
    links: [
      { label: 'Play on itch.io', href: 'https://daniele-ferrari.itch.io/drahive' },
      { label: 'Brackeys Game Jam 2025.1', href: 'https://itch.io/jam/brackeys-13' },
    ],
    overview: [
      'DrAHIve is a rage game that playfully tackles the issue of road safety, making players reflect on how even the smallest, seemingly harmless action can turn fatal.',
      'Made in Unity in one week by a team of 11 for the Brackeys Game Jam 2025.1. The theme was "Nothing can go wrong".',
    ],
    contributions: [
      'Designed the minigame puzzles.',
      'Programmed some of the minigames in C#.',
      'Added all the VFX to the game.',
      'Implemented the camera distortion.',
      'UI coding.',
    ],
    sections: [
      {
        title: 'Gameplay',
        media: [{ type: 'video', src: 'drahive-gameplay', title: "DrAHIve gameplay" }],
        columns: 1,
      },
      {
        title: 'Coding',
        body: [
          "Because we only had one week for coding and testing, we tried not to over-engineer things: that can lead to a lot of problems in a small jam like this.",
          "We used GitHub for source control and Discord for pair coding. I usually don't show code in screenshots, because they don't give the context of who worked on what.",
        ],
        links: [{ label: 'My GitHub', href: 'https://github.com/Cixo-Platania' }],
        media: [
          { type: 'image', src: 'drahive/shot-1.png', alt: 'DrAHIve gameplay: a car driving through a town with a minimap on the right' },
          { type: 'image', src: 'drahive/shot-2.png', alt: 'DrAHIve gameplay: top-down street view with the delivery map' },
        ],
      },
      {
        title: 'Puzzle design',
        body: [
          'Puzzle design was the most challenging part: the minigames needed to make sense in context, and be fun, but also be really difficult, because this is a rage game.',
          'We started with these five minigames and ended up making three because of the time limit:',
        ],
        list: [
          'Air conditioner: click the button of the air conditioner to release air and keep the ball in the right spot for a set amount of time.',
          'Radio: move the mouse to find the right frequency.',
          'Making a call: tap the correct numbers as they appear on the phone.',
          'Put the ring (not added): tap the screen to put the ring on the correct finger while it moves left and right.',
          'Kill bees (not added): tap the screen where the bees are and kill them all.',
        ],
        media: [
          { type: 'image', src: 'drahive/minigame-1.png', alt: 'Gameplay with the minigame panel at the bottom right of the screen' },
          { type: 'image', src: 'drahive/minigame-radio.png', alt: 'Radio minigame: a frequency slider while the view of the road is distorted', caption: 'Radio' },
          { type: 'image', src: 'drahive/minigame-call.png', alt: 'Phone call minigame: a phone keypad covering the darkened road', caption: 'Making a call' },
        ],
        columns: 3,
      },
      {
        title: 'VFX',
        body: [
          'These are some of the effects I made during the jam. I used the Unity particle system and created all the materials for the effects.',
        ],
        media: [
          { type: 'video', src: 'vfx-delivery-done', title: 'Delivery done effect', loop: true },
          { type: 'video', src: 'vfx-ring', title: 'Ring effect', loop: true },
          { type: 'video', src: 'vfx-radio-signal', title: 'Radio signal effect', loop: true },
          { type: 'video', src: 'vfx-smoke', title: 'Smoke effect', loop: true },
        ],
        columns: 4,
      },
    ],
  },
  {
    slug: 'vaf-golf',
    accent: '#2fd6c3',
    title: 'VAF-Golf',
    tagline: 'Four-player competitive minigolf with rotating courses.',
    kind: 'Professional',
    context: 'VAF Gaming Studio',
    year: '2021 – now',
    engine: 'Unity',
    team: '9 people',
    tools: ['Unity', 'ClickUp', 'Discord'],
    roles: ['Technical Level Design', 'Gameplay Design', 'Testing'],
    cover: 'vaf-golf/cover.png',
    featured: false,
    links: [],
    overview: [
      'VAF-Golf is a golf game where the player has to be faster than three opponents. It was our first multiplayer game, so we kept it simple, without abilities or any real-time action apart from the golf gameplay.',
      'I worked as a technical level and gameplay designer and as a tester, in a team of nine. We used Discord for communication and ClickUp for tasks and documentation.',
    ],
    contributions: [
      'Technical level design of the courses: different maps that rotate each game, so players don\'t get bored after a few matches.',
      'Gameplay design within a hard constraint from programming: no changes to the gameplay.',
      'Reward and leaderboard setup.',
      'Multiplayer testing and bug reporting.',
    ],
    sections: [
      {
        title: 'Gameplay',
        media: [{ type: 'video', src: 'vaf-golf-gameplay', title: 'VAF-Golf gameplay (tutorial)' }],
        columns: 1,
      },
      {
        title: 'How the project works',
        body: [
          'The project is a multi-user golf game in which users play against each other, gaining points to spend in our marketplace.',
          'We also had one very significant limitation from the programmers: absolutely no changes could be made to the gameplay. With this in mind, we kept things simple and focused on raising the level design and the overall aesthetics of the game.',
        ],
        media: [
          { type: 'image', src: 'vaf-golf/course-1.png', alt: 'Minigolf course floating in space with a windmill obstacle' },
          { type: 'image', src: 'vaf-golf/course-2.png', alt: 'Minigolf course with stepped platforms and a gap' },
        ],
      },
      {
        title: 'Design workflow',
        body: [
          "The company gave us the idea and we redesigned it to make it suitable for the VAF universe. We created the UX/UI, then worked on the maps: different maps that rotate each game, so the player doesn't get bored after a few matches. After that we set up all the rewards and the leaderboard system.",
          'Then we moved on to testing the multiplayer game and bug fixing.',
        ],
      },
    ],
  },
  {
    slug: 'jeremia-nightfall',
    accent: '#f0484e',
    title: 'Jeremia: Nightfall',
    tagline: "Story-driven third-person puzzle game set inside the protagonist's mind.",
    kind: 'Professional',
    context: 'Gameful',
    year: '2020 – 2021',
    engine: 'Unreal Engine 4',
    tools: ['Unreal Engine 4', 'Blueprint'],
    roles: ['Game Programming', 'Game Design'],
    cover: 'jeremia-nightfall/cover.jpg',
    featured: true,
    links: [{ label: 'View on Steam', href: 'https://store.steampowered.com/app/1692560/Jeremia_Nightfall/' }],
    overview: [
      "Jeremia: Nightfall is a story-driven third-person puzzle game where the player explores the mind of Jeremia through various puzzles. We designed his mind as torn pieces of memories, in the shape of distorted places. For example, the first level is his backyard, but twisted and with places that don't belong there, like his middle school.",
      'Jeremia has to solve the puzzles and use his torch to eliminate a strange kind of slime called dark matter; otherwise his mind will collapse.',
    ],
    contributions: [
      'Dual role of game programmer and designer, with a stronger bias towards programming.',
      'Created gameplay Blueprints.',
      'Designed how feedback works in the game, for instance what happens when the player takes damage.',
    ],
    sections: [
      {
        title: 'Trailer',
        media: [{ type: 'video', src: 'jeremia-trailer', title: 'Jeremia: Nightfall trailer' }],
        columns: 1,
      },
      {
        title: 'Scope of the project',
        body: [
          'The goal was to create a broad, story-driven game in which the player discovers the story of Jeremia. We wanted to delve into the chaotic mind of a man with psychosis who decides to stop taking his medication.',
          'Another important aspect was building a game with no direct combat against enemies, where the player has to use their supplies carefully.',
        ],
        media: [
          { type: 'image', src: 'jeremia-nightfall/shot-1.jpg', alt: 'Jeremia inside a wooden cabin lit by a single bulb' },
          { type: 'image', src: 'jeremia-nightfall/shot-2.jpg', alt: 'Jeremia pointing his torch at red dark matter' },
          { type: 'image', src: 'jeremia-nightfall/shot-3.jpg', alt: 'Jeremia in a red cave, with a subtitle about his old diary' },
        ],
        columns: 3,
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)!;

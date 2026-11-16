// Curated places and day templates for the Berlin MLcon map.
const VENUE = { id:'venue', cat:'base', name:'Maritim proArte (MLcon)', lat:52.5186, lng:13.3886, note:'Friedrichstraße 151. Conference days Nov 18–19, workshops Nov 17 & 20.' };
// Where you're staying. Set to the conference hotel; point it at another place if you stay elsewhere.
const HOTEL = VENUE;
const P = (id,cat,name,lat,lng,note) => ({ id, cat, name, lat, lng, note, src:'pick' });
const GIG_DAY = { tue:'Tue 17', wed:'Wed 18', thu:'Thu 19' };
const G = (id,artist,venue,lat,lng,day,time,note) => ({ ...P(id,'music',`${artist} @ ${venue}`,lat,lng,
  `${GIG_DAY[day]}${time ? ' · ' + time : ''} · ${note}`), gig:true, artist, venue, day, time });
const PICKS = [
  VENUE,
  P('ber','base','BER Airport',52.3667,13.5033,'FEX or S-Bahn into the centre, about 35–45 min to Friedrichstraße.'),
  // coffee
  P('barn','coffee','The Barn (Mitte)',52.5276,13.3988,'Serious specialty coffee on Auguststraße.'),
  P('fathercarp','coffee','Father Carpenter',52.5255,13.4076,'Courtyard café, a good breakfast spot.'),
  P('distrikt','coffee','Distrikt Coffee',52.5310,13.3935,'Brunch and coffee near Nordbahnhof.'),
  P('bonanza','coffee','Bonanza Coffee Roasters',52.5390,13.4050,'Roastery in Prenzlauer Berg.'),
  // food
  P('vuong','food','Monsieur Vuong',52.5268,13.4078,'Vietnamese classic, quick and no reservations.'),
  P('lebensmittel','food','Lebensmittel in Mitte',52.5240,13.4060,'Hearty German/Austrian food in a pub setting.'),
  P('instanz','food','Zur letzten Instanz',52.5170,13.4140,'Berlin\'s oldest restaurant; traditional German.'),
  P('borchardt','food','Borchardt',52.5149,13.3906,'Grand brasserie, schnitzel. Book ahead.'),
  P('mustafa','food','Mustafa\'s Gemüse Kebap',52.4935,13.3878,'Famous veggie kebab. Expect a queue.'),
  P('curry36','food','Curry 36',52.4932,13.3878,'Currywurst institution next to Mustafa\'s.'),
  P('konnopke','food','Konnopke\'s Imbiss',52.5405,13.4122,'Currywurst stand under the U-Bahn tracks.'),
  P('markthalle','food','Markthalle Neun',52.5020,13.4317,'Street Food Thursday runs Thursday evenings.'),
  // pubs
  P('lemke','pubs','Brauhaus Lemke',52.5225,13.4030,'Brewpub in the S-Bahn arches at Hackescher Markt.'),
  P('mikkeller','pubs','Mikkeller Berlin',52.5288,13.4033,'Craft beer on Torstraße.'),
  P('hopfenreich','pubs','Hopfenreich',52.4990,13.4370,'Kreuzberg craft beer bar with a big tap list.'),
  P('prater','pubs','Prater Gaststätte',52.5398,13.4098,'Historic beer hall (the garden is closed in winter).'),
  P('newton','pubs','Newton Bar',52.5135,13.3920,'Cocktails on Gendarmenmarkt.'),
  P('buckbreck','pubs','Buck and Breck',52.5320,13.4000,'Tiny speakeasy. Ring the bell.'),
  P('wuergeengel','pubs','Würgeengel',52.5010,13.4185,'Classic Kreuzberg cocktail bar.'),
  // music
  P('bflat','music','B-flat Jazz Club',52.5232,13.4085,'Jazz near Hackescher Markt, often with free sessions.'),
  P('schlot','music','Kunstfabrik Schlot',52.5310,13.3870,'Jazz cellar in the Edison Höfe.'),
  P('atrane','music','A-Trane',52.5068,13.3218,'Top jazz club in Charlottenburg.'),
  P('quasimodo','music','Quasimodo',52.5060,13.3310,'Jazz, funk and soul basement club.'),
  P('yorck','music','Yorckschlösschen',52.4928,13.3880,'Old jazz/blues pub in Kreuzberg.'),
  P('lido','music','Lido',52.4990,13.4450,'Indie and rock gigs. Check the listings.'),
  P('so36','music','SO36',52.5005,13.4220,'Legendary punk/indie venue.'),
  P('konzerthaus','music','Konzerthaus Berlin',52.5136,13.3917,'Classical, on Gendarmenmarkt.'),
  P('philharmonie','music','Philharmonie',52.5096,13.3700,'Berlin Phil. Check for last-minute tickets.'),
  // gigs during MLcon week (check doors & tickets before going)
  G('gig-wedding','The Wedding Present','Hole44',52.4790,13.4247,'tue','','Seamonsters 35th-anniversary tour · indie rock'),
  G('gig-napa','NAPA','Lido',52.4990,13.4450,'tue','','Portuguese indie rock'),
  G('gig-reckless','The Pretty Reckless','Huxleys Neue Welt',52.4870,13.4205,'wed','20:00','Hard rock'),
  G('gig-muse','Muse','Uber Arena',52.5053,13.4436,'wed','20:00','Wow! Signal tour · arena, tickets may be resale only'),
  G('gig-papa','Papa Roach','Velodrom',52.5300,13.4520,'wed','19:00','Rise of the Roach tour'),
  G('gig-evergrey','Evergrey','Hole44',52.4790,13.4247,'wed','','Prog metal'),
  G('gig-eluveitie','Eluveitie','Huxleys Neue Welt',52.4870,13.4205,'thu','19:00','Folk metal'),
  G('gig-rejazz','rejazz-festival','Kunstfabrik Schlot',52.5310,13.3870,'thu','','Women-in-jazz festival, night 1 opens with Ariel Bart\'s trio'),
  G('gig-hausswolff','Anna von Hausswolff','Astra Kulturhaus',52.5072,13.4545,'thu','','Heavy, drone-y organ rock'),
  // sights
  P('hbf','sights','Hamburger Bahnhof',52.5284,13.3721,'Sophie Calle: Is It Better? Her first Berlin solo show in 20+ years. Closed Mondays.'),
  P('winterwelt','sights','Winterwelt Potsdamer Platz',52.5096,13.3760,'Early winter market with a 70 m toboggan slide; ice rink next door.'),
  P('traenen','sights','Tränenpalast',52.5203,13.3870,'Free museum on the Cold War border crossing, next to the venue.'),
  P('dussmann','sights','Dussmann KulturKaufhaus',52.5180,13.3888,'Huge bookshop, 2 min from the venue.'),
  P('neues','sights','Neues Museum',52.5206,13.3977,'Museum Island. Home of the Nefertiti bust.'),
  P('brandenburg','sights','Brandenburg Gate',52.5163,13.3777,'Best at night.'),
  P('reichstag','sights','Reichstag dome',52.5186,13.3762,'Free, but register online in advance.'),
  P('memorial','sights','Memorial to the Murdered Jews',52.5139,13.3787,'Walk through the field. Info centre underneath.'),
  P('wall','sights','Berlin Wall Memorial',52.5352,13.3903,'Bernauer Straße open-air memorial.'),
  P('topo','sights','Topography of Terror',52.5067,13.3834,'Free documentation centre.'),
  P('esg','sights','East Side Gallery',52.5050,13.4397,'The longest surviving stretch of the Wall.'),
  P('csm','sights','Computerspielemuseum',52.5170,13.4370,'Computer games museum on Karl-Marx-Allee.'),
  P('technik','sights','Deutsches Technikmuseum',52.4986,13.3776,'Tech museum, including a Zuse computer exhibit.'),
];

// Suggested plan per day: [place id, suggested time, optional alternative ids]. Gig times are from listings; others are suggestions.
const DAYS = [
  { k:'tue', label:'Tue 17', hint:'Land around noon. Sophie Calle in the afternoon, then indie rock in Neukölln.',
    suggest:[['ber','12:00'],['venue','13:30'],['hbf','15:00',['traenen']],['lemke','18:00'],['gig-wedding','',['gig-napa']]] },
  { k:'wed', label:'Wed 18', hint:'Conference day, then hard rock at Huxleys and a late blues pub.',
    suggest:[['venue','18:00'],['curry36','19:00'],['gig-reckless','20:00',['gig-muse','gig-papa','gig-evergrey']],['yorck','23:00']] },
  { k:'thu', label:'Thu 19', hint:'Leave a little early: Street Food Thursday, then folk metal, then craft beer.',
    suggest:[['venue','17:00'],['markthalle','17:30'],['gig-eluveitie','19:00',['gig-rejazz','gig-hausswolff']],['hopfenreich','22:30']] },
  { k:'fri', label:'Fri 20', hint:'Coffee, then head to BER.',
    suggest:[['barn','08:00'],['ber','']] },
];

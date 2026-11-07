export const achievementSource = 'https://davidgoggins.com/athletic-achievements/';
export const bookSource = 'https://davidgoggins.com/book/';
export const milestones = [
 { year:'2001',title:'Earned. Never given.',subtitle:'NAVY SEAL QUALIFICATION',image:'navy-seal',body:'Goggins graduated SEAL training with BUD/s Class 235 in August 2001. A new chapter built on persistence.',source:'https://www.dvidshub.net/news/301115/toughest-man-alive-interview-with-retired-navy-seal-david-goggins'},
 { year:'2007',title:'Into Death Valley.',subtitle:'BADWATER 135 · 3RD PLACE',image:'badwater',body:'A third-place finish at Badwater 135: 135 miles across Death Valley and into the mountains. One defining chapter in an endurance career.',source:achievementSource},
 { year:'2013',title:'One more repetition.',subtitle:'4,030 PULL-UPS · 17 HOURS',image:'training',body:'In 2013, Goggins completed 4,030 pull-ups in 17 hours, setting a world record at the time. A historical achievement, not a claim to the current record.',source:achievementSource},
 { year:'2018',title:'The story, in his words.',subtitle:'CAN’T HURT ME',image:'conversation-2018',body:'His memoir explores the experiences and choices behind his approach to accountability, resilience, and personal change.',source:bookSource},
 { year:'2020',title:'The road keeps going.',subtitle:'MOAB 240 · 2ND PLACE',image:'run-2018',body:'A second-place finish at the Moab 240 in 62:21:29, as recorded in his official athletic career highlights.',source:achievementSource},
 { year:'2022',title:'Never finished.',subtitle:'THE NEXT BOOK',image:'never-finished-cover',body:'Never Finished continues the conversation about mindset, drawing on further experiences and the ideas he calls his Mental Lab.',source:bookSource},
];
export const videoSource = 'https://www.dvidshub.net/video/646927/toughest-man-alive-interview-with-david-goggins';
export const photoInfo: Record<string,{alt:string;date:string}> = {
 'never-finished-cover':{alt:'Official Never Finished book cover by David Goggins',date:'NEVER FINISHED / 2022'},
 'badwater':{alt:'Goggins running the 2007 Badwater Ultramarathon',date:'BADWATER / 2007'},
 'finish':{alt:'Goggins and Keith Davids at the 2008 Ironman finish',date:'KAILUA-KONA / 2008'},
 'training':{alt:'Goggins coaching pull-ups in Seattle in 2009',date:'SEATTLE / 2009'},
 'navy-seal':{alt:'David Goggins standing at attention with Naval Academy athletes in 2009',date:'ANNAPOLIS / 2009'},
 'cargo':{alt:'Goggins climbing a cargo net with a Make-A-Wish recipient in 2011',date:'SAN DIEGO / 2011'},
 'run-2018':{alt:'David Goggins running in Nashville, from the 2018 Navy interview',date:'NASHVILLE / 2018'},
 'footsteps-2018':{alt:'Close-up of Goggins’s running shoes on the road, from the 2018 interview',date:'NASHVILLE / 2018'},
 'interview-2018':{alt:'Goggins seated opposite Navy interviewer Alexa Trafton in 2018',date:'NASHVILLE / 2018'},
 'training-2018':{alt:'Goggins running outdoors without a shirt, from the 2018 Navy interview',date:'NASHVILLE / 2018'},
 'portrait-2018':{alt:'David Goggins running in a gray shirt in 2018',date:'NASHVILLE / 2018'},
 'profile-2018':{alt:'Side profile of David Goggins during a run in 2018',date:'NASHVILLE / 2018'},
 'conversation-2018':{alt:'David Goggins discussing his military service in a 2018 Navy interview',date:'NASHVILLE / 2018'},
 'running-close-2018':{alt:'Close-up of Goggins running outdoors in 2018',date:'NASHVILLE / 2018'},
};
export const stories = [
 {title:'Return to the road',category:'Endurance',image:'run-2018',meta:'NASHVILLE / 2018',body:'A running sequence from the Navy’s 2018 interview with Goggins. Autumn light and a familiar road frame the everyday practice behind the public achievements.',source:videoSource,position:'55% 50%'},
 {title:'The work between',category:'Discipline',image:'training',meta:'SEATTLE / 2009',body:'Goggins and Jason Torey coach a prospective sailor through pull-ups during a television demonstration for the Navy SEAL Fitness Challenge.',source:'https://commons.wikimedia.org/wiki/File:Navy_SEAL_Fitness_Challenge_DVIDS186273.jpg',position:'80% 50%'},
 {title:'Never alone',category:'Endurance',image:'finish',meta:'KAILUA-KONA / 2008',body:'Goggins and Keith Davids cross the finish line at the 2008 Ironman World Championship. A shared moment at the end of a demanding day.',source:'https://commons.wikimedia.org/wiki/Category:David_Goggins',position:'50% 30%'},
 {title:'Before the headlines',category:'Mindset',image:'navy-seal',meta:'ANNAPOLIS / 2009',body:'Special Warfare Operator 1st Class David Goggins stands at attention alongside Naval Academy triathletes. The team recognized him as an honorary member during the event.',source:'https://commons.wikimedia.org/wiki/Category:David_Goggins',position:'90% 25%'},
 {title:'A different kind of strength',category:'Mindset',image:'cargo',meta:'SAN DIEGO / 2011',body:'Goggins accompanies a Make-A-Wish recipient on a cargo-net obstacle at Naval Special Warfare facilities. This archive moment is about sharing an experience, not setting a record.',source:'https://commons.wikimedia.org/wiki/Category:David_Goggins',position:'50% 40%'},
 {title:'One step. Then another.',category:'Discipline',image:'footsteps-2018',meta:'NASHVILLE / 2018',body:'A detail from the 2018 running footage. Original editorial reflection: the next step is often less dramatic than the goal, but it is where progress becomes concrete.',source:videoSource,position:'50% 50%'},
 {title:'The story behind the work',category:'Mindset',image:'interview-2018',meta:'THE NAVY INTERVIEW / 2018',body:'Goggins speaks with Mass Communication Specialist Alexa Trafton at his home in Nashville about his Navy career and his passion for running. Follow the source to watch the full conversation.',source:videoSource,position:'45% 50%'},
 {title:'Keep becoming',category:'Endurance',image:'training-2018',meta:'NASHVILLE / 2018',body:'A separate running scene from the Navy’s 2018 interview. Original editorial reflection: personal growth has no fixed finish line. The work changes as the person doing it changes.',source:videoSource,position:'40% 45%'},
];

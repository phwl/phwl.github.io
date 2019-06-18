var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Welcome to Minimal Mistakes Jekyll",
      excerpt: "Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of...",
      categories: ["update"],
      tags: ["jekyll"],
      id: 0
    });
    
  
    idx.add({
      title: "Barramundi on Fly",
      excerpt: "Black marlin on fly, Cape Bowling Green, Queensland, Mary River The Northern Territories (NT) of Australia is best known by...",
      categories: ["fishing"],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Marlin on Fly",
      excerpt: "Black marlin on fly, Cape Bowling Green, Queensland, Mary River An edited version of this article appeared in (Australian) “Modern...",
      categories: ["fishing"],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "New Zealand Trip",
      excerpt: "Fished the South Island of New Zealand in November 1996 with fishing buddy Beard. Here are some pictures of the...",
      categories: ["fishing"],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Cessna first solo",
      excerpt: "Been taking flying lessons and took my first solo in a Cessna 152  in December 1996.\n\n\n",
      categories: ["hobbies"],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Stanwell Park",
      excerpt: "This photo of Stanwell Park was taken back in 1999.\n",
      categories: ["australia"],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Telluride 2000",
      excerpt: "Town of Telluride taken from the Jud Wiebe Trail Bear Creek Waterfall Trail to Bear Creek Silver Lake Approach to...",
      categories: ["photography","travel"],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "Testament of a Fisherman",
      excerpt: "I fish because I love to; because I love the environs where trout are found, which are invariably beautiful and...",
      categories: ["fishing"],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "A Ballard of Ducks",
      excerpt: "The railway rattled and roared and swung With jolting carriage and bumping trucks. The sun, like a billiard red ball,...",
      categories: ["fishing"],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "Fishing Photos",
      excerpt: "Here are some of my favourite fishing photos from the age before digital cameras. Chris See with a drummer Beard...",
      categories: ["fishing"],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "London Lakes",
      excerpt: "Here are some photos from a trip to London Lakes in Tasmania that I made in December 2002.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      categories: ["australia","fishing"],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Weipa",
      excerpt: "Here are some photos taken from a fishing trip to Weipa in 2004 with Chris See.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      categories: ["australia","fishing"],
      tags: [],
      id: 11
    });
    
  
    idx.add({
      title: "Meon Springs",
      excerpt: "Fished Meon Springs yesterday. It was my first fishing trip in the UK and my first experience fishing a managed,...",
      categories: ["fishing"],
      tags: [],
      id: 12
    });
    
  
    idx.add({
      title: "Walthamstow Reservoir",
      excerpt: "From Sydney, going trout fishing requires commitment. It is either an 8 hour drive to the Snowy Mountains or a...",
      categories: ["fishing"],
      tags: [],
      id: 13
    });
    
  
    idx.add({
      title: "Victorinox Swiss Army Knife Soldier Set",
      excerpt: "The Victorinox Soldier is the classic Swiss Army knife (SAK). Each has a date stamp and this set is from...",
      categories: ["outdoors"],
      tags: [],
      id: 14
    });
    
  
    idx.add({
      title: "A trip to Finland",
      excerpt: "My trip to Finland coincided with the Midsummer Festival, an event which I was lucky enough to share with my...",
      categories: ["travel","fishing"],
      tags: [],
      id: 15
    });
    
  
    idx.add({
      title: "Forster 2007",
      excerpt: "Forster is about a four hour drive from Sydney. Went on a very brief overnight camping/fishing trip with my good...",
      categories: ["australia","fishing"],
      tags: [],
      id: 16
    });
    
  
    idx.add({
      title: "Fishing, Renovating and Ballroom Dancing in Utah 2008",
      excerpt: "Introduction Some sections of the Green River in Utah have 22,000 trout per mile and it is arguably the best trout...",
      categories: ["fishing","travel"],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "Forster 2008",
      excerpt: "Went on a 4 day fishing trip to Booti Booti National Park with my mates, Warren and Chris despite unfavourable...",
      categories: ["fishing"],
      tags: [],
      id: 18
    });
    
  
    idx.add({
      title: "Snowboard Fever",
      excerpt: "Photo from Beijing ski trip.\n\n\n",
      categories: ["photography"],
      tags: [],
      id: 19
    });
    
  
    idx.add({
      title: "Beijing and Harbin",
      excerpt: "Here are some photos taken from a trip to Beijing and Harbin in 2009.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      categories: ["travel"],
      tags: [],
      id: 20
    });
    
  
    idx.add({
      title: "Life, the Universe and Fishing",
      excerpt: "I was asked by Prof Evangeline Young to give a “Lunchtime Pizza talk” on the 15th May. Here is the...",
      categories: ["academia","fishing","Fly-fishing"],
      tags: [],
      id: 21
    });
    
  
    idx.add({
      title: "Hong Kong Skyline",
      excerpt: "Here are some photographs of Hong Kong. Kowloon and Hong Kong from the Lung Cheung Rd lookout at dawn. Festival...",
      categories: ["photography"],
      tags: [],
      id: 22
    });
    
  
    idx.add({
      title: "Street photos from Hong Kong",
      excerpt: "Here are some street photos from Hong Kong.\n\n\n\n",
      categories: ["photography"],
      tags: [],
      id: 23
    });
    
  
    idx.add({
      title: "The Chinese University of Hong Kong",
      excerpt: "The Chinese University of Hong Kong has a beautiful campus. Here are some photographs.\n\n\n\n\n\n\n\n\n\n",
      categories: ["photography"],
      tags: [],
      id: 24
    });
    
  
    idx.add({
      title: "A Gift From my Students",
      excerpt: "I was honoured to have received this pen from my ex-students at CUHK.\n\n\n",
      categories: ["academia"],
      tags: [],
      id: 25
    });
    
  
    idx.add({
      title: "Blue Mountains",
      excerpt: "The 1 million hectare Blue Mountains is a World Heritage listed National Park in NSW Australia. Its name comes from...",
      categories: ["australia","travel"],
      tags: [],
      id: 26
    });
    
  
    idx.add({
      title: "Postcard from Ottawa",
      excerpt: "In return for my sins I was sent to Ottawa for the week. Ottawa is the capital of Canada and...",
      categories: ["travel"],
      tags: [],
      id: 27
    });
    
  
    idx.add({
      title: "Sydney skyline at dusk",
      excerpt: "This photo of Sydney was taken from Kirribilli, not too far from the Harbour Bridge.\n\n\n",
      categories: ["australia","photography"],
      tags: [],
      id: 28
    });
    
  
    idx.add({
      title: "Whale Beach",
      excerpt: "\n",
      categories: ["australia","photography"],
      tags: [],
      id: 29
    });
    
  
    idx.add({
      title: "Elaine's (off) Road Trip",
      excerpt: "Check out Elaine’s amazing motorcycle trip around Australia here\n\n\n",
      categories: ["australia","travel"],
      tags: [],
      id: 30
    });
    
  
    idx.add({
      title: "Postcard from Ottawa 2011",
      excerpt: "\n",
      categories: ["travel"],
      tags: [],
      id: 31
    });
    
  
    idx.add({
      title: "Postcard from Monterey 2011",
      excerpt: "\n",
      categories: ["travel"],
      tags: [],
      id: 32
    });
    
  
    idx.add({
      title: "Postcard from London 2011",
      excerpt: "I only have this as a pdf file but this link contains the story of my 2011 trip to London: london-2011.\n",
      categories: ["travel"],
      tags: [],
      id: 33
    });
    
  
    idx.add({
      title: "Delhi 2011",
      excerpt: "\n",
      categories: ["travel"],
      tags: [],
      id: 34
    });
    
  
    idx.add({
      title: "Hawkesbury River 2011",
      excerpt: "Went with Warren to the Hawkesbury River for 3 days of fishing and camping. Our boat is now 20 years...",
      categories: ["australia","fishing","Hawkesbury River"],
      tags: [],
      id: 35
    });
    
  
    idx.add({
      title: "Guide to more than 100 Sydney Beaches",
      excerpt: "Graham Link was interviewed this morning on 702 ABC about his website on Sydney beaches. It is very informative and...",
      categories: ["australia"],
      tags: [],
      id: 36
    });
    
  
    idx.add({
      title: "Postcard from Shanghai",
      excerpt: "Spent a fortnight over Easter in Shanghai, as a visitor at Fudan University Played ping pong with students. Had a...",
      categories: ["photography","travel"],
      tags: [],
      id: 37
    });
    
  
    idx.add({
      title: "Molonglo Radio Observatory",
      excerpt: "The University of Sydney’s Molonglo Radio Observatory is located about 3-4 hours south of Sydney. It is being used to...",
      categories: ["australia","photography","travel"],
      tags: [],
      id: 38
    });
    
  
    idx.add({
      title: "Hawkesbury River 2012",
      excerpt: "In what has turned out to become an annual event (click on this link for the 2011 version), went on a 4...",
      categories: ["fishing"],
      tags: [],
      id: 39
    });
    
  
    idx.add({
      title: "Lake Eucumbene 2013",
      excerpt: "Lake Eucumbene is an alpine lake about 500km south west of Sydney. My fishing mate, Beard (nickname which refered to...",
      categories: ["australia","fishing","Fly-fishing"],
      tags: [],
      id: 40
    });
    
  
    idx.add({
      title: "Luderick Sydney Harbour",
      excerpt: "Went for a fish in Sydney Harbour with my neighbour Michael. Had a great time catching luderick (otherwise known as blackfish)....",
      categories: ["australia","fishing"],
      tags: [],
      id: 41
    });
    
  
    idx.add({
      title: "Postcard from Harbin",
      excerpt: "Had a really cool time in Harbin. This was the view from my departing flight, and this was the view...",
      categories: ["travel"],
      tags: [],
      id: 42
    });
    
  
    idx.add({
      title: "Panorama at Akuna Bay",
      excerpt: "Went for a drive this morning to Akuna Bay. Fog was coming off the river and this photograph was taken...",
      categories: ["australia","photography"],
      tags: [],
      id: 43
    });
    
  
    idx.add({
      title: "Shanghai April 2013",
      excerpt: "I had an excellent trip to Shanghai last year and wrote about it in  http://www.phwl.org/postcard-from-shanghai/. I was fortunate enough to be invited...",
      categories: ["travel"],
      tags: [],
      id: 44
    });
    
  
    idx.add({
      title: "Pelicans at Mooney Mooney boat ramp, Hawkesbury River",
      excerpt: "\n",
      categories: ["photography"],
      tags: [],
      id: 45
    });
    
  
    idx.add({
      title: "High Altitude Balloon Launch #1",
      excerpt: "Our Sydney University Electrical Engineering students, Stephen Tridgell and David Portelli successfully made a high-altitude balloon launch from Blayney, NSW....",
      categories: ["australia","photography"],
      tags: [],
      id: 46
    });
    
  
    idx.add({
      title: "The Gap, Watsons Bay, Sydney",
      excerpt: "Some photos from The Gap, Watsons Bay, Sydney this morning at sunrise.\n\n\n\n\n\n\n\n",
      categories: ["australia","photography"],
      tags: [],
      id: 47
    });
    
  
    idx.add({
      title: "Kangaroo Tagging at Nelson Bay",
      excerpt: "I had the opportunity to visit the Nelson Bay Golf Course and observe the tagging programme of semi-wild Eastern Grey...",
      categories: ["academia","australia"],
      tags: [],
      id: 48
    });
    
  
    idx.add({
      title: "Cowan Creek",
      excerpt: "Photos from a short trip to Cowan Creek on a foggy morning. More after the jump. First time I’ve seen...",
      categories: ["australia","fishing"],
      tags: [],
      id: 49
    });
    
  
    idx.add({
      title: "Panorama of Sydney Opera House and the Harbour Bridge",
      excerpt: "\n",
      categories: ["photography"],
      tags: [],
      id: 50
    });
    
  
    idx.add({
      title: "Postcard from Harbin Summer 2013",
      excerpt: "After a superb trip to Harbin in winter, I returned in summer to attend the ICEMI conference, kindly hosted again...",
      categories: ["photography","travel"],
      tags: [],
      id: 51
    });
    
  
    idx.add({
      title: "Sydney Skyline from The Gap",
      excerpt: "\n",
      categories: ["australia","photography"],
      tags: [],
      id: 52
    });
    
  
    idx.add({
      title: "Sydney University Open Day (from a weather balloon)",
      excerpt: "A photograph of the Sydney University Open Day from a weather balloon above the tower of the main quadrangle. This...",
      categories: ["australia","photography"],
      tags: [],
      id: 53
    });
    
  
    idx.add({
      title: "Panorama of Sydney Harbour",
      excerpt: "\n\n\n\n\n",
      categories: ["australia","photography"],
      tags: [],
      id: 54
    });
    
  
    idx.add({
      title: "Postcard from Kyoto and Osaka",
      excerpt: "Following the International Conference on Field Programmable Technology we spent some time in Kyoto and Osaka. Clear Water Temple is a...",
      categories: ["travel"],
      tags: [],
      id: 55
    });
    
  
    idx.add({
      title: "Girl in Hong Kong MTR",
      excerpt: "\n",
      categories: ["travel"],
      tags: [],
      id: 56
    });
    
  
    idx.add({
      title: "Hawkesbury River 2013",
      excerpt: "Our trips to the Hawkesbury River have become an annual event (2012, 2011). As usual, the boat ramp was at...",
      categories: ["australia","fishing"],
      tags: [],
      id: 57
    });
    
  
    idx.add({
      title: "Fishing with friends",
      excerpt: "Our boat was purchased around 1991 and has served us well. It is jointly owned with my close university friends,...",
      categories: ["fishing"],
      tags: [],
      id: 58
    });
    
  
    idx.add({
      title: "Circular Quay",
      excerpt: "\n",
      categories: ["australia","photography"],
      tags: [],
      id: 59
    });
    
  
    idx.add({
      title: "Hong Kong Aerial Photograph",
      excerpt: "\n",
      categories: ["photography","travel"],
      tags: [],
      id: 60
    });
    
  
    idx.add({
      title: "Bondi Beach",
      excerpt: "\n",
      categories: ["australia","photography"],
      tags: [],
      id: 61
    });
    
  
    idx.add({
      title: "London, Shanghai and Hong Kong 2014",
      excerpt: "Left Sydney in the last week of November 2014 for London. Australia’s contribution to fashion is the Ugg boot. Strangely,...",
      categories: ["travel"],
      tags: [],
      id: 62
    });
    
  
    idx.add({
      title: "Hawkesbury River 2014",
      excerpt: "Much like previous years, went to do some fishing in the Hawkesbury River over the Christmas break. This time, Beard...",
      categories: ["australia","fishing","Hawkesbury River"],
      tags: [],
      id: 63
    });
    
  
    idx.add({
      title: "Cradle Mountain Tasmania",
      excerpt: "A gallery of photographs taken around Cradle Mountain, Tasmania.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      categories: ["australia","photography","travel"],
      tags: [],
      id: 64
    });
    
  
    idx.add({
      title: "Tasmanian Holiday 2015",
      excerpt: "Waited for ages for my beloved wife’s bag then got that sinking feeling when the carousel stops turning. Everyone had...",
      categories: ["australia","photography","travel"],
      tags: [],
      id: 65
    });
    
  
    idx.add({
      title: "Fishhook removal",
      excerpt: "In all my years of fishing, we were fortunate not to have had a bad injury. There was the time...",
      categories: ["fishing"],
      tags: [],
      id: 66
    });
    
  
    idx.add({
      title: "Harbin and Qingdao 2015",
      excerpt: "Went to teach a summer course in reconfigurable computing again at Harbin Institute of Technology (HIT) and to also participate...",
      categories: ["travel"],
      tags: [],
      id: 67
    });
    
  
    idx.add({
      title: "Quintrex Fishseeker Photos",
      excerpt: "Didn’t realise that we have had this boat since 1993. It has performed faultlessly over this period and the Evinrude...",
      categories: ["fishing"],
      tags: [],
      id: 68
    });
    
  
    idx.add({
      title: "Stacer Outlaw 429",
      excerpt: "Traded in the Quintrex for a new Stacer Outlaw 429 with Evinrude 50 hp at Huett Marine.  I highly recommend them...",
      categories: ["fishing"],
      tags: [],
      id: 69
    });
    
  
    idx.add({
      title: "Sydney looking west",
      excerpt: "A westward looking photograph of Sydney with the Eastern Suburbs in the foreground, Sydney CBD and Harbour in the middle,...",
      categories: ["australia","photography"],
      tags: [],
      id: 70
    });
    
  
    idx.add({
      title: "New Zealand Fly-Fishing 2015",
      excerpt: "After attending the International Conference on Field Programmable Technology, Brent, Ken and myself took a 5-day fly-fishing trip around the...",
      categories: ["fishing"],
      tags: [],
      id: 71
    });
    
  
    idx.add({
      title: "Hawkesbury River 2015",
      excerpt: "A camping trip with Warren to the Hawkesbury has become an annual event (e.g. in 2014). Unfortunately, we couldn’t do...",
      categories: ["australia","fishing","Hawkesbury River"],
      tags: [],
      id: 72
    });
    
  
    idx.add({
      title: "Luderick Fishing Sydney Harbour",
      excerpt: "Luderick (otherwise known as blackfish) are among my favourite targets as they are quite plentiful in Sydney Harbour and the fishing...",
      categories: ["australia","fishing"],
      tags: [],
      id: 73
    });
    
  
    idx.add({
      title: "Danny Lim",
      excerpt: "Took this photo of Danny Lim, Activist, outside Redfern station. A nice guy and quite a character! He made sure...",
      categories: ["australia","photography"],
      tags: [],
      id: 74
    });
    
  
    idx.add({
      title: "Federal Election 2016",
      excerpt: "\n\n\n\n\n\n\n\n",
      categories: ["photography"],
      tags: [],
      id: 75
    });
    
  
    idx.add({
      title: "Osaka trip 2016",
      excerpt: "Spent a week in Osaka, the last time we were there was 2013. Shuttle ride to Sydney airport. Had a day to check out...",
      categories: ["photography","travel"],
      tags: [],
      id: 76
    });
    
  
    idx.add({
      title: "PAPAA 2016",
      excerpt: "We had a very successful Croucher PAPAA workshop at Hong Kong University. The new elevator from HKU MTR station up to Hong...",
      categories: ["photography","travel"],
      tags: [],
      id: 77
    });
    
  
    idx.add({
      title: "School Retreat (Manly 2016)",
      excerpt: "Here are some photos from the School of Electrical and Information Engineering retreat in Manly. [caption id=”attachment_2637” align=”alignnone” width=”8196”] Panorama from...",
      categories: ["australia","photography"],
      tags: [],
      id: 78
    });
    
  
    idx.add({
      title: "Olympic Peninsula Fly-Fishing 2016",
      excerpt: "I participated in the 2nd FPGA Fly-Fishing (FFF’16) Symposium in Seattle WA, hosted by Ken and attended by Guy, Aaron...",
      categories: ["FFF","fishing","Fly-fishing","photography","travel"],
      tags: [],
      id: 79
    });
    
  
    idx.add({
      title: "London, Xi'an and Macau 2016",
      excerpt: "Departed on a beautiful early-summer Sydney morning in late Nov. Was in London about a day later. This photo has...",
      categories: ["travel"],
      tags: [],
      id: 80
    });
    
  
    idx.add({
      title: "Hawkesbury 2016",
      excerpt: "Photos from another great trip to the Hawkesbury River. [caption id=”attachment_2760” align=”alignnone” width=”1280”] One of two resident monitor lizards[/caption] [caption...",
      categories: ["australia","fishing","Hawkesbury River"],
      tags: [],
      id: 81
    });
    
  
    idx.add({
      title: "Tailor at the Spit Bridge 2017",
      excerpt: "First fish of 2017 is a tailor (and it was a fluke).\n\n\n",
      categories: ["fishing"],
      tags: [],
      id: 82
    });
    
  
    idx.add({
      title: "Mungo Brush Beach",
      excerpt: "Photos from Mungo Brush beach. [caption id=”attachment_2797” align=”alignnone” width=”1280”] Exif_JPEG_PICTURE[/caption] A school of tailor appeared on the surface briefly before...",
      categories: ["australia","Fly-fishing","photography"],
      tags: [],
      id: 83
    });
    
  
    idx.add({
      title: "Hawkesbury River again Australia Day 2017",
      excerpt: "Went on a 2 night, 3 day trip to Mooney Mooney. Pretty much the same thing as previous trips except...",
      categories: ["australia","fishing","Hawkesbury River","photography"],
      tags: [],
      id: 84
    });
    
  
    idx.add({
      title: "Trinity River 2017",
      excerpt: "The 3rd annual FPGA Fly Fishing Workshop (FFF’17) was down on attendance, only Ken and myself participating from the 19-20th...",
      categories: ["FFF","fishing","Fly-fishing","travel"],
      tags: [],
      id: 85
    });
    
  
    idx.add({
      title: "South West Rocks (Michael Zhu)",
      excerpt: "An awesome fishing report that Michael Zhu sent to me via Facebook Messenger. Dear Phil, our group of four people boarded Brain’s...",
      categories: ["australia","fishing","Fly-fishing"],
      tags: [],
      id: 86
    });
    
  
    idx.add({
      title: "View from Office",
      excerpt: "\n",
      categories: ["australia","photography"],
      tags: [],
      id: 87
    });
    
  
    idx.add({
      title: "Postcard from Shanghai 2017",
      excerpt: "Travelled to Shanghai to visit my collaborators at Fudan University over Easter 2017. I have written about my previous trips to...",
      categories: ["photography","travel"],
      tags: [],
      id: 88
    });
    
  
    idx.add({
      title: "Fujifilm X Links",
      excerpt: "Wandering around Sim City in Hong Kong, a mint Fujifilm X100T jumped out and emptied my wallet. This is the first...",
      categories: ["photography"],
      tags: [],
      id: 89
    });
    
  
    idx.add({
      title: "Balls Head Panorama",
      excerpt: " \nSydney Skyline from Balls Head\n",
      categories: ["australia","photography"],
      tags: [],
      id: 90
    });
    
  
    idx.add({
      title: "The Dish, Parkes NSW",
      excerpt: " \nThe Dish\n",
      categories: ["australia","electronics","photography"],
      tags: [],
      id: 91
    });
    
  
    idx.add({
      title: "A 2m/70cm (146MHz and 440MHz) J-pole Antenna",
      excerpt: "My electronics doesn’t normally involve a hacksaw, hammer and propane torch but I had fun building this J-pole antenna from...",
      categories: ["electronics","hobbies"],
      tags: [],
      id: 92
    });
    
  
    idx.add({
      title: "How to make a Ubuntu boot usb in OSX (don't use the UNetbootin USB installer)",
      excerpt: "I had a lot of trouble making an Ubuntu boot USB drive from OSX. The instructions on https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0 don’t work in...",
      categories: ["software"],
      tags: [],
      id: 93
    });
    
  
    idx.add({
      title: "Ettus USRP x310 installation on Ubuntu",
      excerpt: "Vivado 2017.4 Version (Aug 2018) Install Xilinx Vivado 2017.4 from https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/2017-4.html sudo apt install python-pip Configure licence by putting the below...",
      categories: ["FPGA"],
      tags: [],
      id: 94
    });
    
  
    idx.add({
      title: "International Lighthouse and Lightship Weekend 2017",
      excerpt: "At my first International Lighthouse and Lightship Weekend with the Manly Warringah Radio Society, operating from Barrenjoey Lighthouse. Here is...",
      categories: ["australia","electronics","travel"],
      tags: [],
      id: 95
    });
    
  
    idx.add({
      title: "Forster trip with Ken",
      excerpt: "Ken came to visit from Seattle so Beard and I took a day off on Friday to go car-camping in...",
      categories: ["australia","fishing","photography"],
      tags: [],
      id: 96
    });
    
  
    idx.add({
      title: "Street Photos from Beijing",
      excerpt: "\n\nSome street photos from a visit to Beijing.\n\n\n\n\n\n\n",
      categories: ["photography","travel"],
      tags: [],
      id: 97
    });
    
  
    idx.add({
      title: "Long Jetty, Tuggerah Lake",
      excerpt: "\n\n\n\n",
      categories: ["australia","photography"],
      tags: [],
      id: 98
    });
    
  
    idx.add({
      title: "Code for Leong and Carlile, \"Methods for spherical data analysis and visualization\"",
      excerpt: "The source code for the paper: P. Leong and S. Carlile. Methods for spherical data analysis and visualization. Journal of Neuroscience Methods, 80(2):191–200, 1998....",
      categories: [],
      tags: [],
      id: 99
    });
    
  
    idx.add({
      title: "Computer Engineering Lab Christmas Party Photo 2017",
      excerpt: "[caption id=”attachment_3352” align=”alignnone” width=”840”] CEL Party 2017[/caption] Photos from earlier years below. [caption id=”attachment_3354” align=”alignnone” width=”840”] CEL Party 2016[/caption] [caption...",
      categories: ["academia"],
      tags: [],
      id: 100
    });
    
  
    idx.add({
      title: "Fly-fishing for Kingfish in Pittwater, Sydney",
      excerpt: "Ken came from Seattle to Sydney for a few solid days of fishing. I’m going to call this FFF’18 (even...",
      categories: ["australia","FFF","fishing","Fly-fishing","Hawkesbury River","hobbies"],
      tags: [],
      id: 101
    });
    
  
    idx.add({
      title: "Directions to CEL",
      excerpt: "The Computer Engineering Laboratory is on the 8th Floor of the Electrical Engineering Building, University of Sydney. My office is...",
      categories: ["academia"],
      tags: [],
      id: 102
    });
    
  
    idx.add({
      title: "Girl from Chiang Rai Karen Long Neck Tribe",
      excerpt: "[caption id=”attachment_3447” align=”alignnone” width=”1280”] Girl from Karen Long Neck Hill Tribe[/caption]\n",
      categories: ["photography","travel"],
      tags: [],
      id: 103
    });
    
  
    idx.add({
      title: "Camphor Laurel Timber Slab Hall Table",
      excerpt: "This nice camphor laurel slab was purchased at the Sydney Timber and Working with Wood Show. Unfortunately it was a...",
      categories: ["hobbies","woodwork"],
      tags: [],
      id: 104
    });
    
  
    idx.add({
      title: "How to apply to the Computer Engineering Lab at the University of Sydney",
      excerpt: "Please note that I receive a large number of emails from students wishing to join the Computer Engineering Lab (CEL),...",
      categories: ["academia"],
      tags: [],
      id: 105
    });
    
  
    idx.add({
      title: "Pittwater Jan 2018",
      excerpt: "Despite it being really windy, had a good day of fishing with Beard and his son Lachlan in Pittwater.\n\n\n\n\n\n\n",
      categories: ["fishing"],
      tags: [],
      id: 106
    });
    
  
    idx.add({
      title: "Refinishing Footstool",
      excerpt: "Refinishing a footstool I made about 5 years ago in Tasmanian Oak. It was my take on this elegant design...",
      categories: ["hobbies","woodwork"],
      tags: [],
      id: 107
    });
    
  
    idx.add({
      title: "John Moyle Memorial Field Day 2018",
      excerpt: "[caption id=”attachment_3514” align=”alignnone” width=”1280”] Tim VK2BT, Dave VK2JDS and Owen VK2OL[/caption] The Manly Warringah Radio Society (MWRS) participated in the...",
      categories: ["amateur radio","australia","hobbies","places","travel"],
      tags: [],
      id: 108
    });
    
  
    idx.add({
      title: "Shanghai 2018",
      excerpt: "Went to Shanghai again to collaborate with Prof Lingli Wang at Fudan University. Amazing hairy crab roe noodles in Shanghai.   The restaurant...",
      categories: ["travel"],
      tags: [],
      id: 109
    });
    
  
    idx.add({
      title: "Kigumi table",
      excerpt: "Really amazing craftsmanship on this table.\n\n[embed]https://www.youtube.com/watch?v=x51zMg7roIs[/embed]\n\n",
      categories: ["hobbies","woodwork"],
      tags: [],
      id: 110
    });
    
  
    idx.add({
      title: "Configuring WSJT-X on Ubuntu for an Icom IC-7200",
      excerpt: "I’ve been trying to configure WSJT-X so I can run FT8 and WSPR for quite a while now. I finally tracked...",
      categories: ["amateur radio","hobbies"],
      tags: [],
      id: 111
    });
    
  
    idx.add({
      title: "Photo from Karuah Jetty",
      excerpt: "\n",
      categories: ["hobbies","photography"],
      tags: [],
      id: 112
    });
    
  
    idx.add({
      title: "How to program Australian Repeaters into an Icom IC-2730A using Chirp",
      excerpt: "I was not able to find much information on how to program Australian repeaters into my Icom IC-2730A. I did...",
      categories: ["amateur radio","hobbies"],
      tags: [],
      id: 113
    });
    
  
    idx.add({
      title: "Installing powerpoles",
      excerpt: "Anderson Powerpole connectors are the standard for 12V amateur radio equipment. Instructions are here: https://powerwerx.com/help/powerpole-assembly-instructions and this figure shows the correct orientation....",
      categories: ["amateur radio","hobbies"],
      tags: [],
      id: 114
    });
    
  
    idx.add({
      title: "WSJT-X with improved antenna",
      excerpt: "Improving the antenna from http://phwl.org/configuring-wsjt-x-on-ubuntu-for-an-icom-ic-7200/ (it now goes down to the fence and up the tree), I can get to...",
      categories: ["amateur radio","hobbies"],
      tags: [],
      id: 115
    });
    
  
    idx.add({
      title: "Fishing Utah 2018",
      excerpt: "Prior to the Computer Vision and Pattern Recognition conference in Salt Lake City, went on an awesome fly-fishing trip, hosted...",
      categories: ["fishing","Fly-fishing","hobbies","travel"],
      tags: [],
      id: 116
    });
    
  
    idx.add({
      title: "Visit to University of Kassel Amateur Radio Club",
      excerpt: "University of Kassel Amateur Radio Club station. Here I am with a sausage, received as honorarium for giving a lecture....",
      categories: ["amateur radio","hobbies","travel"],
      tags: [],
      id: 117
    });
    
  
    idx.add({
      title: "An Afternoon in Frankfurt 2018",
      excerpt: "Frankfurt street scene with multiple reflections: barber shop with guy’s ghostly head, girls walking  and shops. It is always busy...",
      categories: ["travel"],
      tags: [],
      id: 118
    });
    
  
    idx.add({
      title: "Chengdu and Hong Kong 2018",
      excerpt: "Took a train trip to Chengdu for Sichuan food prior to the Performance-Aware Programming with Application Accelerators (PAPAA) 2018 Workshop in...",
      categories: ["travel"],
      tags: [],
      id: 119
    });
    
  
    idx.add({
      title: "Talks by documentary photographers",
      excerpt: "TED talks from some of the best documentary photographers. James Nachtwey 2007 TED Prize [embed]https://www.ted.com/talks/james_nachtwey_s_searing_pictures_of_war[/embed] Josef Koudelka 2014 [embed]https://www.youtube.com/watch?v=z_D5hLeQqHM[/embed] David...",
      categories: [],
      tags: [],
      id: 120
    });
    
  
    idx.add({
      title: "International Lighthouse and Lightship Weekend 2018",
      excerpt: "The Manly Warringah Radio Society (VK2MB) has participated in the International Lighthouse and Lightship Weekend (https://illw.net/) since 2003. This year...",
      categories: ["amateur radio","hobbies","photography"],
      tags: [],
      id: 121
    });
    
  
    idx.add({
      title: "Sydney University Open Day 2018",
      excerpt: "Here is a gallery of photos, the last 7 were taken by Geoff VK2TGO. [gallery link=”file” ids=”3953,3954,3955,3956,3957,3958,3959,3960,3961,3962,3963,3981,3980,3979,3978,3977,3976,3975”] Here is the...",
      categories: ["academia","amateur radio"],
      tags: [],
      id: 122
    });
    
  
    idx.add({
      title: "Nobel laureates Joachim Frank and Dan Shechtman",
      excerpt: "Q&amp;A session with Nobel laureates Joachim Frank (Columbia) and Dan Shechtman (Technion, Israel), moderated by Julie Carney. Professor Shechtman won...",
      categories: ["academia"],
      tags: [],
      id: 123
    });
    
  
    idx.add({
      title: "Dell Inspiron 13 7000",
      excerpt: "Setup of a Dell Inspiron 13 7000 running Windows 10 Pro at USyd Set up as a personal rather than...",
      categories: ["software"],
      tags: [],
      id: 124
    });
    
  
    idx.add({
      title: "Mooney Mooney Morning 2018",
      excerpt: "Couldn’t believe this was the first time this year Warren and I fished Mooney Mooney. It was forecast to be...",
      categories: ["fishing"],
      tags: [],
      id: 125
    });
    
  
    idx.add({
      title: "Harbin Intitute of Technology Reconfigurable Computing Course 2018",
      excerpt: "Lecture Notes (0-cel, 1-intro-cn, 1-lstm, 2-architecture, 3-exploration, 4-parallelism, 5-integration, 6-customisation, 7-precision, 8-mca, 9-kernelarch)\n\nTutorial Notes (lstmtut)\n",
      categories: ["FPGA"],
      tags: [],
      id: 126
    });
    
  
    idx.add({
      title: "Shanghai Harbin 2018",
      excerpt: "Had a short holiday prior to giving my 2018 Reconfigurable Computing course at Harbin Institute of Technology (HIT). Photos herein...",
      categories: ["travel"],
      tags: [],
      id: 127
    });
    
  
    idx.add({
      title: "FPT18 Workshop on Embedded Machine Learning",
      excerpt: "Embedded Machine Learning: Technology and Opportunities International Conference on Field Programmable Technology Naha, Okinawa http://www.fpt18.sakura.ne.jp/workshop.html December 14, 2018 (afternoon) Organisers:...",
      categories: ["academia","Fly-fishing","FPGA"],
      tags: [],
      id: 128
    });
    
  
    idx.add({
      title: "Sydney From the Air Nov 2018",
      excerpt: "\n",
      categories: ["australia","photography","travel"],
      tags: [],
      id: 129
    });
    
  
    idx.add({
      title: "Repair of a Marantz 74CD67 CD Player",
      excerpt: "My mother bought this Marantz 74CD67 CD player in 1996. Twenty years later, it was unable to read reliably. This...",
      categories: ["electronics"],
      tags: [],
      id: 130
    });
    
  
    idx.add({
      title: "Amateur Radio Shops in Akihabara",
      excerpt: "Passing through Tokyo this week and took the opportunity to visit a few amateur radio shops in Akihabara. First had...",
      categories: ["amateur radio"],
      tags: [],
      id: 131
    });
    
  
    idx.add({
      title: "Tokyo Institute of Technology Tsubame 3.0 Visit",
      excerpt: "Hosted by Prof Hiroki Nakahara and Prof Yuko Hara-Azumi, I gave a talk entitled “Large Scale FPGA Implementations of Machine...",
      categories: ["FPGA"],
      tags: [],
      id: 132
    });
    
  
    idx.add({
      title: "The Bar, Hyatt Regency Okinawa 2018",
      excerpt: "Following the FPT conference, we had a great evening at The Bar on the top floor of the Hyatt Regency...",
      categories: ["travel"],
      tags: [],
      id: 133
    });
    
  
    idx.add({
      title: "Hawkesbury 2018",
      excerpt: "Returned to the Hawkesbury River (see here for reports on previous trips) with Warren and my daughter Nicole. Last time...",
      categories: ["australia","fishing","Hawkesbury River"],
      tags: [],
      id: 134
    });
    
  
    idx.add({
      title: "Sydney Harbour Kingfish Jan 2019",
      excerpt: "It was cold and wet today but good to get out with Beard and son in Sydney Harbour. First time...",
      categories: ["australia","fishing"],
      tags: [],
      id: 135
    });
    
  
    idx.add({
      title: "Snaps from Berkeley",
      excerpt: "Sign says “Abolish the CIA and ICE”\n\n\n\n\n\n\n\n\n\nOnly way to get a good parking spot\n\n\n\n\n\n\n\n\n\n",
      categories: ["academia"],
      tags: [],
      id: 136
    });
    
  
    idx.add({
      title: "Las Vegas 2019",
      excerpt: "Made the 16 hour return drive to Las Vegas for a long weekend. Here are some photos. Las Vegas Strip....",
      categories: ["travel"],
      tags: [],
      id: 137
    });
    
  
    idx.add({
      title: "Berkeley Wireless Research Center 20th Year Anniversary",
      excerpt: "Photos from the Berkeley Wireless Research Center 20th Year Anniversary.\n\n\n  \n  \n  \n  \n  \n  \n  \n\n\n",
      categories: ["academia","electronics","FPGA"],
      tags: [],
      id: 138
    });
    
  
    idx.add({
      title: "Death of a Canon S120",
      excerpt: "I really liked my Canon S120 but it met its demise by being drowned in coffee. Replaced it with a...",
      categories: ["photography"],
      tags: [],
      id: 139
    });
    
  
    idx.add({
      title: "Grass Valley Fly-Fishing 2019",
      excerpt: "The FPGA Fly-Fishing Symposium 2019 (FFF’19) was a post-FPGA Conference workshop, attended by Guy, Ken and I. I am not...",
      categories: ["FFF","fishing","Fly-fishing","travel"],
      tags: [],
      id: 140
    });
    
  
    idx.add({
      title: "Electronics Flea Market",
      excerpt: "On the second weekend of Mar-Sep, the Electronics Flea Market runs in the carpark of Fry’s Electronics, Sunnyvale CA. I...",
      categories: ["electronics"],
      tags: [],
      id: 141
    });
    
  
    idx.add({
      title: "Blue Day in Sydney",
      excerpt: "\n\n",
      categories: ["photography","travel"],
      tags: [],
      id: 142
    });
    
  
    idx.add({
      title: "MacOS Install",
      excerpt: "It seemed like a good idea to remove all the accumulated rubbish on my MacBook Pro and install what I...",
      categories: ["software"],
      tags: [],
      id: 143
    });
    
  
    idx.add({
      title: "Yosemite 2019",
      excerpt: "Went for a two day trip to Yosemite National Park, staying at Yosemite Cedar Lodge. It is such a magnificent...",
      categories: ["photography","travel"],
      tags: [],
      id: 144
    });
    
  
    idx.add({
      title: "Mako on Fly - San Diego 2019",
      excerpt: "The mako shark is one of the fastest and most ferocious fish in the sea. They can swim up to...",
      categories: ["FFF","fishing","Fly-fishing"],
      tags: ["fly-fishing","mako shark","San Diego"],
      id: 145
    });
    
  
    idx.add({
      title: "Dropbox - don't give full access to your machine",
      excerpt: "Dropbox is a widely used program but they have a wide-open back door which allows them to circumvent Apple’s (good)...",
      categories: ["software"],
      tags: [],
      id: 146
    });
    
  
    idx.add({
      title: "Academic Genealogy",
      excerpt: "I visited my PhD supervisor, Dr Marwan Anwar Jabri last week in San Francisco. He left academia to found Dilithium...",
      categories: [],
      tags: [],
      id: 147
    });
    
  
    idx.add({
      title: "Sea lion, Santa Cruz Wharf",
      excerpt: "\n\n",
      categories: ["photography","travel"],
      tags: [],
      id: 148
    });
    
  
    idx.add({
      title: "Lake Tahoe 2019",
      excerpt: "\n\nSnaps from our trip to Lake Tahoe\n\n\n\n\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n\n\n",
      categories: ["travel"],
      tags: [],
      id: 149
    });
    
  
    idx.add({
      title: "Ten Lessons I wish I had been Taught - Gian-Carlo Rota",
      excerpt: "Interesting talk by the late MIT mathematician and philosopher https://www.ams.org/notices/199701/comm-rota.pdf Ten Lessons I wish I had been Taught Gian-Carlo Rota...",
      categories: ["academia"],
      tags: [],
      id: 150
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Welcome to Minimal Mistakes Jekyll",
        "url": "/welcome-to-minimal-mistakes-jekyll/",
        "excerpt": "Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Barramundi on Fly",
        "url": "/barramundi-on-fly/",
        "excerpt": "Black marlin on fly, Cape Bowling Green, Queensland, Mary River The Northern Territories (NT) of Australia is best known by...",
        "teaser":
          
            "/assets/images/1991/08/plbarra1-horiz.jpg"
          
      },
    
      
      {
        "title": "Marlin on Fly",
        "url": "/marlin-on-fly/",
        "excerpt": "Black marlin on fly, Cape Bowling Green, Queensland, Mary River An edited version of this article appeared in (Australian) “Modern...",
        "teaser":
          
            "/assets/images/1994/04/plmarlin1.jpg"
          
      },
    
      
      {
        "title": "New Zealand Trip",
        "url": "/new-zealand-trip/",
        "excerpt": "Fished the South Island of New Zealand in November 1996 with fishing buddy Beard. Here are some pictures of the...",
        "teaser":
          
            "/assets/images/2014/10/nz96-twizel3.jpg"
          
      },
    
      
      {
        "title": "Cessna first solo",
        "url": "/cessna-first-solo/",
        "excerpt": "Been taking flying lessons and took my first solo in a Cessna 152  in December 1996.\n\n\n",
        "teaser":
          
            "/assets/images/2015/12/plcessna.jpg"
          
      },
    
      
      {
        "title": "Stanwell Park",
        "url": "/stanwell-park/",
        "excerpt": "This photo of Stanwell Park was taken back in 1999.\n",
        "teaser":
          
            "/assets/images/2013/02/stanwell99.jpg"
          
      },
    
      
      {
        "title": "Telluride 2000",
        "url": "/telluride-2000/",
        "excerpt": "Town of Telluride taken from the Jud Wiebe Trail Bear Creek Waterfall Trail to Bear Creek Silver Lake Approach to...",
        "teaser":
          
            "/assets/images/2015/12/telluride1_800.jpg"
          
      },
    
      
      {
        "title": "Testament of a Fisherman",
        "url": "/testament-of-a-fisherman/",
        "excerpt": "I fish because I love to; because I love the environs where trout are found, which are invariably beautiful and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "A Ballard of Ducks",
        "url": "/a-ballard-of-ducks/",
        "excerpt": "The railway rattled and roared and swung With jolting carriage and bumping trucks. The sun, like a billiard red ball,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fishing Photos",
        "url": "/fishing-photos/",
        "excerpt": "Here are some of my favourite fishing photos from the age before digital cameras. Chris See with a drummer Beard...",
        "teaser":
          
            "/assets/images/2001/08/gt1.jpg"
          
      },
    
      
      {
        "title": "London Lakes",
        "url": "/london-lakes/",
        "excerpt": "Here are some photos from a trip to London Lakes in Tasmania that I made in December 2002.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2002/12/3794804597_870ea589a1_z.jpg"
          
      },
    
      
      {
        "title": "Weipa",
        "url": "/weipa-may-2004/",
        "excerpt": "Here are some photos taken from a fishing trip to Weipa in 2004 with Chris See.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2004/05/IMG_3774.jpg"
          
      },
    
      
      {
        "title": "Meon Springs",
        "url": "/meon-springs/",
        "excerpt": "Fished Meon Springs yesterday. It was my first fishing trip in the UK and my first experience fishing a managed,...",
        "teaser":
          
            "/assets/images/2005/09/Tero05.jpg"
          
      },
    
      
      {
        "title": "Walthamstow Reservoir",
        "url": "/walthamstow-reservoir/",
        "excerpt": "From Sydney, going trout fishing requires commitment. It is either an 8 hour drive to the Snowy Mountains or a...",
        "teaser":
          
            "/assets/images/2005/09/waltham220905-trout.jpg"
          
      },
    
      
      {
        "title": "Victorinox Swiss Army Knife Soldier Set",
        "url": "/victorinox-swiss-army-knife-soldier-set/",
        "excerpt": "The Victorinox Soldier is the classic Swiss Army knife (SAK). Each has a date stamp and this set is from...",
        "teaser":
          
            "/assets/images/2018/10/soldierset-front.jpg"
          
      },
    
      
      {
        "title": "A trip to Finland",
        "url": "/a-trip-to-finland/",
        "excerpt": "My trip to Finland coincided with the Midsummer Festival, an event which I was lucky enough to share with my...",
        "teaser":
          
            "/assets/images/2007/06/3794357585_f147b6519d_o2.jpg"
          
      },
    
      
      {
        "title": "Forster 2007",
        "url": "/forster/",
        "excerpt": "Forster is about a four hour drive from Sydney. Went on a very brief overnight camping/fishing trip with my good...",
        "teaser":
          
            "/assets/images/2007/08/p1010269.jpg"
          
      },
    
      
      {
        "title": "Fishing, Renovating and Ballroom Dancing in Utah 2008",
        "url": "/fishing-renovating-and-ballroom-dancing-in-utah-2008/",
        "excerpt": "Introduction Some sections of the Green River in Utah have 22,000 trout per mile and it is arguably the best trout...",
        "teaser":
          
            "/assets/images/2015/12/p1000341.jpg"
          
      },
    
      
      {
        "title": "Forster 2008",
        "url": "/booti-booti-national-park-aug-2008/",
        "excerpt": "Went on a 4 day fishing trip to Booti Booti National Park with my mates, Warren and Chris despite unfavourable...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Snowboard Fever",
        "url": "/snowboard-fever/",
        "excerpt": "Photo from Beijing ski trip.\n\n\n",
        "teaser":
          
            "/assets/images/2016/01/3731258183_2af03d23cb_o.jpg"
          
      },
    
      
      {
        "title": "Beijing and Harbin",
        "url": "/beijing-and-harbin/",
        "excerpt": "Here are some photos taken from a trip to Beijing and Harbin in 2009.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2009/02/dsc_2590_1.jpg"
          
      },
    
      
      {
        "title": "Life, the Universe and Fishing",
        "url": "/life-the-universe-and-fishing/",
        "excerpt": "I was asked by Prof Evangeline Young to give a “Lunchtime Pizza talk” on the 15th May. Here is the...",
        "teaser":
          
            "/assets/images/2009/05/3795629664_bae4ae8ff7_o.jpg"
          
      },
    
      
      {
        "title": "Hong Kong Skyline",
        "url": "/kowloon-and-hong-kong-from-the-air/",
        "excerpt": "Here are some photographs of Hong Kong. Kowloon and Hong Kong from the Lung Cheung Rd lookout at dawn. Festival...",
        "teaser":
          
            "/assets/images/2009/08/3777477460_3c36654fb6_o.jpg"
          
      },
    
      
      {
        "title": "Street photos from Hong Kong",
        "url": "/street-photos-from-hong-kong/",
        "excerpt": "Here are some street photos from Hong Kong.\n\n\n\n",
        "teaser":
          
            "/assets/images/2009/08/3818727575_13c777a19b.jpg"
          
      },
    
      
      {
        "title": "The Chinese University of Hong Kong",
        "url": "/the-chinese-university-of-hong-kong/",
        "excerpt": "The Chinese University of Hong Kong has a beautiful campus. Here are some photographs.\n\n\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2009/08/3732055986_9e2fbe4220.jpg"
          
      },
    
      
      {
        "title": "A Gift From my Students",
        "url": "/a-gift-from-my-students/",
        "excerpt": "I was honoured to have received this pen from my ex-students at CUHK.\n\n\n",
        "teaser":
          
            "/assets/images/2016/01/4201211301_58b7b50ef4_o.jpg"
          
      },
    
      
      {
        "title": "Blue Mountains",
        "url": "/blue-mountains/",
        "excerpt": "The 1 million hectare Blue Mountains is a World Heritage listed National Park in NSW Australia. Its name comes from...",
        "teaser":
          
            "/assets/images/2009/12/4181431810_697e86c733_o.jpg"
          
      },
    
      
      {
        "title": "Postcard from Ottawa",
        "url": "/postcard-from-ottawa/",
        "excerpt": "In return for my sins I was sent to Ottawa for the week. Ottawa is the capital of Canada and...",
        "teaser":
          
            "/assets/images/2010/02/4325453460_236ea51fbe_o.jpg"
          
      },
    
      
      {
        "title": "Sydney skyline at dusk",
        "url": "/sydney-skyline-at-dusk/",
        "excerpt": "This photo of Sydney was taken from Kirribilli, not too far from the Harbour Bridge.\n\n\n",
        "teaser":
          
            "/assets/images/2010/05/kirribilli.jpg"
          
      },
    
      
      {
        "title": "Whale Beach",
        "url": "/whale-beach/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2016/03/whalebeach.jpg"
          
      },
    
      
      {
        "title": "Elaine's (off) Road Trip",
        "url": "/elaines-off-road-trip/",
        "excerpt": "Check out Elaine’s amazing motorcycle trip around Australia here\n\n\n",
        "teaser":
          
            "http://elainext.files.wordpress.com/2010/04/map.jpg"
          
      },
    
      
      {
        "title": "Postcard from Ottawa 2011",
        "url": "/postcard-from-ottawa-2011/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2014/12/P1080551.jpg"
          
      },
    
      
      {
        "title": "Postcard from Monterey 2011",
        "url": "/postcard-from-monterey-2011/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2014/12/P1080702.jpg"
          
      },
    
      
      {
        "title": "Postcard from London 2011",
        "url": "/postcard-from-london-2011/",
        "excerpt": "I only have this as a pdf file but this link contains the story of my 2011 trip to London: london-2011.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Delhi 2011",
        "url": "/delhi/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2014/11/P1100183.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury River 2011",
        "url": "/hawkesbury-river-2011/",
        "excerpt": "Went with Warren to the Hawkesbury River for 3 days of fishing and camping. Our boat is now 20 years...",
        "teaser":
          
            "/assets/images/2011/12/PC284255.jpg"
          
      },
    
      
      {
        "title": "Guide to more than 100 Sydney Beaches",
        "url": "/guide-to-more-than-100-sydney-beaches/",
        "excerpt": "Graham Link was interviewed this morning on 702 ABC about his website on Sydney beaches. It is very informative and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Postcard from Shanghai",
        "url": "/postcard-from-shanghai/",
        "excerpt": "Spent a fortnight over Easter in Shanghai, as a visitor at Fudan University Played ping pong with students. Had a...",
        "teaser":
          
            "/assets/images/2012/04/P1110707.jpg"
          
      },
    
      
      {
        "title": "Molonglo Radio Observatory",
        "url": "/molonglo-radio-observatory/",
        "excerpt": "The University of Sydney’s Molonglo Radio Observatory is located about 3-4 hours south of Sydney. It is being used to...",
        "teaser":
          
            "/assets/images/2012/11/P1120459.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury River 2012",
        "url": "/hawkesbury-river-2012-2/",
        "excerpt": "In what has turned out to become an annual event (click on this link for the 2011 version), went on a 4...",
        "teaser":
          
            "/assets/images/2012/12/PC210130.jpg"
          
      },
    
      
      {
        "title": "Lake Eucumbene 2013",
        "url": "/lake-eucumbene-2013/",
        "excerpt": "Lake Eucumbene is an alpine lake about 500km south west of Sydney. My fishing mate, Beard (nickname which refered to...",
        "teaser":
          
            "/assets/images/2013/01/P1130242.jpg"
          
      },
    
      
      {
        "title": "Luderick Sydney Harbour",
        "url": "/luderick-sydney-harbour/",
        "excerpt": "Went for a fish in Sydney Harbour with my neighbour Michael. Had a great time catching luderick (otherwise known as blackfish)....",
        "teaser":
          
            "/assets/images/2015/12/P1130251.jpg"
          
      },
    
      
      {
        "title": "Postcard from Harbin",
        "url": "/postcard-from-harbin/",
        "excerpt": "Had a really cool time in Harbin. This was the view from my departing flight, and this was the view...",
        "teaser":
          
            "/assets/images/2013/02/P2241417.jpg"
          
      },
    
      
      {
        "title": "Panorama at Akuna Bay",
        "url": "/panorama-at-akuna-bay/",
        "excerpt": "Went for a drive this morning to Akuna Bay. Fog was coming off the river and this photograph was taken...",
        "teaser":
          
            "/assets/images/2013/04/akunabay.jpg"
          
      },
    
      
      {
        "title": "Shanghai April 2013",
        "url": "/shanghai-april-2013/",
        "excerpt": "I had an excellent trip to Shanghai last year and wrote about it in  http://www.phwl.org/postcard-from-shanghai/. I was fortunate enough to be invited...",
        "teaser":
          
            "/assets/images/2013/04/P4242220.jpg"
          
      },
    
      
      {
        "title": "Pelicans at Mooney Mooney boat ramp, Hawkesbury River",
        "url": "/mooney-mooney-boat-ramp/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2013/05/P5182434-lr.jpg"
          
      },
    
      
      {
        "title": "High Altitude Balloon Launch #1",
        "url": "/high-altitude-balloon-launch-1/",
        "excerpt": "Our Sydney University Electrical Engineering students, Stephen Tridgell and David Portelli successfully made a high-altitude balloon launch from Blayney, NSW....",
        "teaser":
          
            "/assets/images/2013/05/GOPR5590.jpg"
          
      },
    
      
      {
        "title": "The Gap, Watsons Bay, Sydney",
        "url": "/the-gap-watsons-bay-sydney/",
        "excerpt": "Some photos from The Gap, Watsons Bay, Sydney this morning at sunrise.\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2013/06/thegap-medpano2.jpg"
          
      },
    
      
      {
        "title": "Kangaroo Tagging at Nelson Bay",
        "url": "/kangaroo-tagging-at-nelson-bay/",
        "excerpt": "I had the opportunity to visit the Nelson Bay Golf Course and observe the tagging programme of semi-wild Eastern Grey...",
        "teaser":
          
            "/assets/images/2013/07/P7090917.jpg"
          
      },
    
      
      {
        "title": "Cowan Creek",
        "url": "/cowan-creek/",
        "excerpt": "Photos from a short trip to Cowan Creek on a foggy morning. More after the jump. First time I’ve seen...",
        "teaser":
          
            "/assets/images/2013/07/P7282832.jpg"
          
      },
    
      
      {
        "title": "Panorama of Sydney Opera House and the Harbour Bridge",
        "url": "/panorama-of-sydney-opera-house-and-the-harbour-bridge/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2013/08/hbridge-pano05082013.jpg"
          
      },
    
      
      {
        "title": "Postcard from Harbin Summer 2013",
        "url": "/postcard-from-harbin-summer-2013/",
        "excerpt": "After a superb trip to Harbin in winter, I returned in summer to attend the ICEMI conference, kindly hosted again...",
        "teaser":
          
            "/assets/images/2013/08/P8183366.jpg"
          
      },
    
      
      {
        "title": "Sydney Skyline from The Gap",
        "url": "/panorama-of-the-gap/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2013/08/gappano.jpg"
          
      },
    
      
      {
        "title": "Sydney University Open Day (from a weather balloon)",
        "url": "/sydney-university-open-day-from-a-weather-balloon/",
        "excerpt": "A photograph of the Sydney University Open Day from a weather balloon above the tower of the main quadrangle. This...",
        "teaser":
          
            "/assets/images/2013/08/GOPR7514.jpg"
          
      },
    
      
      {
        "title": "Panorama of Sydney Harbour",
        "url": "/panorama-of-sydney-harbour/",
        "excerpt": "\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2013/09/hbridge-pano24092013-lores.jpg"
          
      },
    
      
      {
        "title": "Postcard from Kyoto and Osaka",
        "url": "/postcard-from-kyoto-and-osaka/",
        "excerpt": "Following the International Conference on Field Programmable Technology we spent some time in Kyoto and Osaka. Clear Water Temple is a...",
        "teaser":
          
            "/assets/images/2013/12/PC123629.jpg"
          
      },
    
      
      {
        "title": "Girl in Hong Kong MTR",
        "url": "/girl-in-hong-kong-mtr/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2018/10/soldierset-front.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury River 2013",
        "url": "/hawkesbury-river-2013/",
        "excerpt": "Our trips to the Hawkesbury River have become an annual event (2012, 2011). As usual, the boat ramp was at...",
        "teaser":
          
            "/assets/images/2013/12/PC2844061.jpg"
          
      },
    
      
      {
        "title": "Fishing with friends",
        "url": "/fishing-with-friends/",
        "excerpt": "Our boat was purchased around 1991 and has served us well. It is jointly owned with my close university friends,...",
        "teaser":
          
            "/assets/images/2014/04/P4241279.jpg"
          
      },
    
      
      {
        "title": "Circular Quay",
        "url": "/circular-quay/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2014/06/P6040022.jpg"
          
      },
    
      
      {
        "title": "Hong Kong Aerial Photograph",
        "url": "/hong-kong-aerial-photograph/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2014/07/P7030408.jpg"
          
      },
    
      
      {
        "title": "Bondi Beach",
        "url": "/bondi-beach/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2014/08/bondibeach.jpg"
          
      },
    
      
      {
        "title": "London, Shanghai and Hong Kong 2014",
        "url": "/london-shanghai-and-hong-kong-2014/",
        "excerpt": "Left Sydney in the last week of November 2014 for London. Australia’s contribution to fashion is the Ugg boot. Strangely,...",
        "teaser":
          
            "/assets/images/2014/12/PC140137.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury River 2014",
        "url": "/hawkesbury-river-2014/",
        "excerpt": "Much like previous years, went to do some fishing in the Hawkesbury River over the Christmas break. This time, Beard...",
        "teaser":
          
            "/assets/images/2015/01/IMG_0079.jpg"
          
      },
    
      
      {
        "title": "Cradle Mountain Tasmania",
        "url": "/cradle-mountain-tasmania/",
        "excerpt": "A gallery of photographs taken around Cradle Mountain, Tasmania.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2015/02/cradlemtn-pano2.jpg"
          
      },
    
      
      {
        "title": "Tasmanian Holiday 2015",
        "url": "/tasmanian-holiday-2015/",
        "excerpt": "Waited for ages for my beloved wife’s bag then got that sinking feeling when the carousel stops turning. Everyone had...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fishhook removal",
        "url": "/fishhook-removal/",
        "excerpt": "In all my years of fishing, we were fortunate not to have had a bad injury. There was the time...",
        "teaser":
          
            "http://www.aafp.org/afp/2001/0601/afp20010601p2231-f3.gif"
          
      },
    
      
      {
        "title": "Harbin and Qingdao 2015",
        "url": "/harbin-and-qingdao-2015/",
        "excerpt": "Went to teach a summer course in reconfigurable computing again at Harbin Institute of Technology (HIT) and to also participate...",
        "teaser":
          
            "/assets/images/2015/07/P7170185.jpg"
          
      },
    
      
      {
        "title": "Quintrex Fishseeker Photos",
        "url": "/boat-photos/",
        "excerpt": "Didn’t realise that we have had this boat since 1993. It has performed faultlessly over this period and the Evinrude...",
        "teaser":
          
            "/assets/images/2015/08/R0015861.jpg"
          
      },
    
      
      {
        "title": "Stacer Outlaw 429",
        "url": "/stacer-outlaw-429/",
        "excerpt": "Traded in the Quintrex for a new Stacer Outlaw 429 with Evinrude 50 hp at Huett Marine.  I highly recommend them...",
        "teaser":
          
            "/assets/images/2015/10/IMG_5965.jpg"
          
      },
    
      
      {
        "title": "Sydney looking west",
        "url": "/sydney-looking-west/",
        "excerpt": "A westward looking photograph of Sydney with the Eastern Suburbs in the foreground, Sydney CBD and Harbour in the middle,...",
        "teaser":
          
            "/assets/images/2015/12/sydlookingwest.jpg"
          
      },
    
      
      {
        "title": "New Zealand Fly-Fishing 2015",
        "url": "/new-zealand-fly-fishing-2015/",
        "excerpt": "After attending the International Conference on Field Programmable Technology, Brent, Ken and myself took a 5-day fly-fishing trip around the...",
        "teaser":
          
            "/assets/images/2015/12/IMG_1615.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury River 2015",
        "url": "/hawkesbury-river-2015/",
        "excerpt": "A camping trip with Warren to the Hawkesbury has become an annual event (e.g. in 2014). Unfortunately, we couldn’t do...",
        "teaser":
          
            "/assets/images/2015/12/IMG_2416.jpg"
          
      },
    
      
      {
        "title": "Luderick Fishing Sydney Harbour",
        "url": "/luderick-fishing-sydney-harbour/",
        "excerpt": "Luderick (otherwise known as blackfish) are among my favourite targets as they are quite plentiful in Sydney Harbour and the fishing...",
        "teaser":
          
            "/assets/images/2016/03/IMG_6937.jpg"
          
      },
    
      
      {
        "title": "Danny Lim",
        "url": "/danny-lim/",
        "excerpt": "Took this photo of Danny Lim, Activist, outside Redfern station. A nice guy and quite a character! He made sure...",
        "teaser":
          
            "/assets/images/2016/05/IMG_7215-e1463299735771.jpg"
          
      },
    
      
      {
        "title": "Federal Election 2016",
        "url": "/federal-election-2016/",
        "excerpt": "\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2016/07/IMG_2522.jpg"
          
      },
    
      
      {
        "title": "Osaka trip 2016",
        "url": "/osaka-trip-2016/",
        "excerpt": "Spent a week in Osaka, the last time we were there was 2013. Shuttle ride to Sydney airport. Had a day to check out...",
        "teaser":
          
            "/assets/images/2016/07/IMG_2849.jpg"
          
      },
    
      
      {
        "title": "PAPAA 2016",
        "url": "/papaa-2016/",
        "excerpt": "We had a very successful Croucher PAPAA workshop at Hong Kong University. The new elevator from HKU MTR station up to Hong...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "School Retreat (Manly 2016)",
        "url": "/school-retreat-manly-2016/",
        "excerpt": "Here are some photos from the School of Electrical and Information Engineering retreat in Manly. [caption id=”attachment_2637” align=”alignnone” width=”8196”] Panorama from...",
        "teaser":
          
            "/assets/images/2016/09/queencliffpano.jpg"
          
      },
    
      
      {
        "title": "Olympic Peninsula Fly-Fishing 2016",
        "url": "/olympic-peninsula-fly-fishing-2016/",
        "excerpt": "I participated in the 2nd FPGA Fly-Fishing (FFF’16) Symposium in Seattle WA, hosted by Ken and attended by Guy, Aaron...",
        "teaser":
          
            "/assets/images/2016/10/IMG_3737.jpg"
          
      },
    
      
      {
        "title": "London, Xi'an and Macau 2016",
        "url": "/london-xian-and-macau-2016/",
        "excerpt": "Departed on a beautiful early-summer Sydney morning in late Nov. Was in London about a day later. This photo has...",
        "teaser":
          
            "/assets/images/2016/12/IMG_4087.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury 2016",
        "url": "/hawkesbury-2016/",
        "excerpt": "Photos from another great trip to the Hawkesbury River. [caption id=”attachment_2760” align=”alignnone” width=”1280”] One of two resident monitor lizards[/caption] [caption...",
        "teaser":
          
            "/assets/images/2016/12/PC235195.jpg"
          
      },
    
      
      {
        "title": "Tailor at the Spit Bridge 2017",
        "url": "/tailor-at-the-spit-bridge-2017/",
        "excerpt": "First fish of 2017 is a tailor (and it was a fluke).\n\n\n",
        "teaser":
          
            "/assets/images/2017/01/spittailor17.jpg"
          
      },
    
      
      {
        "title": "Mungo Brush Beach",
        "url": "/mungo-brush-beach/",
        "excerpt": "Photos from Mungo Brush beach. [caption id=”attachment_2797” align=”alignnone” width=”1280”] Exif_JPEG_PICTURE[/caption] A school of tailor appeared on the surface briefly before...",
        "teaser":
          
            "/assets/images/2017/01/mungobrush2.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury River again Australia Day 2017",
        "url": "/hawkesbury-river-again-australia-day-2017/",
        "excerpt": "Went on a 2 night, 3 day trip to Mooney Mooney. Pretty much the same thing as previous trips except...",
        "teaser":
          
            "/assets/images/2017/01/IMG_5383.jpg"
          
      },
    
      
      {
        "title": "Trinity River 2017",
        "url": "/trinity-river-2017/",
        "excerpt": "The 3rd annual FPGA Fly Fishing Workshop (FFF’17) was down on attendance, only Ken and myself participating from the 19-20th...",
        "teaser":
          
            "/assets/images/2017/02/image1-e1487888764948.jpg"
          
      },
    
      
      {
        "title": "South West Rocks (Michael Zhu)",
        "url": "/south-west-rocks-michael-zhu/",
        "excerpt": "An awesome fishing report that Michael Zhu sent to me via Facebook Messenger. Dear Phil, our group of four people boarded Brain’s...",
        "teaser":
          
            "/assets/images/2017/03/17101971_1867685196806919_812445305_n.jpg"
          
      },
    
      
      {
        "title": "View from Office",
        "url": "/view-from-office/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2017/04/IMG_9416.jpg"
          
      },
    
      
      {
        "title": "Postcard from Shanghai 2017",
        "url": "/postcard-from-shanghai-2017/",
        "excerpt": "Travelled to Shanghai to visit my collaborators at Fudan University over Easter 2017. I have written about my previous trips to...",
        "teaser":
          
            "/assets/images/2017/04/IMG_9415.jpg"
          
      },
    
      
      {
        "title": "Fujifilm X Links",
        "url": "/fujifilm-x-links/",
        "excerpt": "Wandering around Sim City in Hong Kong, a mint Fujifilm X100T jumped out and emptied my wallet. This is the first...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Balls Head Panorama",
        "url": "/balls-head-panorama/",
        "excerpt": " \nSydney Skyline from Balls Head\n",
        "teaser":
          
            "/assets/images/2017/05/P4300003-3.jpg"
          
      },
    
      
      {
        "title": "The Dish, Parkes NSW",
        "url": "/the-dish-parkes-nsw/",
        "excerpt": " \nThe Dish\n",
        "teaser":
          
            "/assets/images/2017/05/P5160020.jpg"
          
      },
    
      
      {
        "title": "A 2m/70cm (146MHz and 440MHz) J-pole Antenna",
        "url": "/a-2m70cm-146mhz-and-440mhz-j-pole-antenna/",
        "excerpt": "My electronics doesn’t normally involve a hacksaw, hammer and propane torch but I had fun building this J-pole antenna from...",
        "teaser":
          
            "/assets/images/2017/06/DSCF4455.jpg"
          
      },
    
      
      {
        "title": "How to make a Ubuntu boot usb in OSX (don't use the UNetbootin USB installer)",
        "url": "/how-to-make-a-ubuntu-boot-usb-in-osx-dont-use-the-unetbootin-usb-installer/",
        "excerpt": "I had a lot of trouble making an Ubuntu boot USB drive from OSX. The instructions on https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0 don’t work in...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ettus USRP x310 installation on Ubuntu",
        "url": "/ettus-usrp-x310-installation-on-ubuntu/",
        "excerpt": "Vivado 2017.4 Version (Aug 2018) Install Xilinx Vivado 2017.4 from https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/2017-4.html sudo apt install python-pip Configure licence by putting the below...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "International Lighthouse and Lightship Weekend 2017",
        "url": "/international-lighthouse-and-lightship-weekend-2017/",
        "excerpt": "At my first International Lighthouse and Lightship Weekend with the Manly Warringah Radio Society, operating from Barrenjoey Lighthouse. Here is...",
        "teaser":
          
            "/assets/images/2017/08/P8190063-1-1.jpg"
          
      },
    
      
      {
        "title": "Forster trip with Ken",
        "url": "/forster-trip-with-ken/",
        "excerpt": "Ken came to visit from Seattle so Beard and I took a day off on Friday to go car-camping in...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Street Photos from Beijing",
        "url": "/street-photos-from-beijing/",
        "excerpt": "\n\nSome street photos from a visit to Beijing.\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2017/10/DSCF4583.jpg"
          
      },
    
      
      {
        "title": "Long Jetty, Tuggerah Lake",
        "url": "/long-jetty-tuggerah-lake/",
        "excerpt": "\n\n\n\n",
        "teaser":
          
            "/assets/images/2017/10/DSCF4677.jpg"
          
      },
    
      
      {
        "title": "Code for Leong and Carlile, \"Methods for spherical data analysis and visualization\"",
        "url": "/code-for-leong-and-carlile-methods-for-spherical-data-analysis-and-visualization/",
        "excerpt": "The source code for the paper: P. Leong and S. Carlile. Methods for spherical data analysis and visualization. Journal of Neuroscience Methods, 80(2):191–200, 1998....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Computer Engineering Lab Christmas Party Photo 2017",
        "url": "/computer-engineering-lab-christmas-party-photo-2017/",
        "excerpt": "[caption id=”attachment_3352” align=”alignnone” width=”840”] CEL Party 2017[/caption] Photos from earlier years below. [caption id=”attachment_3354” align=”alignnone” width=”840”] CEL Party 2016[/caption] [caption...",
        "teaser":
          
            "/assets/images/2017/11/celchristmas17.jpeg"
          
      },
    
      
      {
        "title": "Fly-fishing for Kingfish in Pittwater, Sydney",
        "url": "/fly-fishing-for-kingfish-in-pittwater-sydney/",
        "excerpt": "Ken came from Seattle to Sydney for a few solid days of fishing. I’m going to call this FFF’18 (even...",
        "teaser":
          
            "/assets/images/2017/12/kingfish17-14.jpg"
          
      },
    
      
      {
        "title": "Directions to CEL",
        "url": "/directions-to-cel/",
        "excerpt": "The Computer Engineering Laboratory is on the 8th Floor of the Electrical Engineering Building, University of Sydney. My office is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Girl from Chiang Rai Karen Long Neck Tribe",
        "url": "/girl-from-chiang-rai-karen-long-neck-tribe/",
        "excerpt": "[caption id=”attachment_3447” align=”alignnone” width=”1280”] Girl from Karen Long Neck Hill Tribe[/caption]\n",
        "teaser":
          
            "/assets/images/2018/01/DSCF5007.jpg"
          
      },
    
      
      {
        "title": "Camphor Laurel Timber Slab Hall Table",
        "url": "/hall-table/",
        "excerpt": "This nice camphor laurel slab was purchased at the Sydney Timber and Working with Wood Show. Unfortunately it was a...",
        "teaser":
          
            "/assets/images/2018/01/IMG_0676.jpg"
          
      },
    
      
      {
        "title": "How to apply to the Computer Engineering Lab at the University of Sydney",
        "url": "/how-to-apply-to-the-computer-engineering-lab-at-the-university-of-sydney/",
        "excerpt": "Please note that I receive a large number of emails from students wishing to join the Computer Engineering Lab (CEL),...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Pittwater Jan 2018",
        "url": "/pittwater-jan-2018/",
        "excerpt": "Despite it being really windy, had a good day of fishing with Beard and his son Lachlan in Pittwater.\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2018/01/38662976_Unknown.jpg"
          
      },
    
      
      {
        "title": "Refinishing Footstool",
        "url": "/refinishing-footstool/",
        "excerpt": "Refinishing a footstool I made about 5 years ago in Tasmanian Oak. It was my take on this elegant design...",
        "teaser":
          
            "/assets/images/2018/01/IMG_0612.jpg"
          
      },
    
      
      {
        "title": "John Moyle Memorial Field Day 2018",
        "url": "/john-moyle-memorial-field-day-2018/",
        "excerpt": "[caption id=”attachment_3514” align=”alignnone” width=”1280”] Tim VK2BT, Dave VK2JDS and Owen VK2OL[/caption] The Manly Warringah Radio Society (MWRS) participated in the...",
        "teaser":
          
            "/assets/images/2018/03/DSCF5131.jpg"
          
      },
    
      
      {
        "title": "Shanghai 2018",
        "url": "/shanghai-2018/",
        "excerpt": "Went to Shanghai again to collaborate with Prof Lingli Wang at Fudan University. Amazing hairy crab roe noodles in Shanghai.   The restaurant...",
        "teaser":
          
            "/assets/images/2018/07/39453904_unknown.jpg"
          
      },
    
      
      {
        "title": "Kigumi table",
        "url": "/kigumi-table/",
        "excerpt": "Really amazing craftsmanship on this table.\n\n[embed]https://www.youtube.com/watch?v=x51zMg7roIs[/embed]\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Configuring WSJT-X on Ubuntu for an Icom IC-7200",
        "url": "/configuring-wsjt-x-on-ubuntu-for-an-icom-ic-7200/",
        "excerpt": "I’ve been trying to configure WSJT-X so I can run FT8 and WSPR for quite a while now. I finally tracked...",
        "teaser":
          
            "/assets/images/2018/04/Screen-Shot-2018-04-22-at-8.13.09-pm.png"
          
      },
    
      
      {
        "title": "Photo from Karuah Jetty",
        "url": "/photo-from-karuah-jetty/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2018/05/DSC_5851.jpg"
          
      },
    
      
      {
        "title": "How to program Australian Repeaters into an Icom IC-2730A using Chirp",
        "url": "/how-to-program-australian-repeaters-into-an-icom-ic-2730a-using-chirp/",
        "excerpt": "I was not able to find much information on how to program Australian repeaters into my Icom IC-2730A. I did...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Installing powerpoles",
        "url": "/installing-powerpoles/",
        "excerpt": "Anderson Powerpole connectors are the standard for 12V amateur radio equipment. Instructions are here: https://powerwerx.com/help/powerpole-assembly-instructions and this figure shows the correct orientation....",
        "teaser":
          
            "https://powerwerx.azureedge.net/asset/image/assembly/PPpairOKN.jpg"
          
      },
    
      
      {
        "title": "WSJT-X with improved antenna",
        "url": "/wsjt-x-with-improved-antenna/",
        "excerpt": "Improving the antenna from http://phwl.org/configuring-wsjt-x-on-ubuntu-for-an-icom-ic-7200/ (it now goes down to the fence and up the tree), I can get to...",
        "teaser":
          
            "/assets/images/2018/05/Screen-Shot-2018-05-26.jpg"
          
      },
    
      
      {
        "title": "Fishing Utah 2018",
        "url": "/fishing-utah-2018/",
        "excerpt": "Prior to the Computer Vision and Pattern Recognition conference in Salt Lake City, went on an awesome fly-fishing trip, hosted...",
        "teaser":
          
            "/assets/images/2018/06/IMG_8437.jpg"
          
      },
    
      
      {
        "title": "Visit to University of Kassel Amateur Radio Club",
        "url": "/visit-to-kassel-university-amateur-radio-club/",
        "excerpt": "University of Kassel Amateur Radio Club station. Here I am with a sausage, received as honorarium for giving a lecture....",
        "teaser":
          
            "/assets/images/2018/07/img_1601-1.jpg"
          
      },
    
      
      {
        "title": "An Afternoon in Frankfurt 2018",
        "url": "/frankfurt-2018/",
        "excerpt": "Frankfurt street scene with multiple reflections: barber shop with guy’s ghostly head, girls walking  and shops. It is always busy...",
        "teaser":
          
            "/assets/images/2018/07/DSCF5430.jpg"
          
      },
    
      
      {
        "title": "Chengdu and Hong Kong 2018",
        "url": "/chengdu-and-hong-kong-2018/",
        "excerpt": "Took a train trip to Chengdu for Sichuan food prior to the Performance-Aware Programming with Application Accelerators (PAPAA) 2018 Workshop in...",
        "teaser":
          
            "/assets/images/2018/08/P7190077.jpg"
          
      },
    
      
      {
        "title": "Talks by documentary photographers",
        "url": "/talks-by-documentary-photographers/",
        "excerpt": "TED talks from some of the best documentary photographers. James Nachtwey 2007 TED Prize [embed]https://www.ted.com/talks/james_nachtwey_s_searing_pictures_of_war[/embed] Josef Koudelka 2014 [embed]https://www.youtube.com/watch?v=z_D5hLeQqHM[/embed] David...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "International Lighthouse and Lightship Weekend 2018",
        "url": "/international-lighthouse-and-lightship-weekend-2018/",
        "excerpt": "The Manly Warringah Radio Society (VK2MB) has participated in the International Lighthouse and Lightship Weekend (https://illw.net/) since 2003. This year...",
        "teaser":
          
            "/assets/images/2018/08/IMG_1946.jpg"
          
      },
    
      
      {
        "title": "Sydney University Open Day 2018",
        "url": "/sydney-university-open-day-2018/",
        "excerpt": "Here is a gallery of photos, the last 7 were taken by Geoff VK2TGO. [gallery link=”file” ids=”3953,3954,3955,3956,3957,3958,3959,3960,3961,3962,3963,3981,3980,3979,3978,3977,3976,3975”] Here is the...",
        "teaser":
          
            "/assets/images/2018/08/img_1989.jpg"
          
      },
    
      
      {
        "title": "Nobel laureates Joachim Frank and Dan Shechtman",
        "url": "/nobel-laureates-joachim-frank-and-dan-shechtman/",
        "excerpt": "Q&amp;A session with Nobel laureates Joachim Frank (Columbia) and Dan Shechtman (Technion, Israel), moderated by Julie Carney. Professor Shechtman won...",
        "teaser":
          
            "/assets/images/2018/09/img_2034.jpg"
          
      },
    
      
      {
        "title": "Dell Inspiron 13 7000",
        "url": "/dell-inspiron-13-7000/",
        "excerpt": "Setup of a Dell Inspiron 13 7000 running Windows 10 Pro at USyd Set up as a personal rather than...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Mooney Mooney Morning 2018",
        "url": "/mooney-mooney-morning-2018/",
        "excerpt": "Couldn’t believe this was the first time this year Warren and I fished Mooney Mooney. It was forecast to be...",
        "teaser":
          
            "/assets/images/2018/09/40515248_Unknown.jpg"
          
      },
    
      
      {
        "title": "Harbin Intitute of Technology Reconfigurable Computing Course 2018",
        "url": "/harbin-intitute-of-technology-reconfigurable-computing-course-2018/",
        "excerpt": "Lecture Notes (0-cel, 1-intro-cn, 1-lstm, 2-architecture, 3-exploration, 4-parallelism, 5-integration, 6-customisation, 7-precision, 8-mca, 9-kernelarch)\n\nTutorial Notes (lstmtut)\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Shanghai Harbin 2018",
        "url": "/shanghai-harbin-2018/",
        "excerpt": "Had a short holiday prior to giving my 2018 Reconfigurable Computing course at Harbin Institute of Technology (HIT). Photos herein...",
        "teaser":
          
            "/assets/images/2018/10/IMG_9441.jpg"
          
      },
    
      
      {
        "title": "FPT18 Workshop on Embedded Machine Learning",
        "url": "/fpt18-workshop-on-embedded-machine-learning/",
        "excerpt": "Embedded Machine Learning: Technology and Opportunities International Conference on Field Programmable Technology Naha, Okinawa http://www.fpt18.sakura.ne.jp/workshop.html December 14, 2018 (afternoon) Organisers:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Sydney From the Air Nov 2018",
        "url": "/sydney-from-the-air-nov-2018/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/2018/11/sydney-aerialnov18.jpg"
          
      },
    
      
      {
        "title": "Repair of a Marantz 74CD67 CD Player",
        "url": "/repair-of-a-marantz-74cd67-cd-player/",
        "excerpt": "My mother bought this Marantz 74CD67 CD player in 1996. Twenty years later, it was unable to read reliably. This...",
        "teaser":
          
            "/assets/images/2018/11/40784800_Unknown.jpg"
          
      },
    
      
      {
        "title": "Amateur Radio Shops in Akihabara",
        "url": "/amateur-radio-shops-in-akihabara/",
        "excerpt": "Passing through Tokyo this week and took the opportunity to visit a few amateur radio shops in Akihabara. First had...",
        "teaser":
          
            "/assets/images/2018/12/DSCF5835.jpg"
          
      },
    
      
      {
        "title": "Tokyo Institute of Technology Tsubame 3.0 Visit",
        "url": "/tokyo-institute-of-technology-tsubame-3-0-visit/",
        "excerpt": "Hosted by Prof Hiroki Nakahara and Prof Yuko Hara-Azumi, I gave a talk entitled “Large Scale FPGA Implementations of Machine...",
        "teaser":
          
            "/assets/images/2018/12/IMG_9636.jpg"
          
      },
    
      
      {
        "title": "The Bar, Hyatt Regency Okinawa 2018",
        "url": "/the-bar-hyatt-regency-okinawa-2018/",
        "excerpt": "Following the FPT conference, we had a great evening at The Bar on the top floor of the Hyatt Regency...",
        "teaser":
          
            "/assets/images/2018/12/DSCF5869.jpg"
          
      },
    
      
      {
        "title": "Hawkesbury 2018",
        "url": "/hawkesbury-2018/",
        "excerpt": "Returned to the Hawkesbury River (see here for reports on previous trips) with Warren and my daughter Nicole. Last time...",
        "teaser":
          
            "/assets/images/2018/12/IMG_2643.jpg"
          
      },
    
      
      {
        "title": "Sydney Harbour Kingfish Jan 2019",
        "url": "/sydney-harbour-kingfish-jan-2019/",
        "excerpt": "It was cold and wet today but good to get out with Beard and son in Sydney Harbour. First time...",
        "teaser":
          
            "/assets/images/2019/01/41418944_Unknown.jpg"
          
      },
    
      
      {
        "title": "Snaps from Berkeley",
        "url": "/snaps-from-berkeley/",
        "excerpt": "Sign says “Abolish the CIA and ICE”\n\n\n\n\n\n\n\n\n\nOnly way to get a good parking spot\n\n\n\n\n\n\n\n\n\n",
        "teaser":
          
            "/assets/images/2019/01/IMG_0034.jpg"
          
      },
    
      
      {
        "title": "Las Vegas 2019",
        "url": "/las-vegas-2019/",
        "excerpt": "Made the 16 hour return drive to Las Vegas for a long weekend. Here are some photos. Las Vegas Strip....",
        "teaser":
          
            "/assets/images/2019/02/DSCF5958.jpg"
          
      },
    
      
      {
        "title": "Berkeley Wireless Research Center 20th Year Anniversary",
        "url": "/berkeley-wireless-research-center-20-year-anniversary/",
        "excerpt": "Photos from the Berkeley Wireless Research Center 20th Year Anniversary.\n\n\n  \n  \n  \n  \n  \n  \n  \n\n\n",
        "teaser":
          
            "/assets/images/2019/02/DSCF5968.jpg"
          
      },
    
      
      {
        "title": "Death of a Canon S120",
        "url": "/death-of-a-canon-s120/",
        "excerpt": "I really liked my Canon S120 but it met its demise by being drowned in coffee. Replaced it with a...",
        "teaser":
          
            "/assets/images/2019/02/IMG_3107.jpg"
          
      },
    
      
      {
        "title": "Grass Valley Fly-Fishing 2019",
        "url": "/grass-valley-fishing-2019/",
        "excerpt": "The FPGA Fly-Fishing Symposium 2019 (FFF’19) was a post-FPGA Conference workshop, attended by Guy, Ken and I. I am not...",
        "teaser":
          
            "/assets/images/2019/03/IMG_0221.jpg"
          
      },
    
      
      {
        "title": "Electronics Flea Market",
        "url": "/electronics-flea-market/",
        "excerpt": "On the second weekend of Mar-Sep, the Electronics Flea Market runs in the carpark of Fry’s Electronics, Sunnyvale CA. I...",
        "teaser":
          
            "/assets/images/2019/03/IMG_0335.jpg"
          
      },
    
      
      {
        "title": "Blue Day in Sydney",
        "url": "/blue-day-in-sydney/",
        "excerpt": "\n\n",
        "teaser":
          
            "/assets/images/2019/04/7723722910698069406_IMG_0381.jpg"
          
      },
    
      
      {
        "title": "MacOS Install",
        "url": "/macos-install/",
        "excerpt": "It seemed like a good idea to remove all the accumulated rubbish on my MacBook Pro and install what I...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Yosemite 2019",
        "url": "/yosemite-2019/",
        "excerpt": "Went for a two day trip to Yosemite National Park, staying at Yosemite Cedar Lodge. It is such a magnificent...",
        "teaser":
          
            "/assets/images/2019/04/IMG_0604.jpg"
          
      },
    
      
      {
        "title": "Mako on Fly - San Diego 2019",
        "url": "/mako-on-fly-san-diego-2019/",
        "excerpt": "The mako shark is one of the fastest and most ferocious fish in the sea. They can swim up to...",
        "teaser":
          
            "/assets/images/2019/05/IMG_0832.jpg"
          
      },
    
      
      {
        "title": "Dropbox - don't give full access to your machine",
        "url": "/dropbox-dont-give-full-access-to-your-machine/",
        "excerpt": "Dropbox is a widely used program but they have a wide-open back door which allows them to circumvent Apple’s (good)...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Academic Genealogy",
        "url": "/academic-genealogy/",
        "excerpt": "I visited my PhD supervisor, Dr Marwan Anwar Jabri last week in San Francisco. He left academia to found Dilithium...",
        "teaser":
          
            "/assets/images/2019/05/6700082371262977270_IMG_0887.jpg"
          
      },
    
      
      {
        "title": "Sea lion, Santa Cruz Wharf",
        "url": "/sea-lion-santa-cruz-wharf/",
        "excerpt": "\n\n",
        "teaser":
          
            "/assets/images/2019/05/DSCF6081.jpg"
          
      },
    
      
      {
        "title": "Lake Tahoe 2019",
        "url": "/lake-tahoe-2019/",
        "excerpt": "\n\nSnaps from our trip to Lake Tahoe\n\n\n\n\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n\n\n",
        "teaser":
          
            "/assets/images/2019/06/DSCF6146.jpg"
          
      },
    
      
      {
        "title": "Ten Lessons I wish I had been Taught - Gian-Carlo Rota",
        "url": "/ten-lessons-i-wish-i-had-been-taught-gian-carlo-rota/",
        "excerpt": "Interesting talk by the late MIT mathematician and philosopher https://www.ams.org/notices/199701/comm-rota.pdf Ten Lessons I wish I had been Taught Gian-Carlo Rota...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});

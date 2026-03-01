// EMS Fellowship Programs Data — Top 25 Programs
// Scores: 1-5 scale per dimension
// Tiers: "top", "mid", "lower" (relative to THIS applicant's profile, not program quality)

const PROGRAMS = [
  // === TOP TIER ===
  {
    rank: 1,
    name: "University of Cincinnati",
    city: "Cincinnati",
    state: "OH",
    tier: "top",
    positions: 3,
    acgme: true,
    scores: {
      system_qi: 5,
      ops_autonomy: 5,
      cct_aviation: 5,
      austere_disaster: 3,
      lifestyle: 3,
      economic: 4
    },
    tags: ["Elite System", "Air Medical", "CCT", "Research", "Field Ops"],
    overview: "The UC EMS Fellowship, one of the oldest in the country (established 1996), was among the first programs to receive ACGME accreditation in 2013. It sits within the nation's oldest Emergency Medicine residency training program, providing a deep academic ecosystem. The program accepts 3 fellows per year and participates in the NRMP Emergency Medicine Subspecialties Match.",
    pd: {
      name: "B. Woods Curry, MD, FAEMS",
      title: "EMS Fellowship Director",
      email: "currybs@uc.edu",
      phone: "513-585-8962",
      coordinator: "Vicki D. Conneighton (conneivd@uc.edu)"
    },
    strengths: [
      "Major NIH-funded prehospital research site with national contributions to resuscitation, trauma, and stroke research",
      "Air Care & Mobile Care is one of the country's most sophisticated critical care transport programs, offering elite HEMS/CCT exposure",
      "Diverse EMS system exposure spanning urban, suburban, and rural environments across the greater Cincinnati region",
      "Total annual fellow compensation exceeds $140,000 (PGY-4/5 scale plus community hospital moonlighting)",
      "Three positions per year create a built-in cohort for peer learning"
    ],
    weaknesses: [
      "Cincinnati's Midwest climate and geography do not align with warm-weather/outdoor preferences",
      "Less emphasis on wilderness, austere, or tactical medicine compared to Western programs",
      "The city, while affordable and livable, lacks the outdoor recreation profile of Southwest or Mountain West locations"
    ],
    unique: "Housed within the oldest EM department in the country, fellows benefit from a mature research infrastructure and a deep alumni network. Air Care & Mobile Care provides critical care transport experience that few programs can match.",
    hems_cct: "Air Care & Mobile Care"
  },
  {
    rank: 2,
    name: "University of Arizona",
    city: "Tucson",
    state: "AZ",
    tier: "top",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 5,
      lifestyle: 5,
      economic: 5
    },
    tags: ["Desert/Border", "Austere/Wilderness", "Sun/Outdoors", "Affordable"],
    overview: "Tucson's desert and border environment creates distinctive prehospital challenges including heat emergencies, wilderness/desert rescues, and cross-border medicine. Banner University Medical Center is a Level I trauma center with high-acuity prehospital volume. The program accepts 1 fellow per year and is ACGME-accredited.",
    pd: {
      name: "Joshua B. Gaither, MD",
      title: "Professor, University of Arizona College of Medicine; Medical Director, Tucson Fire Department; Chief, Division of EMS",
      phone: "520-626-5536",
      bio: "Board certified in both Emergency Medicine and EMS, trained at Yale (residency) and Denver Health (EMS fellowship), with active research in traumatic brain injury and cardiac arrest. Developer of the ADPR\u2122 and AHLS\u2122 continuing education courses. Chairs the Arizona DHS Trauma and EMS Performance Improvement Committee."
    },
    strengths: [
      "Outstanding Southwest lifestyle alignment: desert outdoor recreation, affordable cost of living",
      "Unique clinical exposures not found elsewhere: desert rescue, heat-related illness, border medicine",
      "Dr. Gaither is a nationally recognized leader and developer of the ADPR\u2122 and AHLS\u2122 continuing education courses",
      "State-level involvement: Gaither chairs the Arizona DHS Trauma and EMS Performance Improvement Committee",
      "Proximity to Phoenix (Creighton) may offer networking advantages during the application process"
    ],
    weaknesses: [
      "Only 1 position per year limits acceptance odds",
      "Tucson is smaller than other program cities, with fewer large-system EMS complexities",
      "HEMS/CCT exposure may be less robust than programs with dedicated aeromedical partners"
    ],
    unique: "The combination of desert/wilderness medicine, border health challenges, and close proximity to a current Creighton Phoenix resident's network make this a natural lifestyle and career fit. Dr. Gaither's state-level leadership positions provide fellows with unique policy exposure.",
    hems_cct: "Limited"
  },
  {
    rank: 3,
    name: "UT Health San Antonio",
    city: "San Antonio",
    state: "TX",
    tier: "top",
    positions: 3,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 5,
      lifestyle: 4,
      economic: 5
    },
    tags: ["Military/TEMS", "Mass Casualty", "Warm Climate", "Affordable"],
    overview: "San Antonio's unique military-civilian interface\u2014home to Brooke Army Medical Center and Joint Base San Antonio (JBSA), the largest U.S. military base complex\u2014creates exceptional exposure to TEMS, mass casualty, and high-acuity trauma EMS. The program accepts 3 fellows per year and is ACGME-accredited.",
    pd: {
      name: "Craig Cooley, MD, MPH, EMT-P, FACEP, FAEMS",
      title: "Program Director; Course Director, NAEMSP EMS Fellowship Faculty Ranger School"
    },
    strengths: [
      "Unmatched military-EMS integration: Brooke AMC, JBSA, TEMS, and mass casualty training",
      "3 positions per year offers better odds and cohort learning",
      "Strong South Texas EMS environment with urban, suburban, and border medicine dimensions",
      "Affordable cost of living with warm-weather, culture-rich lifestyle",
      "Dr. Cooley is nationally prominent in fellowship education leadership"
    ],
    weaknesses: [
      "San Antonio summers are intensely hot and humid (different from dry Southwest heat)",
      "Less wilderness/mountain terrain compared to programs in the Mountain West",
      "Research infrastructure, while growing, may not match top-tier research-focused programs"
    ],
    unique: "For anyone interested in tactical EMS, military medicine, or operational environments, this is among the top 2\u20133 programs nationally. The military-civilian interface is truly unique and cannot be replicated elsewhere.",
    hems_cct: "Limited"
  },
  {
    rank: 4,
    name: "Carolinas Medical Center",
    city: "Charlotte",
    state: "NC",
    tier: "top",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 5,
      austere_disaster: 3,
      lifestyle: 4,
      economic: 4
    },
    tags: ["Air Medical", "CCT", "Level I Trauma", "Urban/Mountains"],
    overview: "Atrium Health Carolinas Medical Center is a major academic Level I trauma center in a rapidly growing urban environment. Strong Mecklenburg EMS system and regional HEMS via Carolinas MedCenter Air round out the training. The program accepts 2 fellows per year.",
    pd: {
      name: "Tyler Constantine",
      title: "Program Director"
    },
    strengths: [
      "Charlotte's rapid growth creates a dynamic EMS environment with urban complexity",
      "Level I trauma center with high-acuity prehospital volume",
      "Carolinas MedCenter Air provides HEMS exposure",
      "Appalachian mountain terrain accessible within 2 hours for wilderness medicine interest",
      "Southeast culture with moderate cost of living"
    ],
    weaknesses: [
      "Lacks the military/tactical niche of San Antonio or the wilderness depth of Western programs",
      "Charlotte's political and cultural environment is moderate-to-progressive",
      "Less national research prominence compared to Cincinnati, UPMC, or Hopkins"
    ],
    unique: "The Charlotte region offers a blend of urban density and mountain access that is hard to find. The growing metro area means expanding EMS complexity and leadership opportunities.",
    hems_cct: "MedCenter Air"
  },
  {
    rank: 5,
    name: "UPMC",
    city: "Pittsburgh",
    state: "PA",
    tier: "top",
    positions: 3,
    acgme: true,
    scores: {
      system_qi: 5,
      ops_autonomy: 5,
      cct_aviation: 5,
      austere_disaster: 3,
      lifestyle: 3,
      economic: 4
    },
    tags: ["Research Legacy", "Air Medical", "STAT MedEvac", "Elite System"],
    overview: "One of the oldest and most research-prolific EMS fellowship programs in the country, founded in 1990. Partners include STAT MedEvac (rotor-wing), UPMC Prehospital Care, and the City of Pittsburgh Bureau of EMS. The program now accepts 3 fellows per year.",
    pd: {
      name: "Christian Martin-Gill, MD, MPH",
      title: "Program Director",
      coordinator: "Janna Nelson (gribowiczjm@upmc.edu)",
      deadline: "August 15; interviews in September\u2013October"
    },
    strengths: [
      "Legendary research output: fellows have historically won major research grants and presented at national meetings",
      "STAT MedEvac provides outstanding rotor-wing aeromedical exposure",
      "38+ fellows trained since 1990; deep alumni network in national EMS leadership",
      "Multiple EMS partners: Pittsburgh EMS, Fire, Police, UPMC Prehospital",
      "3 positions per year"
    ],
    weaknesses: [
      "Pittsburgh winters are harsh with gray, overcast weather",
      "City lifestyle does not align with warm-weather/outdoor preferences",
      "Cost of living is affordable, but outdoor recreation is limited compared to Western programs"
    ],
    unique: "The research pedigree at UPMC is arguably unmatched in EMS fellowship training. For applicants prioritizing academic EMS careers and research productivity, this is a premier choice.",
    hems_cct: "STAT MedEvac"
  },
  {
    rank: 6,
    name: "Vanderbilt",
    city: "Nashville",
    state: "TN",
    tier: "top",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 5,
      austere_disaster: 3,
      lifestyle: 4,
      economic: 4
    },
    tags: ["LifeFlight", "Event Medicine", "Nashville Culture", "HEMS"],
    overview: "Vanderbilt offers exceptional HEMS access via Vanderbilt LifeFlight, one of the premier aeromedical services in the country. Nashville Fire Department medical direction, QI meetings, and protocol development provide rich systems-building experience. The program accepts 1 fellow per year.",
    pd: {
      name: "Jared McKinney, MD",
      title: "Program Director",
      website: "emergencymedicine.vumc.org/fellowships/ems"
    },
    strengths: [
      "Vanderbilt LifeFlight: premier aeromedical service with opportunities to progress from observer to full crew member",
      "Nashville Fire Department medical direction provides longitudinal systems-building experience with QI meetings and protocol development",
      "Outstanding event medicine: CMA Fest, NASCAR Cup Series at Nashville Superspeedway, Music City Grand Prix, Bridgestone Arena, Iroquois Steeplechase",
      "Nashville's vibrant culture, music scene, and moderate cost of living"
    ],
    weaknesses: [
      "Only 1 position per year limits acceptance probability",
      "Less wilderness/austere medicine emphasis compared to Western programs",
      "Southeast humidity may be a consideration for those preferring dry climates"
    ],
    unique: "The event medicine portfolio is among the broadest in the country\u2014from NASCAR to CMA Fest to NHL games. The combination of LifeFlight aeromedical experience and Nashville Fire Department medical direction creates a well-rounded fellowship.",
    hems_cct: "Vanderbilt LifeFlight"
  },
  {
    rank: 7,
    name: "UTHealth Houston",
    city: "Houston",
    state: "TX",
    tier: "top",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 5,
      austere_disaster: 3,
      lifestyle: 3,
      economic: 4
    },
    tags: ["System Scale", "Life Flight", "Diverse Metro", "Texas Medical Center"],
    overview: "Houston Fire Department EMS is the largest fire-based EMS system in Texas, serving 2M+ residents. Memorial Hermann Life Flight provides outstanding aeromedical exposure, and the Texas Medical Center\u2014the world's largest medical complex\u2014offers tremendous research and academic resources. The program accepts 2 fellows per year.",
    pd: {
      name: "Kevin Schulz, MD, FAEMS, FACEP",
      title: "Program Director"
    },
    strengths: [
      "Massive, complex EMS system serving one of the most diverse metropolitan areas in the U.S.",
      "Texas Medical Center offers unparalleled research infrastructure",
      "Memorial Hermann Life Flight: nationally recognized aeromedical program",
      "Warm climate, affordable cost of living, and diverse population",
      "2 positions per year"
    ],
    weaknesses: [
      "Houston's flat terrain and Gulf Coast humidity offer no mountain/wilderness exposure",
      "Sprawling urban layout can make commuting challenging",
      "Less tactical/military niche compared to San Antonio"
    ],
    unique: "The sheer scale and diversity of Houston's EMS system, combined with the world's largest medical complex, create unique opportunities for systems-level research and multi-agency coordination.",
    hems_cct: "Memorial Hermann Life Flight"
  },
  {
    rank: 8,
    name: "UT Southwestern",
    city: "Dallas",
    state: "TX",
    tier: "top",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 3,
      lifestyle: 4,
      economic: 4
    },
    tags: ["Research Culture", "Nobel Legacy", "Multi-Agency", "Warm Climate"],
    overview: "UTSW is one of the top academic medical centers in the U.S. with exceptional research infrastructure (6 Nobel Laureates). The Dallas/Fort Worth metro area of 7.8M people creates complex multi-agency EMS environments. The program accepts 2 fellows per year.",
    pd: {
      name: "Kathy J. Rinnert, MD, MPH, FACEP",
      title: "Program Director",
      coordinator: "Connie Chow (connie.chow@utsouthwestern.edu)",
      deadline: "October 1 (later than most programs). Application opens June; virtual interviews mid-August through October; Match Day November 8."
    },
    strengths: [
      "World-class research culture with 6 Nobel Laureates and exceptional funded research",
      "Enormous metro area creates multi-agency EMS complexity",
      "Later application deadline (October 1) allows additional preparation time",
      "Warm climate, major sports and cultural scene, affordable cost of living",
      "2 positions per year"
    ],
    weaknesses: [
      "Dallas/Fort Worth terrain is flat with limited wilderness/outdoor recreation",
      "Less military/tactical emphasis than San Antonio",
      "Hot, humid summers"
    ],
    unique: "The October 1 application deadline is later than most programs, allowing more time to strengthen applications. The Nobel-caliber research environment is unmatched for those prioritizing academic EMS research.",
    hems_cct: "Limited"
  },
  {
    rank: 9,
    name: "University of New Mexico",
    city: "Albuquerque",
    state: "NM",
    tier: "top",
    positions: 3,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 5,
      cct_aviation: 3,
      austere_disaster: 5,
      lifestyle: 5,
      economic: 5
    },
    tags: ["Wilderness/Tribal", "Austere/Rural", "Southwest", "3 Positions"],
    overview: "Exceptional for wilderness, rural, and austere environment EMS. New Mexico's vast geography\u2014mountains, desert, tribal lands\u2014creates uniquely complex prehospital scenarios. The program accepts 3 fellows per year, one of the largest fellowship cohorts in the country.",
    pd: {
      name: "Dorothy Habrat, DO",
      title: "Program Director"
    },
    strengths: [
      "Unmatched rural, tribal, desert, and mountain terrain exposure",
      "3 positions per year provides the best odds of any top-tier program",
      "Southwest culture, outdoor access, affordable cost of living",
      "Strong international and rural medicine ties align with global/disaster interests",
      "ACGME-accredited with NRMP Match participation"
    ],
    weaknesses: [
      "Albuquerque's metro area is smaller than other program cities, limiting urban complexity",
      "Research infrastructure may be less robust than Cincinnati, UPMC, or Hopkins",
      "Albuquerque has crime and safety concerns in certain areas"
    ],
    unique: "For austere/wilderness EMS interest, UNM is arguably the single best program in the country. Tribal land medicine and rural rescue scenarios are unique to this geography.",
    hems_cct: "Limited"
  },
  {
    rank: 10,
    name: "University of Utah",
    city: "Salt Lake City",
    state: "UT",
    tier: "top",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 5,
      lifestyle: 4,
      economic: 3
    },
    tags: ["Mountain/Wilderness", "4-State Trauma", "Ski/Outdoors", "TEMS"],
    overview: "Salt Lake City's unique position as a major urban center surrounded by world-class wilderness makes this fellowship exceptional for austere, mountain, and wilderness EMS exposure. University Hospital is a Level I trauma center serving Utah, Nevada, Idaho, and Wyoming. The program accepts 2 fellows per year.",
    pd: {
      name: "Jason R. Pickett, MD",
      title: "Program Director (formerly UT-Austin, bringing deep TEMS and military medicine experience)"
    },
    strengths: [
      "World-class outdoor access: 5 ski resorts within 30 minutes, Wasatch Range, Canyonlands, multiple national parks",
      "Level I trauma center serving 4-state region",
      "New PD Jason Pickett brings tactical and military medicine expertise",
      "Mountain rescue, ski patrol medicine, and wilderness EMS exposure",
      "2 positions per year"
    ],
    weaknesses: [
      "Salt Lake City's cultural environment (strong LDS influence) may not suit everyone",
      "Cold, snowy winters (a pro for ski enthusiasts but not warm-weather seekers)",
      "Moderate cost of living but rising rapidly"
    ],
    unique: "The wilderness-to-urban ratio is nearly unmatched. Few cities in America offer Level I trauma center training with world-class ski resorts, canyoneering, and national parks within an hour's drive.",
    hems_cct: "Limited"
  },

  // === MID TIER ===
  {
    rank: 11,
    name: "Denver Health",
    city: "Denver",
    state: "CO",
    tier: "mid",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 5,
      cct_aviation: 4,
      austere_disaster: 4,
      lifestyle: 4,
      economic: 3
    },
    tags: ["Field Immersion", "CCT", "Rocky Mountain", "Paramedic Training"],
    overview: "Denver Health's EMS and Disaster Fellowship is a one-year ACGME-accredited program affiliated with Denver Health Medical Center and the Denver Health Paramedic Division (DHPD). DHPD is a hospital-based third-service system providing 911 response for the city and county of Denver, running over 100,000 calls and transporting over 80,000 patients per year with 200 medics. The program accepts 2 fellows per year.",
    pd: {
      name: "Lara D. Rappaport, MD, MPH",
      title: "Program Director",
      website: "denverem.org/ems-dh"
    },
    strengths: [
      "Unique paramedic field training program: fellows complete the same field training as new Denver Health paramedics, gaining deep understanding of system operations",
      "\"Tuesday Meetings\" structure integrates didactic sessions, Clinical Performance review, case/data review, and command staff interaction",
      "Rocky Mountain access: skiing, hiking, climbing, mountain rescue, high-altitude medicine",
      "Denver Health is the only Level I trauma center in Colorado (adult) and a safety-net hospital",
      "Event medicine: Broncos games, local festivals, concerts, dignitary visits"
    ],
    weaknesses: [
      "Denver's cost of living has risen significantly in recent years",
      "Cold winters, though much sunnier than Pittsburgh or the Midwest",
      "Competitive program in a desirable location"
    ],
    unique: "The paramedic field training immersion is truly distinctive; fellows experience the system exactly as new paramedics do, building credibility and operational understanding from the ground up. The integration with command staff on Tuesdays provides unparalleled exposure to system leadership and decision-making.",
    hems_cct: "CCT"
  },
  {
    rank: 12,
    name: "Wake Forest",
    city: "Winston-Salem",
    state: "NC",
    tier: "mid",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 3,
      lifestyle: 4,
      economic: 4
    },
    tags: ["Academic", "Blue Ridge Mountains", "Level I Trauma", "Moderate COL"],
    overview: "Wake Forest Baptist's EMS fellowship benefits from a strong academic EM department known for research and clinical excellence. Forsyth County EMS and surrounding regional agencies provide diverse EMS exposure. The program accepts 2 fellows per year.",
    pd: {
      name: "Robert D. Nelson, MD",
      title: "Program Director"
    },
    strengths: [
      "Atrium Health Wake Forest Baptist \u2014 Level I trauma center",
      "Blue Ridge Mountains within 1 hour for wilderness access",
      "Strong academic research environment",
      "Southeast lifestyle with moderate cost of living"
    ],
    weaknesses: [
      "Winston-Salem is a smaller city with limited urban EMS complexity",
      "Less national prominence compared to programs like Hopkins, UPMC, or UW",
      "Limited HEMS/CCT details publicly available",
      "No warm-weather/Southwest alignment"
    ],
    unique: "The proximity to the Blue Ridge Mountains creates a unique blend of academic training and Appalachian wilderness access.",
    hems_cct: "Limited"
  },
  {
    rank: 13,
    name: "Johns Hopkins",
    city: "Baltimore",
    state: "MD",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 5,
      ops_autonomy: 4,
      cct_aviation: 5,
      austere_disaster: 4,
      lifestyle: 3,
      economic: 3
    },
    tags: ["Global Health", "Lifeline CCT", "Bloomberg SPH", "MSP Aviation"],
    overview: "World-class academic EMS fellowship at one of medicine's most prestigious institutions. The Bloomberg School of Public Health and global health networks provide unparalleled research and disaster medicine pathways. The program accepts 1 fellow per year.",
    pd: {
      name: "Asa Margolis, DO, MPH, MS",
      title: "Assistant Professor of Emergency Medicine; Medical Director, Johns Hopkins Lifeline Critical Care Transport Program; Associate Medical Director, Howard County Department of Fire and Rescue Services",
      phone: "410-955-5000",
      bio: "Board certified in both Emergency Medicine and EMS, with active research in prehospital trauma, cardiac arrest, and whole blood transfusion by paramedics."
    },
    strengths: [
      "Johns Hopkins name recognition opens doors globally",
      "Bloomberg School of Public Health access for MPH or research collaboration",
      "Multi-system EMS exposure: Baltimore City Fire/EMS, Howard County Fire/Rescue, Johns Hopkins Lifeline CCT (ground and air), Maryland State Police Aviation Command",
      "Statewide EMS system exposure through Maryland Institute for Emergency Medical Services Systems (MIEMSS)",
      "Center for Law Enforcement Medicine provides tactical medicine exposure"
    ],
    weaknesses: [
      "Only 1 position per year \u2014 extremely competitive",
      "Baltimore has significant urban challenges (crime, poverty)",
      "High cost of living for the Northeast corridor",
      "Climate is humid and does not align with Southwest/outdoor preferences"
    ],
    unique: "The breadth of the training \u2014 from fire-based EMS to critical care transport to state police aviation to statewide EMS oversight \u2014 is exceptionally well-rounded. The Bloomberg School collaboration creates opportunities for advanced degrees.",
    hems_cct: "Lifeline CCT + MSP Aviation"
  },
  {
    rank: 14,
    name: "Yale",
    city: "New Haven",
    state: "CT",
    tier: "mid",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 3,
      cct_aviation: 3,
      austere_disaster: 3,
      lifestyle: 2,
      economic: 2
    },
    tags: ["Research/Global", "Ivy League", "Public Health", "Disaster Medicine"],
    overview: "Yale's EMS fellowship combines the academic power of one of the world's top research universities with New Haven's diverse urban EMS environment. Strong disaster medicine and research opportunities backed by Yale's public health and global health infrastructure. The program accepts 2 fellows per year.",
    pd: {
      name: "Kate Couturier, MD, MPH",
      title: "Program Director"
    },
    strengths: [
      "Yale School of Public Health and global health infrastructure for collaboration",
      "Proximity to New York City metro area adds system complexity",
      "2 positions per year",
      "Strong research opportunities at an Ivy League institution"
    ],
    weaknesses: [
      "New Haven has urban safety challenges",
      "Very high cost of living in the Northeast",
      "Cold winters, no Southwest or outdoor lifestyle alignment",
      "Less publicized HEMS/CCT partnerships"
    ],
    unique: "Yale's global health infrastructure makes this an excellent choice for those interested in international EMS development and disaster medicine research.",
    hems_cct: "Limited"
  },
  {
    rank: 15,
    name: "University of Washington",
    city: "Seattle",
    state: "WA",
    tier: "mid",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 5,
      ops_autonomy: 5,
      cct_aviation: 5,
      austere_disaster: 4,
      lifestyle: 3,
      economic: 2
    },
    tags: ["EMS Gold Standard", "Medic One", "Airlift Northwest", "Cardiac Arrest"],
    overview: "Widely regarded as the gold standard for EMS fellowships, UW offers unmatched HEMS exposure via Airlift Northwest across Alaska, Washington, Montana, and Idaho. Home to the legendary King County Medic One\u2014the birthplace of modern EMS and the world's best cardiac arrest survival rates (~55%). Harborview Medical Center is the only Level I trauma/burn center serving AK, MT, WA, and ID. The program accepts 2 fellows per year (increased from 1).",
    pd: {
      name: "Andrew McCoy, MD, MS, FAEMS",
      title: "Associate Professor",
      email: "mccoya2@uw.edu",
      coordinator: "Alexis Rush, MCM (rusha@uw.edu)",
      deadline: "August 15. Interviews: In-person in Fall (historically late September/October). Washington and Alaska medical licenses required before starting. No visa sponsorship available."
    },
    strengths: [
      "King County Medic One: 55% cardiac arrest survival rate\u2014the birthplace of modern EMS",
      "Airlift Northwest: 5 bases covering WA and SE Alaska for rotor-wing aeromedical experience",
      "Interdisciplinary faculty from EM, Cardiology, Internal Medicine, Critical Care",
      "Access to the Cobb Cardiac Arrest Registry (every Seattle cardiac arrest since 1970) and CEEMS registry",
      "Harborview Level I trauma/burn center serving 4-state catchment area",
      "Seattle Fire Department + King County Medic One partnerships",
      "Pacific Northwest outdoor access"
    ],
    weaknesses: [
      "Seattle's cost of living is very high",
      "Pacific Northwest weather is gray and rainy much of the year",
      "Only recently expanded to 2 positions; historically extremely competitive",
      "Washington and Alaska medical licenses required before starting",
      "No visa sponsorship available"
    ],
    unique: "The King County EMS system is studied worldwide as the model for cardiac arrest resuscitation. Access to the Cobb Cardiac Arrest Registry and decades of meticulously collected data creates unparalleled research opportunities in resuscitation science. The Airlift Northwest experience across Alaska and the Pacific Northwest provides austere/wilderness aeromedical exposure.",
    hems_cct: "Airlift Northwest"
  },
  {
    rank: 16,
    name: "UT Austin Dell Med",
    city: "Austin",
    state: "TX",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 3,
      lifestyle: 5,
      economic: 3
    },
    tags: ["Data/QI", "Third-Service Model", "TEMS", "Tech Hub"],
    overview: "One of the most innovative EMS programs in the country, embedded in Austin-Travis County EMS\u2014a nationally recognized third-service system with strong data, QI infrastructure, and progressive clinical protocols. The program accepts 1 fellow per year.",
    pd: {
      name: "Mark E. Escott, MD, MPH, FACEP, FAEMS, NRP",
      title: "Program Director"
    },
    strengths: [
      "Austin-Travis County EMS is a model third-service system known nationally for data-driven protocols",
      "Strong TEMS/tactical medicine component",
      "Austin's tech hub culture creates opportunities for health tech and data-driven EMS innovation",
      "Vibrant outdoor culture, warm climate, and progressive city environment",
      "Dr. Escott is a nationally recognized figure in EMS leadership"
    ],
    weaknesses: [
      "Only 1 position per year",
      "Newer program (Dell Med opened 2016), still building its fellowship reputation",
      "Austin cost of living has risen dramatically",
      "Less HEMS/CCT emphasis compared to programs with dedicated aeromedical partners"
    ],
    unique: "The data-driven, QI-focused culture of Austin-Travis County EMS is ideal for a tech/data-inclined physician. The third-service model provides a different perspective than fire-based EMS systems.",
    hems_cct: "Limited"
  },
  {
    rank: 17,
    name: "University of Wisconsin",
    city: "Madison",
    state: "WI",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 4,
      lifestyle: 2,
      economic: 4
    },
    tags: ["FEMA/TEMS", "System Diversity", "7-Agency Consortium", "Fort McCoy"],
    overview: "Wisconsin's fellowship is built around the UW ALS Consortium\u20147 agencies ranging from Madison's large fire-based EMS to rural volunteer services\u2014offering remarkable system diversity. The program accepts 1 fellow per year.",
    pd: {
      name: "Michael Mancera, MD",
      title: "Program Director"
    },
    strengths: [
      "UW ALS Consortium: 7 agencies from urban to rural, fire-based to third service \u2014 outstanding system diversity",
      "Tactical EMS training at Fort McCoy (U.S. Army Reserve)",
      "FEMA Center for Domestic Preparedness HERT course + instructor certification",
      "Dedicated QI and patient safety research group",
      "Nationally ranked for physician quality of life"
    ],
    weaknesses: [
      "Only 1 position per year",
      "Madison winters are very cold",
      "No Southwest/warm-weather lifestyle alignment",
      "Limited HEMS exposure details publicly available"
    ],
    unique: "The FEMA HERT instructor certification and Fort McCoy tactical training are distinctive offerings not found at most programs. The 7-agency consortium provides unmatched system diversity within a single fellowship.",
    hems_cct: "Limited"
  },
  {
    rank: 18,
    name: "USC / LAFD",
    city: "Los Angeles",
    state: "CA",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 4,
      lifestyle: 5,
      economic: 1
    },
    tags: ["Urban Scale/MCI", "LAFD", "4M+ Population", "SoCal Lifestyle"],
    overview: "Embedded with the Los Angeles Fire Department\u2014one of the largest and most complex urban EMS systems in the world, serving 4 million people. The program accepts 1 fellow per year through the Keck School of Medicine at USC.",
    pd: {
      name: "Marc Eckstein, MD, MPH, FACEP, FAEMS",
      title: "Program Director"
    },
    strengths: [
      "LAFD serves 4M+ residents: unparalleled urban EMS scale and complexity",
      "Mass casualty events, earthquake preparedness, TEMS, urban operations",
      "Academic home at USC Keck School of Medicine \u2014 strong research support",
      "Southern California lifestyle with year-round warm weather"
    ],
    weaknesses: [
      "Only 1 position per year \u2014 extremely competitive",
      "Los Angeles cost of living is among the highest in the nation",
      "Less wilderness/austere exposure compared to programs in the Mountain West",
      "Traffic and urban congestion challenges"
    ],
    unique: "The LAFD is one of the most operationally complex fire-based EMS systems in the world. For large-system urban EMS medical direction experience, few programs can compete.",
    hems_cct: "Limited"
  },
  {
    rank: 19,
    name: "UCSD",
    city: "San Diego",
    state: "CA",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 4,
      lifestyle: 5,
      economic: 2
    },
    tags: ["Border/Disaster", "Combined EMS+Disaster", "Maritime", "SoCal"],
    overview: "A premier West Coast EMS fellowship combined with Disaster Medicine. Strong ties to SDFD and diverse prehospital systems across urban, suburban, and coastal environments. The program accepts 1 fellow per year.",
    pd: {
      name: "Erin Noste, MD",
      title: "Program Director",
      coordinator: "Mae Malong (mmalong@health.ucsd.edu)",
      deadline: "Typically late August. Requires: CV, personal statement, 3 letters of recommendation (one from residency PD), NRMP registration."
    },
    strengths: [
      "Combined EMS and Disaster Medicine fellowship",
      "Strong NIH-funded EM research environment",
      "Southern California coastal lifestyle: beaches, mountains, desert within easy reach",
      "Border medicine, maritime EMS, and MCI exposure",
      "Year-round warm weather"
    ],
    weaknesses: [
      "Only 1 position per year",
      "San Diego cost of living is very high",
      "Less HEMS exposure compared to programs with dedicated aeromedical partners",
      "Smaller city EMS system compared to LA or Houston"
    ],
    unique: "The combined EMS/Disaster Medicine track and border/maritime medicine exposures make UCSD particularly interesting for those drawn to disaster and austere environments. The lifestyle alignment with warm weather and outdoor access is among the best in the country.",
    hems_cct: "Limited"
  },
  {
    rank: 20,
    name: "UNC Chapel Hill",
    city: "Chapel Hill",
    state: "NC",
    tier: "mid",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 4,
      austere_disaster: 4,
      lifestyle: 3,
      economic: 4
    },
    tags: ["QI Leadership", "Carolina AirCare", "TEMS", "Wilderness", "Dual System"],
    overview: "UNC's EMS fellowship includes exposure to wilderness, USAR, TEMS, global health, and pediatric EMS, with faculty who are leaders in these niches. Located in the Research Triangle\u2014one of the most vibrant academic medical corridors in the Southeast. The program accepts 2 fellows per year.",
    pd: {
      name: "Joseph Grover, MD, FACEP, FAEMS",
      title: "Clinical Associate Professor, Director of Quality, Chief Medical Officer for Orange County Emergency Services; Course Director, NAEMSP EMS Fellow Quality and Safety Course",
      email: "joseph_grover@med.unc.edu",
      phone: "(919) 966-6442",
      bio: "National leader in EMS quality improvement. Associate Director: Jos\u00e9 Caba\u00f1as, MD, MPH."
    },
    strengths: [
      "Dr. Grover is a national leader in EMS quality improvement, serving as Course Director for the NAEMSP EMS Fellow Quality and Safety Course",
      "Dual EMS system medical direction: Orange County (urban/rural mix) and Wake County/Raleigh (urban/suburban)",
      "Carolina AirCare: busy ground and aeromedical transport (rotor and fixed wing)",
      "TEMS via NC State Highway Patrol medical direction",
      "Wilderness EMS through NC State Parks System",
      "Gillings School of Global Public Health collaboration potential"
    ],
    weaknesses: [
      "Research Triangle is academically rich but not a Southwest/outdoor lifestyle",
      "Chapel Hill is a small college town; limited urban EMS complexity",
      "Moderate-to-hot, humid climate"
    ],
    unique: "The breadth of faculty niches (wilderness, USAR, TEMS, MIH, state EMS direction) and the quality improvement focus under Dr. Grover's national leadership make UNC distinctive. The dual-system medical direction provides exposure to both rural and urban EMS environments in a single fellowship.",
    hems_cct: "Carolina AirCare"
  },
  {
    rank: 21,
    name: "Military EMS & Disaster Medicine",
    city: "San Antonio",
    state: "TX",
    tier: "mid",
    positions: 3,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 5,
      cct_aviation: 4,
      austere_disaster: 5,
      lifestyle: 4,
      economic: 5
    },
    tags: ["TCCC/Operational", "Military", "Brooke AMC", "Disaster Medicine"],
    overview: "This program is associated with the military medical community in San Antonio at Brooke Army Medical Center. Active-duty military status or specific service commitments may be required \u2014 eligibility must be verified directly before applying.",
    pd: {
      name: "MAJ (Dr.) Rachel Ely",
      title: "Program Director"
    },
    strengths: [
      "Extraordinary exposure to TCCC, TEMS, disaster medicine, and operational medicine at the highest level",
      "One of the most significant military medical hubs in the country",
      "3 positions per year"
    ],
    weaknesses: [
      "May require active-duty military status \u2014 not accessible to all applicants",
      "Limited applicability if not currently affiliated with the military"
    ],
    unique: "If eligible, this represents the pinnacle of military operational EMS training. Verify eligibility before investing time in the application process.",
    hems_cct: "Military"
  },
  {
    rank: 22,
    name: "Regions Hospital",
    city: "St. Paul",
    state: "MN",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 3,
      lifestyle: 2,
      economic: 4
    },
    tags: ["QI/Leadership Alumni", "Level I Trauma", "Twin Cities", "Research Culture"],
    overview: "A highly regarded academic EMS fellowship based at Regions Hospital, a Level I trauma center in the Twin Cities. The program accepts 1 fellow per year.",
    pd: {
      name: "Aaron Burnett, MD",
      title: "Program Director"
    },
    strengths: [
      "Strong QI emphasis and research culture",
      "Fellowship alumni in national EMS leadership positions",
      "Level I trauma center at Regions Hospital",
      "Twin Cities offer affordable living with strong cultural amenities"
    ],
    weaknesses: [
      "Only 1 position per year",
      "Minnesota winters are extremely cold",
      "No warm-weather or outdoor lifestyle alignment",
      "Less HEMS/wilderness emphasis"
    ],
    unique: "Regions Hospital is known nationally for producing EMS leaders. The QI/research focus and faculty strength make this a strong choice for those prioritizing academic EMS careers.",
    hems_cct: "Limited"
  },
  {
    rank: 23,
    name: "Harbor-UCLA",
    city: "Torrance",
    state: "CA",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 4,
      cct_aviation: 3,
      austere_disaster: 5,
      lifestyle: 5,
      economic: 2
    },
    tags: ["Disaster/USAR", "LA County Scale", "10M+ Population", "Warm Weather"],
    overview: "Harbor-UCLA combines EMS and Disaster Medicine in its fellowship within the LA County EMS system, which serves 10 million people\u2014one of the most complex medical oversight environments in the world. The program accepts 1 fellow per year with an option for a 2-year fellowship with an advanced degree.",
    pd: {
      name: "Shira Schlesinger, MD, MPH, FACEP, FAEMS",
      title: "EMS Fellowship Director",
      bio: "Key faculty: Nichole Bosson, MD, MPH, NRP, FAEMS \u2014 Medical Director, LA County EMS Agency; deployed with CA-TF2/USA2 to Nepal, Mexico City, and Turkey earthquakes. Associate Director: Tabitha Cheng, MD, FAEMS. Contact: nbosson@dhs.lacounty.gov | 562-378-1500."
    },
    strengths: [
      "LA County EMS Agency oversight of 10M+ population \u2014 unparalleled system complexity",
      "Combined EMS + Disaster Medicine fellowship",
      "Option for 2-year track with advanced degree (MPH)",
      "Dr. Bosson is a leading researcher in resuscitation science and regional systems of care",
      "USAR deployment experience: Dr. Bosson deployed to Nepal, Mexico City, and Turkey earthquakes with CA-TF2/USA2",
      "Collaboration with LA County Fire Department",
      "Southern California warm-weather lifestyle"
    ],
    weaknesses: [
      "Only 1 position per year",
      "Torrance is suburban; less central than USC/LAFD for urban excitement",
      "LA County cost of living is very high"
    ],
    unique: "The LA County EMS Agency medical director position of Dr. Bosson provides fellows with unique county-level system oversight exposure. The USAR deployments and disaster medicine focus are nationally distinctive.",
    hems_cct: "Limited"
  },
  {
    rank: 24,
    name: "Stanford",
    city: "Stanford",
    state: "CA",
    tier: "mid",
    positions: 1,
    acgme: true,
    scores: {
      system_qi: 4,
      ops_autonomy: 3,
      cct_aviation: 3,
      austere_disaster: 3,
      lifestyle: 4,
      economic: 1
    },
    tags: ["Innovation/2-Year", "Silicon Valley", "Design Thinking", "MBA Synergy"],
    overview: "Stanford's EMS fellowship is a comprehensive two-year program (Year 1 ACGME-accredited, Year 2 non-ACGME for advanced research/education). Stanford's design-thinking and innovation culture can enhance QI and systems-building work. The program accepts 1 fellow per year.",
    pd: {
      name: "Marc Gautreau, MD, MBA",
      title: "Clinical Professor; Director of Pre-Hospital Care, Stanford Emergency Medicine; Medical Director, San Jose Fire Department",
      email: "marcg14@stanford.edu",
      phone: "(650) 723-5111",
      bio: "Unique background: firefighter/EMT, Air Force flight surgeon deployed to Germany for casualties from Iraq/Afghanistan, completed an MBA alongside his 2-year EMS fellowship. Medical direction of agencies covering 2 counties, 9 cities, and 1 national park."
    },
    strengths: [
      "Two-year program allows deeper research and specialization",
      "Stanford's world-class academic resources and Silicon Valley tech adjacency",
      "Design-thinking and innovation culture enhances QI approaches",
      "Medical direction of San Jose Fire Department and agencies covering 2 counties, 9 cities, and 1 national park",
      "Bay Area lifestyle (though expensive)"
    ],
    weaknesses: [
      "Only 1 position per year \u2014 extremely competitive",
      "Bay Area cost of living is among the highest in the world",
      "Year 1 fellows do not work as faculty in Stanford ED; they moonlight in local EDs instead",
      "Pacific NW/Bay Area climate is mild but not Southwest desert"
    ],
    unique: "The two-year structure is distinctive, with Year 2 allowing clinical instructor responsibilities in the Stanford ED and deeper research engagement. Dr. Gautreau's unique trajectory\u2014firefighter to flight surgeon to MBA to Stanford professor\u2014embodies the innovative spirit of the program.",
    hems_cct: "Limited"
  },

  // === LOWER TIER ===
  {
    rank: 25,
    name: "FDNY / Northwell Health LIJ",
    city: "New York City",
    state: "NY",
    tier: "lower",
    positions: 2,
    acgme: true,
    scores: {
      system_qi: 5,
      ops_autonomy: 5,
      cct_aviation: 3,
      austere_disaster: 3,
      lifestyle: 1,
      economic: 1
    },
    tags: ["System Scale", "1.6M Calls/Year", "FDNY", "5 Boroughs", "Urban Disaster"],
    overview: "The FDNY-Northwell partnership offers unparalleled exposure to the world's most complex and high-volume EMS system. FDNY EMS handles over 1.6 million calls annually across all 5 boroughs, serving a population of 9 million. The program was founded in 1992, is ACGME-accredited, and accepts 2 fellows per year.",
    pd: {
      name: "Douglas A. Isaacs, MD",
      title: "Program Director",
      email: "doug.isaacs@fdny.nyc.gov",
      phone: "718-999-2790",
      coordinator: "FDNY Office of Medical Affairs, 9 MetroTech Center, 5th Floor, Brooklyn, NY 11201",
      deadline: "Typically late August; interviews in September. Requires NY State medical license and DEA registration before starting."
    },
    strengths: [
      "FDNY EMS: 1.6M+ calls/year across 5 boroughs \u2014 the world's largest EMS system",
      "Founded 1992; over 40 fellows graduated with deep alumni network",
      "Large-scale system medical direction, urban disaster preparedness, MCI experience",
      "Northwell Health Center for EMS: one of the largest hospital-based ambulance services in the U.S.",
      "2 positions per year"
    ],
    weaknesses: [
      "New York City cost of living is extremely high",
      "No Southwest, outdoor, or warm-weather lifestyle alignment",
      "Urban-only EMS focus; limited wilderness/austere exposure",
      "Requires NY State medical license and DEA registration before starting"
    ],
    unique: "For large-system medical direction at a scale that exists nowhere else, FDNY/Northwell is unmatched. The 1.6 million annual calls across 5 boroughs create operational complexity that cannot be replicated.",
    hems_cct: "Northwell EMS"
  }
];

// Application Timeline Data
const APPLICATION_TIMELINE = {
  targetStart: "July 1, 2028",
  applicationCycle: "2027",
  milestones: [
    { event: "Application window opens", date: "June 2027" },
    { event: "NRMP registration opens", date: "~August 20, 2027" },
    { event: "Most program deadlines", date: "August 15, 2027", highlight: true },
    { event: "UTSW extended deadline", date: "October 1, 2027" },
    { event: "Interview period", date: "September\u2013October 2027" },
    { event: "Rank Order List deadline", date: "~Early November 2027" },
    { event: "Match Day", date: "~Mid-to-late November 2027", highlight: true },
    { event: "Fellowship begins", date: "July 1, 2028", highlight: true }
  ],
  requirements: [
    "NRMP registration for the Emergency Medicine Subspecialties Match",
    "Curriculum Vitae",
    "Personal statement / letter of intent",
    "3 letters of recommendation (one must be from your residency program director; one ideally from an EMS-focused mentor)",
    "USMLE/COMLEX scores",
    "Cover letter (some programs)"
  ],
  strongFitPrograms: [
    { rank: 2, name: "University of Arizona", reason: "Desert/border, proximity to current training, Dr. Gaither's mentorship" },
    { rank: 3, name: "UT Health San Antonio", reason: "Military/TEMS, warm weather, 3 positions" },
    { rank: 9, name: "University of New Mexico", reason: "Austere/wilderness/tribal, 3 positions, Southwest" },
    { rank: 11, name: "Denver Health", reason: "Field immersion model, mountain access, 2 positions" },
    { rank: 19, name: "UCSD", reason: "Combined EMS/Disaster, border/maritime, Southern California" },
    { rank: 16, name: "UT Austin Dell Med", reason: "Data/QI focus, third-service model, tech culture" },
    { rank: 23, name: "Harbor-UCLA", reason: "Disaster/USAR, LA County scale, warm weather" },
    { rank: 10, name: "University of Utah", reason: "Wilderness/mountain, 4-state trauma catchment, 2 positions" }
  ]
};

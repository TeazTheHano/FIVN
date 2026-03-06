import { ArticleInput } from "./domain/buildArticle"
import { UserInput } from "./domain/buildUser";


let data: UserInput[] = [
  {
    Name: 'Aaron Everhart',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/209541.jpg',
    Description: 'Former Vietnam Country Leader for Draper Startup House @ HATCH!',
    SubDescription: 'http://vn.linkedin.com/in/aaroneverhart/',
    Email: 'aaroneverhart@example.com'
  },
  {
    Name: 'Adrian Ho',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3187090.jpeg',
    Description: 'Partner @ Blueprint Ventures',
    SubDescription: 'http://www.linkedin.com/in/adrianholh',
    Email: 'adrianho@example.com'
  },
  {
    Name: 'Ahmed Mounir',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3195443.jpeg',
    Description: 'Mr @ Mindshift Ventures',
    SubDescription: 'https://www.linkedin.com/in/ahmedmounir1801/',
    Email: 'ahmedmounir@example.com'
  },
  {
    Name: 'Anh Tu Duong',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3194651.jpeg',
    Description: 'Founder @ Web3 X',
    SubDescription: 'http://www.linkedin.com/in/tuanhduong/',
    Email: 'anhtuduong@example.com'
  },
  {
    Name: 'Ben Berenson',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3191506.jpeg',
    Description: 'Managing Partner @ Asia SGE, Hong Kong',
    SubDescription: 'http://www.linkedin.com/in/bberenson/',
    Email: 'benberenson@example.com'
  },
  {
    Name: 'Bich Hoang Ngoc',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3179670.jpeg',
    Description: 'President @ Global Leaders/Crestcom Vietnam',
    SubDescription: 'http://www.linkedin.com/in/hnbich/',
    Email: 'bichhoangngoc@example.com'
  },
  {
    Name: 'Binh Do',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3223739.jpg',
    Description: 'Director, Global Business & Cooperation @ VINASA',
    SubDescription: 'http://www.linkedin.com/in/thomasdovn/',
    Email: 'binhdo@example.com'
  },
  {
    Name: 'Cong Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3223740.jpg',
    Description: 'Founder @ Wellbeing',
    SubDescription: 'http://www.linkedin.com/in/cong-nguyen-van-wellbeingimt1987/',
    Email: 'congnguyen@example.com'
  },
  {
    Name: 'David Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3201847.jpeg',
    Description: 'Executive Director @ Vietcham Singapore',
    SubDescription: 'http://www.linkedin.com/in/quangvunguyen',
    Email: 'davidnguyen@example.com'
  },
  {
    Name: 'Deepak Peschard',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3217967.jpeg',
    Description: 'Founder & CEO @ Digeto',
    SubDescription: 'http://www.linkedin.com/in/deepak-peschard/',
    Email: 'deepakpeschard@example.com'
  },
  {
    Name: 'Denise Thi',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3193495.png',
    Description: 'Founder/CEO @ SYLVA',
    SubDescription: 'http://www.linkedin.com/in/denisethi',
    Email: 'denisethi@example.com'
  },
  {
    Name: 'Dongmi Choi',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3189332.png',
    Description: 'Senior Manager @ Chungbuk Center for Creative Economy & Innovation',
    SubDescription: 'http://www.linkedin.com/in/dongmicus/',
    Email: 'dongmichoi@example.com'
  },
  {
    Name: 'Dr. Joe Hüg',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2909340.png',
    Description: 'Managing Director / Professor of Practice @ IOAK, Corp. / iU University',
    SubDescription: 'https://www.linkedin.com/in/joehug/',
    Email: 'dr.joehüg@example.com'
  },
  {
    Name: 'Dr Marcuz Tan',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3187086.jpg',
    Description: 'Executive Director, CEO @ Boustead APEX INC',
    SubDescription: 'http://www.linkedin.com/in/marcuzstan',
    Email: 'drmarcuztan@example.com'
  },
  {
    Name: 'DrWarren Linger',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3090497.jpg',
    Description: 'CEO @ exmersive.ai',
    SubDescription: 'http://linkedin/in/warrenlinger',
    Email: 'drwarrenlinger@example.com'
  },
  {
    Name: 'Duc Dang The',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3180557.jpeg',
    Description: 'Lawyer, General Secretary @ Vietnam Independent Directors Association (VNIDA)',
    SubDescription: 'http://www.linkedin.com/in/ducdangindochinecounsel/',
    Email: 'ducdangthe@example.com'
  },
  {
    Name: 'Duc Vuong Anh',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3180589.png',
    Description: 'Director of Digital Transformation @ Galaxy Holdings, SOVICO Group',
    SubDescription: 'http://www.linkedin.com/in/ducvanh/',
    Email: 'ducvuonganh@example.com'
  },
  {
    Name: 'Duc Hoang',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3253710.jpg',
    Description: 'Special Counsel @ Duane Morris Vietnam',
    SubDescription: 'https://www.linkedin.com/in/hoangminhduc/',
    Email: 'duchoang@example.com'
  },
  {
    Name: 'Duc Minh Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3178944.jpeg',
    Description: 'Partner, Consulting @ EY Consulting Vietnam Joint Stock Company (EY Consulting Vietnam)',
    SubDescription: 'http://www.linkedin.com/in/duc-minh-nguyen/',
    Email: 'ducminhnguyen@example.com'
  },
  {
    Name: 'Dung Nguyen',
    ImgLink: '/images/blank_person.png',
    Description: '@ IZZI Venture Studio (IVS)',
    SubDescription: 'https://www.linkedin.com/in/tuan-dung-62043118b/',
    Email: 'dungnguyen@example.com'
  },
  {
    Name: 'Erdinç Ekinci',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2883332.jpeg',
    Description: 'Founder, Investment Lead of Co-capital, Co-Founder & CEO of Openfor.co & Co-capital.co @ Managing Director of Founder Institute Japan/Korea/Taiwan',
    SubDescription: 'https://www.linkedin.com/in/erdincekinci',
    Email: 'erdinçekinci@example.com'
  },
  {
    Name: 'Eric Ha',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/1973651.jpg',
    Description: 'CEO & Founder @ Student Life Care',
    SubDescription: 'http://www.linkedin.com/in/eric-ha-92829072/',
    Email: 'ericha@example.com'
  },
  {
    Name: 'Esmeralda Herrera',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2875865.jpeg',
    Description: 'Co-Founder @ Well Invest',
    SubDescription: 'https://www.linkedin.com/in/esmeralda-herrera-impact/',
    Email: 'esmeraldaherrera@example.com'
  },
  {
    Name: 'Giang Trịnh',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/1502521.jpg',
    Description: 'Managing Partner @ VMCG Capital',
    SubDescription: 'http://www.linkedin.com/in/gmtvn/',
    Email: 'giangtrịnh@example.com'
  },
  {
    Name: 'Giang Trinh',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3177767.jpg',
    Description: 'Country Director @ Founder Institute Vietnam',
    SubDescription: 'http://www.linkedin.com/in/gmtvn/',
    Email: 'giangtrinh@example.com'
  },
  {
    Name: 'Hany Sayed',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2848694.jpeg',
    Description: 'Chief Digital Officer @ Gyozer Proptech',
    SubDescription: 'http://www.linkedin.com/in/hanymc/',
    Email: 'hanysayed@example.com'
  },
  {
    Name: 'Hau Ly',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3203169.jpeg',
    Description: 'Partner @ Ascend Vietnam Ventures (AVV)',
    SubDescription: 'http://www.linkedin.com/in/hauly/',
    Email: 'hauly@example.com'
  },
  {
    Name: 'Hieu Tran',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2374977.jpeg',
    Description: 'Co-founder @ Not A Basement Studio',
    SubDescription: 'http://www.linkedin.com/in/hieu-tran-19b91820/',
    Email: 'hieutran@example.com'
  },
  {
    Name: 'Hieu Tran',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3209781.jpeg',
    Description: 'Investment Manager @ DO Ventures',
    SubDescription: 'http://www.linkedin.com/in/hieutrann/',
    Email: 'hieutran@example.com'
  },
  {
    Name: 'Hieu Tham',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3223936.jpg',
    Description: 'Senior Legal Manager @ ThinkZone Ventures',
    SubDescription: 'http://www.linkedin.com/in/trunghieutham/',
    Email: 'hieutham@example.com'
  },
  {
    Name: 'Hieu Ngo',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3252657.jpg',
    Description: 'Principal AI Engineer @ Backbase',
    SubDescription: 'https://www.linkedin.com/in/hieu-ngo-500818174/',
    Email: 'hieungo@example.com'
  },
  {
    Name: 'HK Noh',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3181361.jpeg',
    Description: 'Investment Manager @ O3 Partners',
    SubDescription: 'https://www.linkedin.com/in/hknoh/',
    Email: 'hknoh@example.com'
  },
  {
    Name: 'Hoang Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/437721.jpg',
    Description: 'CEO  @ VinHMS',
    SubDescription: 'http://vn.linkedin.com/in/erichoangnv',
    Email: 'hoangnguyen@example.com'
  },
  {
    Name: 'Hung Ngo',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3183018.jpg',
    Description: 'Vietnam Investment Lead @ Cocoon Capital',
    SubDescription: 'http://www.linkedin.com/in/ngohung207/',
    Email: 'hungngo@example.com'
  },
  {
    Name: 'Karin Wellbrock',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3087446.png',
    Description: 'Executive Leadership Coach and Co-Founder. @ Kay Group K.K.',
    SubDescription: 'https://www.linkedin.com/in/karin-jork-wellbrock-pcc',
    Email: 'karinwellbrock@example.com'
  },
  {
    Name: 'Klaus Derendorf',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3184057.png',
    Description: 'Co-Founder/Partner @ Crescenta Global Ventures',
    SubDescription: 'http://www.linkedin.com/in/klausderendorf/',
    Email: 'klausderendorf@example.com'
  },
  {
    Name: 'Linh Lee',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3177442.jpg',
    Description: 'CEO @ Links Group',
    SubDescription: 'http://www.linkedin.com/in/linh-lee-vn/',
    Email: 'linhlee@example.com'
  },
  {
    Name: 'Linh Le Hong',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3178953.jpeg',
    Description: 'General Secretary / CEO @ CFO Vietnam',
    SubDescription: 'http://www.linkedin.com/in/honglinh/',
    Email: 'linhlehong@example.com'
  },
  {
    Name: 'Linh Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3191722.jpg',
    Description: 'Investment Associate @ Ansible Ventures',
    SubDescription: 'http://www.linkedin.com/in/linhnguyen0109',
    Email: 'linhnguyen@example.com'
  },
  {
    Name: 'Louise Linh Pham',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2801921.png',
    Description: 'Founder/CEO @ LOGIVAN',
    SubDescription: 'http://vn.linkedin.com/in/linh-cantab',
    Email: 'louiselinhpham@example.com'
  },
  {
    Name: 'Luis Andrés Enriquez Arias',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3197367.jpeg',
    Description: 'Partner & Co-founder @ Bridge Latam Ventures',
    SubDescription: 'http://www.linkedin.com/in/luis-andr%C3%A9s-enriquez-arias/',
    Email: 'luisandrésenriquezarias@example.com'
  },
  {
    Name: 'Maaike Doyer',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2945048.jpg',
    Description: 'Founder @ Epic Angels',
    SubDescription: 'https://www.linkedin.com/in/maaikedoyer',
    Email: 'maaikedoyer@example.com'
  },
  {
    Name: 'Mark Birch',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3183678.jpeg',
    Description: 'Start Founder & Authoer @ Community-in-a-Box',
    SubDescription: 'http://www.linkedin.com/in/startupmark/',
    Email: 'markbirch@example.com'
  },
  {
    Name: 'Mason Anh Bui',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3131649.jpg',
    Description: 'Investment Principal - VC @ Kasikorn X Venture Capital (KXVC)',
    SubDescription: 'http://www.linkedin.com/in/mason-anh-bui/',
    Email: 'masonanhbui@example.com'
  },
  {
    Name: 'Minh Toan Duong',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3191516.png',
    Description: 'Director @ UOB Venture Management',
    SubDescription: 'http://www.linkedin.com/in/toan-duong-b65694a2/',
    Email: 'minhtoanduong@example.com'
  },
  {
    Name: 'Nam Doan',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3134332.jpeg',
    Description: 'Principal @ ThinkZone Ventures',
    SubDescription: 'https://www.linkedin.com/in/nam-doan-705102158/',
    Email: 'namdoan@example.com'
  },
  {
    Name: 'Ngan Tran',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3182615.jpg',
    Description: 'Founder/CEO @ The New Leaders',
    SubDescription: 'http://www.linkedin.com/in/ngan-tran-thenewleaders/',
    Email: 'ngantran@example.com'
  },
  {
    Name: 'Ngoc Nguyen Ba',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3187084.jpeg',
    Description: 'Founder/CEO @ ProtonX',
    SubDescription: 'http://www.linkedin.com/in/nbangoc',
    Email: 'ngocnguyenba@example.com'
  },
  {
    Name: 'Ngoc Anh Ly',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3224107.jpg',
    Description: 'CEO @ VClass',
    SubDescription: 'http://www.linkedin.com/in/lyngocanh/',
    Email: 'ngocanhly@example.com'
  },
  {
    Name: 'Nguyen Tran Vu',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3179002.jpeg',
    Description: 'President @ AI Education',
    SubDescription: 'http://www.linkedin.com/in/tranvunguyen/',
    Email: 'nguyentranvu@example.com'
  },
  {
    Name: 'Nilay Jayswal',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3225647.jpg',
    Description: '5+ Years in B2B Growth Marketing (APAC, EMEA, LATAM) | Experienced in Advertising, Analytics and Automation | Mentor at GrowthMentor | TEDx Speaker @ GrowthMentor',
    SubDescription: 'https://www.linkedin.com/in/nilayjayswal',
    Email: 'nilayjayswal@example.com'
  },
  {
    Name: 'Phieu Le Minh',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3179637.jpg',
    Description: 'Lawyer, Founding & Managing Partner @ LMP Lawyers',
    SubDescription: 'http://www.linkedin.com/in/leminhphieu/',
    Email: 'phieuleminh@example.com'
  },
  {
    Name: 'Phuc Thinh Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3181638.jpg',
    Description: 'Founding Partner @  Renaissanc.IO',
    SubDescription: 'http://www.linkedin.com/in/phuc-thinh-nguyen/',
    Email: 'phucthinhnguyen@example.com'
  },
  {
    Name: 'Quan Truong',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/2536457.jpg',
    Description: 'Founder & CEO @ Leanflag & OpenCommerce Group',
    SubDescription: 'http://www.linkedin.com/in/quaninte/',
    Email: 'quantruong@example.com'
  },
  {
    Name: 'Roger Do',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/839841.jpg',
    Description: 'CEO, Co-Founder @ Watchdog Cyber Defense',
    SubDescription: 'http://sg.linkedin.com/in/rogerdo',
    Email: 'rogerdo@example.com'
  },
  {
    Name: 'Sean Kwon',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3209304.jpg',
    Description: 'Investor @ 500 Global',
    SubDescription: 'http://www.linkedin.com/in/seankk/',
    Email: 'seankwon@example.com'
  },
  {
    Name: 'Sheikh Masud Iftekher',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3156987.png',
    Description: 'Controller @ Ericsson Malaysia',
    SubDescription: 'https://www.linkedin.com/in/sheikh-masud-iftekher',
    Email: 'sheikhmasudiftekher@example.com'
  },
  {
    Name: 'Sheyla Felix',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3149828.jpeg',
    Description: 'Investment Strategy & AI @ Sheyconomics',
    SubDescription: 'http://www.linkedin.com/in/sheelix/',
    Email: 'sheylafelix@example.com'
  },
  {
    Name: 'Steve Sidhu',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3224461.JPEG',
    Description: 'Senior Director/Owner @ CSS Partners LLC',
    SubDescription: 'http://www.linkedin.com/in/steve-s-682a351bb/',
    Email: 'stevesidhu@example.com'
  },
  {
    Name: 'Thao Ha',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3189606.jpeg',
    Description: 'Venture Partner @ Integra Partners',
    SubDescription: 'http://www.linkedin.com/in/thaoha57/',
    Email: 'thaoha@example.com'
  },
  {
    Name: 'Toan Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3186211.jpg',
    Description: 'Founder/CEO @ Aniday',
    SubDescription: 'http://www.linkedin.com/in/vnaking/',
    Email: 'toannguyen@example.com'
  },
  {
    Name: 'Tri Dung Tran',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3178952.jpg',
    Description: 'Program Manager in the Hanoi Region @ The Swiss Entrepreneurship Program at J.E. Austin Associates Inc.',
    SubDescription: 'http://www.linkedin.com/in/vebimo/',
    Email: 'tridungtran@example.com'
  },
  {
    Name: 'Trinh Nguyen',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3209485.jpeg',
    Description: 'Investment Director @ AiViet Venture',
    SubDescription: 'http://www.linkedin.com/in/trinh-nguyen-b5184244/',
    Email: 'trinhnguyen@example.com'
  },
  {
    Name: 'Valdis Sprogis',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3197133.jpeg',
    Description: 'COO @ i1x Ventures',
    SubDescription: 'http://www.linkedin.com/in/valdis-sprogis/',
    Email: 'valdissprogis@example.com'
  },
  {
    Name: 'Wilson Santoso',
    ImgLink: 'https://s3.us-east-1.amazonaws.com/fi-hatchbox-production-uploads/users/3177233.jpeg',
    Description: 'Co-Founder at Dabble @ Director at Founder Institute Jakarta',
    SubDescription: 'http://www.linkedin.com/in/wilsonsantoso/',
    Email: 'wilsonsantoso@example.com'
  }
]

export default data
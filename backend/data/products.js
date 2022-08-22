const products = [
  {
    name: "Kobe Bryant Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3633000/ff_3633451-cc2eaf57b9854d908de7_full.jpg&w=340",
    description:
      "Men's Los Angeles Lakers Kobe Bryant Mitchell & Ness Gold 1996-97 Hardwood Classics Authentic Player Jersey",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "hardwood-classics",
    price: 299.99,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
    sizes: ["S", "M", "XL", "L"],
  },
  {
    name: "Kobe Bryant Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3633000/ff_3633450-35489f2e237d004eb8dc_full.jpg&w=340",
    description:
      "Men's Los Angeles Lakers Kobe Bryant Mitchell & Ness Royal 1996-97 Hardwood Classics Authentic Player Jersey",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "hardwood-classics",
    price: 299.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL"],
  },
  {
    name: "Michael Jordan Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4314000/ff_4314197-2cff4f0ba5d784106a71_full.jpg&w=340",
    description:
      "Men's Chicago Bulls Michael Jordan Mitchell & Ness Red Hardwood Classics Authentic 1991 Jersey",
    brand: "Chicago Bulls",
    category: "Jerseys",
    team: "hardwood-classics",
    price: 324.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "XXL"],
  },
  {
    name: "Larry Bird Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4563000/ff_4563487-d9d25ad2006278835790_full.jpg&w=340",
    description:
      "Men's Boston Celtics Larry Bird Mitchell & Ness Kelly Green 1996-97 Hardwood Classics NBA 75th Anniversary Diamond Swingman Jersey",
    brand: "Boston Celtics",
    category: "Jerseys",
    team: "hardwood-classics",
    price: 199.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
    sizes: ["S", "M", "XL"],
  },
  {
    name: "Magic Johnson Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4365000/ff_4365732-bc7dc7af4fc6fd77d1ce_full.jpg&w=340",
    description:
      "Men's Los Angeles Lakers Magic Johnson Mitchell & Ness Purple Big & Tall 1984-85 Hardwood Classics Swingman Jersey",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "hardwood-classics",
    price: 139.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL"],
  },
  {
    name: "LeBron James Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3278000/ff_3278327-ef1614742e1918b9a428_full.jpg&w=340",
    description:
      "Men's Cleveland Cavaliers LeBron James Mitchell & Ness Wine Big & Tall Hardwood Classics Swingman Jersey",
    brand: "Cleveland Cavaliers",
    category: "Jerseys",
    team: "hardwood-classics",
    price: 139.99,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Stephen Curry Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3774000/ff_3774109-c23b97fdbaaa2e8a02de_full.jpg&w=340",
    description:
      "Men's Golden State Warriors Stephen Curry Nike Royal 2020/21 Swingman Jersey - Icon Edition",
    brand: "Golden State Warriors",
    category: "Jerseys",
    team: "golden-state-warriors",
    price: 109.99,
    countInStock: 40,
    rating: 0,
    numReviews: 0,
    sizes: ["S", "M", "XL", "L"],
  },
  {
    name: "Stephen Curry Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3713000/ff_3713034-619dc3ef53b62639facf_full.jpg&w=340",
    description:
      "Men's Golden State Warriors Stephen Curry Fanatics Branded Gold Fast Break Team Replica Jersey - Statement Edition",
    brand: "Golden State Warriors",
    category: "Jerseys",
    team: "golden-state-warriors",
    price: 74.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Klay Thompson Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3662000/ff_3662244-ac1efdd9cc203c5fdcb3_full.jpg&w=340",
    description:
      "Men's Golden State Warriors Klay Thompson Fanatics Branded Royal Fast Break Replica Player Jersey - Icon Edition",
    brand: "Golden State Warriors",
    category: "Jerseys",
    team: "golden-state-warriors",
    price: 74.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jordan Poole Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4947000/ff_4947440-8d4fe5f032d5f8a7c7b3_full.jpg&w=340",
    description:
      "Men's Golden State Warriors Jordan Poole Nike Royal 2020/21 Swingman Jersey - Icon Edition",
    brand: "Golden State Warriors",
    category: "Jerseys",
    team: "golden-state-warriors",
    price: 109.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Draymond Green Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3715000/ff_3715788-812fae74a79fea0e41b7_full.jpg&w=340",
    description:
      "Men's Golden State Warriors Draymond Green Fanatics Branded Royal Fast Break Replica Player Team Jersey - Icon Edition",
    brand: "Golden State Warriors",
    category: "Jerseys",
    team: "golden-state-warriors",
    price: 74.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "LeBron James Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4195000/ff_4195848-92adb03423c046c1e26b_full.jpg&w=340",
    description:
      "Men's Los Angeles Lakers LeBron James Fanatics Branded Purple 2021/22 #6 Fast Break Replica Player Jersey - Statement Edition",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "los-angeles-lakers",
    price: 74.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "LeBron James Away Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4195000/ff_4195851-e5171baa1fe8af07b0a7_full.jpg&w=340",
    description:
      "Men's Los Angeles Lakers LeBron James Fanatics Branded White 2021/22 #6 Fast Break Replica Player Jersey - Association Edition",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "los-angeles-lakers",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Anthony Davis Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3662000/ff_3662252-c0326fb2dbbfb825eb9e_full.jpg&w=340",
    description:
      "Men's Los Angeles Lakers Anthony Davis Fanatics Branded Purple 2020/21 Fast Break Replica Jersey - Association Edition",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "los-angeles-lakers",
    price: 74.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Russell Westbrook Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4482000/ff_4482506-b378688f5e586c5cf905_full.jpg&w=340",
    description:
      "Men's Los Angeles Lakers Russell Westbrook Jordan Brand Purple 2021/22 Swingman Jersey - Statement Edition",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "los-angeles-lakers",
    price: 109.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Carmelo Anthony Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4482000/ff_4482512-d61e141d22a8c53126a0_full.jpg&w=340",
    description:
      "Los Angeles Lakers Carmelo Anthony Nike Gold 2021/22 Swingman Jersey - Icon Edition",
    brand: "Los Angeles Lakers",
    category: "Jerseys",
    team: "los-angeles-lakers",
    price: 109.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Jayson Tatum Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3774000/ff_3774087-3f13fffc9fce4478df80_full.jpg&w=340",
    description:
      "Men's Boston Celtics Jayson Tatum Nike Kelly Green 2020/21 Swingman Jersey - Icon Edition",
    brand: "Boston Celtics",
    category: "Jerseys",
    team: "boston-celtics",
    price: 109.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Jayson Tatum Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4253000/ff_4253757-2898b5b4093b166b264e_full.jpg&w=340",
    description:
      "Men's Boston Celtics Jayson Tatum Nike White 2021/22 Swingman Jersey - Classic Edition",
    brand: "Boston Celtics",
    category: "Jerseys",
    team: "boston-celtics",
    price: 129.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Marcus Smart Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2971000/ff_2971679_full.jpg&w=340",
    description:
      "Men's Boston Celtics Marcus Smart Fanatics Branded Green Fast Break Replica Player Jersey",
    brand: "Boston Celtics",
    category: "Jerseys",
    team: "boston-celtics",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Jaylen Brown Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4924000/ff_4924428-b5fd601c4a98b7470568_full.jpg&w=340",
    description:
      "Men's Boston Celtics Jaylen Brown Fanatics Branded Kelly Green 2022 Fast Break Replica Player Jersey - Icon Edition",
    brand: "Boston Celtics",
    category: "Jerseys",
    team: "boston-celtics",
    price: 74.99,
    countInStock: 13,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Grant Williams Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4924000/ff_4924430-1d106bcffd911fb51fa3_full.jpg&w=340",
    description:
      "Men's Boston Celtics Grant Williams Fanatics Branded Kelly Green 2022 Fast Break Replica Player Jersey - Icon Edition",
    brand: "Boston Celtics",
    category: "Jerseys",
    team: "boston-celtics",
    price: 79.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Giannis Antetokounmpo Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3774000/ff_3774132-c160b142112e7376c14d_full.jpg&w=340",
    description:
      "Men's Milwaukee Bucks Giannis Antetokounmpo Nike Green 2020/21 Swingman Jersey - Icon Edition",
    brand: "Milwaukee Bucks",
    category: "Jerseys",
    team: "milwaukee-bucks",
    price: 109.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Giannis Antetokounmpo Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2802000/ff_2802102_full.jpg&w=340",
    description:
      "Men's Milwaukee Bucks Giannis Antetokounmpo Fanatics Branded White Replica Jersey - Association Edition",
    brand: "Milwaukee Bucks",
    category: "Jerseys",
    team: "milwaukee-bucks",
    price: 74.99,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Jrue Holiday Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4429000/ff_4429771-15d22fe8e11b049df5d5_full.jpg&w=340",
    description:
      "Men's Milwaukee Bucks Jrue Holiday Nike Hunter Green 2020/21 Swingman Jersey - Icon Edition",
    brand: "Milwaukee Bucks",
    category: "Jerseys",
    team: "milwaukee-bucks",
    price: 109.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Khris Middleton Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2983000/ff_2983741_full.jpg&w=340",
    description:
      "Men's Milwaukee Bucks Khris Middleton Fanatics Branded Green Fast Break Road Replica Player Jersey - Icon Edition",
    brand: "Milwaukee Bucks",
    category: "Jerseys",
    team: "milwaukee-bucks",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Brook Lopez Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3564000/ff_3564760-f838207e87e48f19c17d_full.jpg&w=340",
    description:
      "Men's Milwaukee Bucks Brook Lopez Fanatics Branded Green Fast Break Replica Player Jersey - Icon Edition",
    brand: "Milwaukee Bucks",
    category: "Jerseys",
    team: "milwaukee-bucks",
    price: 74.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Kevin Durant Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4911000/ff_4911356-fe9f517d2832405a8188_full.jpg&w=340",
    description:
      "Men's Brooklyn Nets Kevin Durant Fanatics Branded Black 2021/22 Fast Break Replica Jersey - Icon Edition",
    brand: "Brooklyn Nets",
    category: "Jerseys",
    team: "brooklyn-nets",
    price: 74.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Kyrie Irving Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4911000/ff_4911358-96e01e548e33aa6f0dd3_full.jpg&w=340",
    description:
      "Men's Brooklyn Nets Kyrie Irving Fanatics Branded Black 2021/22 Fast Break Replica Jersey - Icon Edition",
    brand: "Brooklyn Nets",
    category: "Jerseys",
    team: "brooklyn-nets",
    price: 74.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S"],
  },
  {
    name: "Blake Griffin Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4270000/ff_4270739-5968d9ddedc0ae6595c2_full.jpg&w=340",
    description:
      "Men's Brooklyn Nets Blake Griffin Fanatics Branded Black 2020/21 Fast Break Replica Player Jersey - Icon Edition",
    brand: "Brooklyn Nets",
    category: "Jerseys",
    team: "brooklyn-nets",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Ben Simmons Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4731000/ff_4731133-ab8f1a7c65a30ea15f7a_full.jpg&w=340",
    description:
      "Men's Brooklyn Nets Ben Simmons Fanatics Branded Black Fast Break Replica Player Jersey - Icon Edition",
    brand: "Brooklyn Nets",
    category: "Jerseys",
    team: "brooklyn-nets",
    price: 74.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Seth Curry Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4911000/ff_4911353-7d7de803543d810dbce2_full.jpg&w=340",
    description:
      "Men's Brooklyn Nets Seth Curry Fanatics Branded Black 2021/22 Fast Break Replica Jersey - Icon Edition",
    brand: "Brooklyn Nets",
    category: "Jerseys",
    team: "brooklyn-nets",
    price: 74.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Ja Morant Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3595000/ff_3595253-3cb446e7f5a33576e6ab_full.jpg&w=340",
    description:
      "Men's Memphis Grizzlies Ja Morant Fanatics Branded Navy Replica Fast Break Jersey - Icon Edition",
    brand: "Memphis Grizzlies",
    category: "Jerseys",
    team: "memphis-grizzlies",
    price: 74.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jaren Jackson Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3231000/ff_3231575-d5f5fe66fcd976886ece_full.jpg&w=340",
    description:
      "Men's Memphis Grizzlies Jaren Jackson Nike Navy Swingman Team Jersey",
    brand: "Memphis Grizzlies",
    category: "Jerseys",
    team: "memphis-grizzlies",
    price: 109.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jaren Jackson Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3378000/ff_3378268-89f7b283f321a8683bb1_full.jpg&w=340",
    description:
      "Men's Memphis Grizzlies Jaren Jackson Jr. Nike White 2019/2020 Swingman Jersey - Association Edition",
    brand: "Memphis Grizzlies",
    category: "Jerseys",
    team: "memphis-grizzlies",
    price: 109.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jake LaRavia Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4966000/ff_4966736-f6b1db439a7f68631fae_full.jpg&w=340",
    description:
      "Men's Memphis Grizzlies Jake LaRavia Fanatics Branded Navy 2022 Fast Break Replica Jersey - Icon Edition",
    brand: "Memphis Grizzlies",
    category: "Jerseys",
    team: "memphis-grizzlies",
    price: 70.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Zaire Williams Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4432000/ff_4432046-23cc60f005c12b1dbebf_full.jpg&w=340",
    description:
      "Men's Memphis Grizzlies Fanatics Branded Navy Ziaire Williams Fast Break Replica Jersey - Icon Edition",
    brand: "Memphis Grizzlies",
    category: "Jerseys",
    team: "memphis-grizzlies",
    price: 70.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Luka Doncic Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3308000/ff_3308742_full.jpg&w=340",
    description:
      "Men's Dallas Mavericks Luka Doncic Fanatics Branded Blue Fast Break Replica Jersey - Icon Edition",
    brand: "Dallas Mavericks",
    category: "Jerseys",
    team: "dallas-mavericks",
    price: 74.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Luka Doncic Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4254000/ff_4254457-3290d1a9358c504524ac_full.jpg&w=340",
    description:
      "Men's Dallas Mavericks Luka Doncic Nike Blue 2021/22 Diamond Swingman Jersey - Icon Edition",
    brand: "Dallas Mavericks",
    category: "Jerseys",
    team: "dallas-mavericks",
    price: 129.99,
    countInStock: 35,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Kristaps Porzingis Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3774000/ff_3774098-82366dc5083511d336eb_full.jpg&w=340",
    description:
      "Men's Dallas Mavericks Kristaps Porzingis Nike Blue 2020/21 Swingman Jersey - Icon Edition",
    brand: "Dallas Mavericks",
    category: "Jerseys",
    team: "dallas-mavericks",
    price: 109.99,
    countInStock: 27,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Dorian Finney-Smith Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3680000/ff_3680814-399154ec6532ebead360_full.jpg&w=340",
    description:
      "Men's Dallas Mavericks Dorian Finney-Smith Fanatics Branded Blue Fast Break Replica Jersey - Icon Edition",
    brand: "Dallas Mavericks",
    category: "Jerseys",
    team: "dallas-mavericks",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Spencer Dinwiddie Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4937000/ff_4937535-93481145439c671048ae_full.jpg&w=340",
    description:
      "Men's Dallas Mavericks Spencer Dinwiddie Fanatics Branded Blue 2021/22 Fast Break Replica Jersey - Icon Edition",
    brand: "Dallas Mavericks",
    category: "Jerseys",
    team: "dallas-mavericks",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Nikola Jokic Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4650000/ff_4650405-6a265cadf695f34e79fa_full.jpg&w=340",
    description:
      "Men's Denver Nuggets Nikola Jokic Nike Navy 2022/23 Swingman Jersey - Icon Edition",
    brand: "Denver Nuggets",
    category: "Jerseys",
    team: "denver-nuggets",
    price: 119.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Nikola Jokic Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4650000/ff_4650303-bf1d21bcc3a5b0272ee5_full.jpg&w=340",
    description:
      "Men's Denver Nuggets Nikola Jokic Nike White 2022/23 Swingman Jersey - Association Edition",
    brand: "Denver Nuggets",
    category: "Jerseys",
    team: "denver-nuggets",
    price: 119.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jamal Murray Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3662000/ff_3662231-43de9a42eb9bcfea9c85_full.jpg&w=340",
    description:
      "Men's Denver Nuggets Jamal Murray Fanatics Branded Blue Fast Break Replica Player Jersey - Statement Edition",
    brand: "Denver Nuggets",
    category: "Jerseys",
    team: "denver-nuggets",
    price: 74.99,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jeff Green Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4937000/ff_4937622-64fc19415c5302e6c396_full.jpg&w=340",
    description:
      "Men's Denver Nuggets Jeff Green Fanatics Branded Navy 2021/22 Fast Break Replica Jersey - Icon Edition",
    brand: "Denver Nuggets",
    category: "Jerseys",
    team: "denver-nuggets",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Aaron Gordon Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4285000/ff_4285116-8b9a48f0b04b34accbac_full.jpg&w=340",
    description:
      "Men's Denver Nuggets Aaron Gordon Fanatics Branded Navy 2020/21 Fast Break Road Replica Jersey - Icon Edition",
    brand: "Denver Nuggets",
    category: "Jerseys",
    team: "denver-nuggets",
    price: 74.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jimmy Butler Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3774000/ff_3774130-36db89eddfe8bdd94018_full.jpg&w=340",
    description:
      "Men's Miami Heat Jimmy Butler Nike Black 2020/21 Swingman Jersey - Icon Edition",
    brand: "Miami Heat",
    category: "Jerseys",
    team: "miami-heat",
    price: 109.99,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Jimmy Butler Alt Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3773000/ff_3773183-6afc6fe9f93b5f1edb07_full.jpg&w=340",
    description:
      "Men's Miami Heat Jimmy Butler Jordan Brand Red 2020/21 Swingman Jersey - Statement Edition",
    brand: "Miami Heat",
    category: "Jerseys",
    team: "miami-heat",
    price: 109.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Tyler Herro Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3631000/ff_3631437-7720f5d5a09aba2c0c7b_full.jpg&w=340",
    description:
      "Men's Miami Heat Tyler Herro Fanatics Branded Black Fast Break Replica Jersey - Icon Edition",
    brand: "Miami Heat",
    category: "Jerseys",
    team: "miami-heat",
    price: 74.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Bam Adebayo Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4085000/ff_4085572-eef0efc3e70e0610b9bd_full.jpg&w=340",
    description:
      "Men's Miami Heat Bam Adebayo Nike Black 2020/21 Swingman Jersey - Icon Edition",
    brand: "Miami Heat",
    category: "Jerseys",
    team: "miami-heat",
    price: 74.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
  {
    name: "Kyle Lowry Home Jersey",
    image:
      "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4937000/ff_4937575-86ac8341c3109679d5a0_full.jpg&w=340",
    description:
      "Men's Miami Heat Kyle Lowry Fanatics Branded Black 2021/22 Fast Break Replica Jersey - Icon Edition",
    brand: "Miami Heat",
    category: "Jerseys",
    team: "miami-heat",
    price: 74.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
    sizes: ["L", "M", "XL", "S", "XXL"],
  },
];

export default products;

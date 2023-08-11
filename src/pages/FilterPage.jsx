import WineDetail from "../components/WineDetail";

export default function FilterPage() {
  const mockData = [
    {
      WineName: "Chateau Leoville Las Cases St Julien 2015",
      Price: 229.99,
      CountryState: "France",
      Region: "Bordeaux",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "Wine Enthusiast -St. Julien Bordeaux France - This wine that comes mainly from a magnificent walled vineyard within sight of the Gironde estuary is structured and dense. Its tannins and firm character show its enormous aging potential. Powerful black fruits come from the 85% Cabernet Sauvignon. (Concentrated Plum Blueberry Wood  Full-bodied )",
      img: "https://images.vivino.com/thumbs/HMgTa8LGQXGC4MQze0nV7w_pb_x960.png",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Dominus 2014",
      Price: 229.97,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Advocate-Napa CA - The 2014 is a sexy opulent layered multidimensional wine with notes of red and blackcurrant cedar wood tobacco leaf spice box and licorice. The color is a dense plum/ruby/purple much like the Napanook. This is a beauty that is already drinking gorgeously... ()",
      img: "https://images.vivino.com/thumbs/FvLdztxrRXOZxU1jfVoQKQ_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Chateau Pavillon Rouge Margaux 2005",
      Price: 219.97,
      CountryState: "France",
      Region: "Bordeaux",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "Wine Spectator-Margaux Bordeaux France- Very beautiful aromas of crushed flowers - like roses - follow through to plum berry and Indian spices.Full bodied refined and silky with lovely ripe fruit and a delicate aftertaste of raisin and flowers. (Elegant Raspberry Blackberry  Full-bodied )",
      img: "https://images.vivino.com/thumbs/IKYGOPzNQgW34bK7oGA31A_pb_x960.png",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Joseph Phelps Insignia 2012",
      Price: 199.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Advocate-Napa CA- Inky purple to the rim with notes of lead pencil shavings incense camphor blackberry and creme de cassis the wine is full-bodied offering a multi-layered textural skyscraper-like mouthfeel terrific purity density and richness. (Concentrated Cassis Cocoa Blackberry  Full-bodied )",
      img: "https://images.vivino.com/thumbs/NOkljUUMT3i35lDjSgR9MQ_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Chateau Valandraud St Emilion 2015",
      Price: 199.98,
      CountryState: "France",
      Region: "Bordeaux",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "James Suckling-1er Gd Cru Classe St. Emilion Bordeaux France - Plenty of toasty oak and extract here. This has immensely concentrated fruits with powerful yet silky tannins. Blackberry and dark-plum aromas dominate the nose with hints of dark chocolate and candied orange. (Concentrated Black Cherry Dark Chocolate  Full-bodied )",
      img: "https://images.vivino.com/thumbs/e4SlfIVlTRKB319z4NgppQ_pb_x960.png",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Joseph Phelps Insignia 2014",
      Price: 199.97,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Advocate-Napa California - This wine has an inky bluish purple color a big sweet kiss of creme de cassis blackberry blueberry and hints of graphite and charcoal. It is floral full-bodied with tremendous opulence and richness. ()",
      img: "https://images.vivino.com/thumbs/NOkljUUMT3i35lDjSgR9MQ_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Barnett Cabernet Rattlesnake 2014",
      Price: 199.97,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Advocate-Spring Mountain District Napa CA- The color is opaque ruby/purple...with plenty of blueberry cassis forest floor and white flowers followed by a full-bodied beautifully built style of wine. This wine goes on and on- it is incredible rich but with no defects or hard edges. (Elegant Black Currant Coffee  Full-bodied )",
      img: "https://images.vivino.com/thumbs/U0c6SVz0T_2FXBQ7CgytJA_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Ornellaia 2014",
      Price: 199.97,
      CountryState: "Italy",
      Region: "Tuscany",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "Wine Advocate-Italy - The wine opens to a beautifully saturated and dark appearance... The wine shows sweet fruit nuances with blackberry and dark currant dark currant. Spice leather and tobacco fill in the rear. (Elegant Cassis Dark Berry Cedar  Full-bodied )",
      img: "https://images.vivino.com/thumbs/1t3X5m8IRj67yeENNGDUcg_pb_x960.png",
      flag: "https://flagsapi.com/IT/flat/64.png",
    },
    {
      WineName: "Ornellaia 2013",
      Price: 199.97,
      CountryState: "Italy",
      Region: "Tuscany",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "Wine Spectator-Tuscany Italy - Vanilla toast and smoke notes shade the black cherry and plum aromas while the spicy oak theme carries over on the palate. A brash style that shows fine balance but this will require time to find equilibrium... (Elegant Cassis Berry Cedar  Full-bodied )",
      img: "https://images.vivino.com/thumbs/9Py47A5USOmNIYquq0JNrg_pb_x960.png",
      flag: "https://flagsapi.com/IT/flat/64.png",
    },
    {
      WineName: "Chateau Cos DEstournel St Estephe 2015",
      Price: 189.97,
      CountryState: "France",
      Region: "Bordeaux",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "James Suckling-St. Estephe Bordeaux France - Super aromas of nutmeg cloves and dried flowers with plums and blackberries. Subtle yet so complex. Full-bodied tight and integrated with ultra-fine tannins and a beautiful finish. Lasts for minutes. Very very Cos. Harmony. Texturally marvellous. (Concentrated Black Currant Blueberry  Full-bodied )",
      img: "https://images.vivino.com/thumbs/8EzYHdeCTTu12XZ-_bWAmw_pb_x960.png",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Echion Cabernet Sauvignon 2014",
      Price: 179.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "James Suckling-Napa Valley CA - Extremely floral and fresh with very firm and silky tannins. Hints of spices and dried fruits. Full-bodied tight and refined... A blend of two top Oakville vineyards. Beautiful thing. (Intense Spice Dried Fruit  Full-bodied )",
      img: "https://images.vivino.com/thumbs/0667TG7qS2KsRLsShMTjAw_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Caymus Cabernet Special Selection 2014",
      Price: 174.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Spectator-Napa Valley CA- Pure and rich well-centered on melted black licorice spice cedar and dark berry flavors. Deep and complex if short on finesse and grace ending with musclebound tannins. (Elegant Cassis Spice Mocha  Full-bodied )",
      img: "https://images.vivino.com/thumbs/ICtj7J6-Q0aH7c3GtLrs_w_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Adobe Road Cab Beckstoffer A1Block 2013",
      Price: 174.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Spectator-Rutherford CA - Amazingly sleek and refined with a pure rich juicy core of blackberry raspberry anise cedar and black licorice flavors. Walks a tightrope between intensity and grace finesse and authority. Long and persistent on the aftertaste. (Refined Blackberry Anise Cedar  Full-bodied )",
      img: "https://images.vivino.com/thumbs/gWTUt1g6QhyPuUCf6SKqAA_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Caymus Cabernet 2015",
      Price: 159.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Advocate-Napa CA- The perfumed black fruit preserves and chocolate-laced notes completely pack the full-bodied palate with soft velvety tannins and just enough freshness finishing very long and very spicy. Definitely one for hedonists seeking immediate gratification. (Elegant Cassis Blackberry Mocha  Full-bodied )",
      img: "https://images.vivino.com/thumbs/hqQ0md6CRhebI2YayYqJqg_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Bevan Pinot Noir Ritas Crown Vineyard",
      Price: 89.99,
      CountryState: "California",
      Region: "Santa Barbara",
      ProductType: "Red Wine",
      VarietalType: "Pinot Noir",
      Description:
        "Santa Rita Hills Santa Barbara CA- A voluptuous bold Pinot Noir with radiant flavors of black cherry pomegranate tea and baking spices. The finish is supple seductive and silky and provides outstanding structure and nuance. (Elegant Black Cherry Pomegranate  Full-bodied )",
      img: "https://images.vivino.com/thumbs/cTaT_cJcSPi5Mw-iuOUUqg_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Ghost Block Cabernet Oakville Estate",
      Price: 89.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Oakville Napa CA- Certified organically grown 100% estate Cabernet Sauvignon from the Rock Cairn Vineyard. A big shouldered wine that has intense flavors of chocolate and black cherries with very nicely balanced tannins. Made by winemaker Rob Lawson. Organically Farmed. (Intense Black Cherry Chocolate  Full-bodied )",
      img: "https://images.vivino.com/thumbs/xzaSp1kWQKaoKqo4sBnDtg_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Levendi Cabernet Stagecoach Vineyard 2014",
      Price: 89.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "The Tasting Panel-Napa Valley CA - Sleek aromas of pencil shavings on blackcurrants spark intrigue. This pedigreed vineyard offers up dark chocolate within a blackberry nectar. Earth tones and sandalwood along with jasmine-dusted Italian herbs make this an artful red. (Intense Blackberry Dark Chocolate  Full-bodied )",
      img: "https://images.vivino.com/thumbs/e5hunX9qQ-21j_s83veXFA_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Barnett Cabernet Spring Mountain 2015",
      Price: 89.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Advocate-Spring Mountain Napa CA- ...opens with a cassis plums and black cherries nose with cedar dried roses and black soil hints plus a touch of charcuterie. There are plenty of baked berries and earthy layers in the full-bodied mouth with a chewy backbone and savory finish. (Elegant Blueberry Raspberry  Medium-bodied )",
      img: "https://images.vivino.com/thumbs/U0c6SVz0T_2FXBQ7CgytJA_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Melka CJ Cabernet Napa Valley 2014",
      Price: 89.98,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Advocate-Napa CA- This is a beauty coming from various Napa AVAs. Melka is fanatical about getting high but soft silky tannins in his wines and this wine certainly showcases that talent. Deep opaque ruby/purple in color with notes of mulberry licorice... (Concentrated Black Cherry Raspberry Oak  Full-bodied )",
      img: "https://images.vivino.com/thumbs/k5gDJtGqSGCLNIFFpGrk_g_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Titus Cabernet Napa Reserve",
      Price: 84.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Napa CA- The maverick flair of brothers Eric(grape grower) and Phillip Titus(winemaker) keeps their outstanding wines a bit under the radar and a treat for those who discover them. Multi-layered notes of violet smoke and coffee accent plush aromas and flavors of blackberry and mocha. (Elegant Berry Plum Smoke  Full-bodied )",
      img: "https://images.vivino.com/thumbs/FZy7WJtBQnWwkHYE0ZEmDw_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Nickel &amp; Nickel Cabernet CC Ranch 2013",
      Price: 84.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Wine Enthusiast -Rutherford Napa CA- It shows the ripeness of the vintage as well exhibiting black inky color and a thick concentration of dark fruit and chocolate. Woody and herbaceous it also offers a full-bodied smoothness of tannin with robust dusty oak on the finish. (Intense Cherry  Full-bodied )",
      img: "https://images.vivino.com/thumbs/jmcFV7d5TDu8DMJ1T5MVWA_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Nickel &amp; Nickel Cabernet Quarry 2014",
      Price: 84.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Rutherford Napa CA- Berry fruit is well-integrated with earth dried leaves herbs cigar box and mineral flavors. Round and expansive this full-bodied Cabernet boasts impressive length in its finish. The French oak adds a distinctive spicy characteristic to this fabulous wine. ()",
      img: "https://images.vivino.com/thumbs/g4oyrTGWTy6aahToUCU_tQ_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Domaine De Chevalier Pessac Leognan 2015",
      Price: 84.99,
      CountryState: "France",
      Region: "Bordeaux",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "James Suckling-Pessac Bordeaux France -  Suave spicy oak and warm stony aromas making immediate interest and giving way to vivid and fresh dark cherries blackberries and cassis. The palate adds graphite-like savory cherry-stone flavors amid smooth velvety tannins. (Concentrated Black Fruit Stone  Medium-bodied )",
      img: "https://images.vivino.com/thumbs/O4e2DlxNTieRru7u1ymtVw_pb_x960.png",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Duckhorn Merlot Three Palms 2013",
      Price: 84.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Merlot",
      Description:
        "Wine Spectator-Napa California - Combines good structure with a supple texture showing aromas of red currant and dark chocolate and layered flavors of cherry spice and licorice. Drink now through 2028. (Intense Cherry Cedar Spice  Full-bodied )",
      img: "https://images.vivino.com/thumbs/IWPiy5GBR4CVAG8v3L3EjQ_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Chateau Beaucastel Chateauneuf-du-Pape Rouge 2015",
      Price: 84.99,
      CountryState: "France",
      Region: "Rhone",
      ProductType: "Red Wine",
      VarietalType: "Rhone Blend",
      Description:
        "Wine Advocate-Rhone France - Loaded with black cherry fruit and cola-like spice this full-bodied richly textured wine never seems heavy or warm while exotic Indian spice notes linger on the finish. (Concentrated Blackberry Truffle  Full-bodied )",
      img: "https://images.vivino.com/thumbs/MvUpIVUSRVazthpnz34JLQ_pb_x960.png",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Chimney Rock Elevage 2013",
      Price: 80.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Antonio Galloni-Stags Leap Napa CA- A dark beguiling beauty the 2013 is pliant explosive and intense from start to finish. Remarkably light on its feet for such and opulent wine the 2012 impresses for its depth and pure resonance. Barrel score (90-93) (Elegant Cassis Cherry Mocha  Medium-bodied )",
      img: "https://images.vivino.com/thumbs/NlbQmg7IRIya0f46mh0WzQ_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Caymus Cabernet 2016",
      Price: 79.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Napa CA- Possibly Californias most consistent producer of great Cabernet the Wagner family are Napa pioneers. Featuring sweet ripe blackberry flavors with undertones of mocha and toasted oak. A classy balanced wine that tastes delicious when bottled but can improve with age. (Concentrated Blackberry Spice  Full-bodied )",
      img: "https://images.vivino.com/thumbs/hqQ0md6CRhebI2YayYqJqg_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Chateau Durfort Vivens Margaux 2010",
      Price: 79.99,
      CountryState: "France",
      Region: "Bordeaux",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "Wine Enthusiast -2nd Growth Margaux Bordeaux France- An ugly duckling at en primeur time this has since blossomed into a wine that is structured tending toward severity. Yet it also has richness in the form of layered black fruit with smooth wood influence and tight acidity on the finish. (Concentrated Cedar Red Fruit  Full-bodied )",
      img: "https://images.vivino.com/thumbs/UsMB8NgIS-iHuMAmrjNUCA_pb_x960.png",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Heitz Cabernet Trailside 2010",
      Price: 79.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Rutherford Napa CA- This single vineyard wine features a supple core of currant plum and black cherry fruit with touches of mocha and vanilla laced oak. Distinguished by a wonderful sense of harmony and finesse on the lingering cedary finish. (Elegant Cassis Plum Mocha  Full-bodied )",
      img: "https://images.vivino.com/thumbs/hixqqIskQp6jtJbnDyuclg_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
    {
      WineName: "Chateau Durfort Vivens Margaux 2010",
      Price: 79.99,
      CountryState: "France",
      Region: "Bordeaux",
      ProductType: "Red Wine",
      VarietalType: "Bordeaux Blend",
      Description:
        "Wine Enthusiast -2nd Growth Margaux Bordeaux France- An ugly duckling at en primeur time this has since blossomed into a wine that is structured tending toward severity. Yet it also has richness in the form of layered black fruit with smooth wood influence and tight acidity on the finish. (Concentrated Cedar Red Fruit  Full-bodied )",
      img: "",
      flag: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      WineName: "Heitz Cabernet Trailside 2010",
      Price: 79.99,
      CountryState: "California",
      Region: "Napa Valley",
      ProductType: "Red Wine",
      VarietalType: "Cabernet Sauvignon",
      Description:
        "Rutherford Napa CA- This single vineyard wine features a supple core of currant plum and black cherry fruit with touches of mocha and vanilla laced oak. Distinguished by a wonderful sense of harmony and finesse on the lingering cedary finish. (Elegant Cassis Plum Mocha  Full-bodied )",
      img: "https://images.vivino.com/thumbs/UsMB8NgIS-iHuMAmrjNUCA_pb_x960.png",
      flag: "https://flagsapi.com/US/flat/64.png",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 pt-32 ">
      {mockData.map((wine, index) => (
        <div className="wine-container" key={index}>
          <WineDetail wine={wine} />
        </div>
      ))}
    </div>
  );
}

let cartData = JSON.parse(localStorage.getItem("cartitems"))
cartData.map(function(elem,inedx){
    //A.Creation  (HTML elements)
    //main div (image+  all data)(for appending )
    //buttonDiv (remove+save--flex)only rightside(for appending)
    // imageDiv (left append image only )
    // 1.name 
    // 2.price
    // 3. category
    // 4 imagesSrc
    let div = document.createElement("div")


    let buttonDiv = document.createElement("div")
    let dataDiv = document.createElement("div")
    let imageDiv = document.createElement("div")


    let name = document.createElement("p")
    let category = document.createElement("p")
    let price = document.createElement("p")


    let imagesSrc = document.createElement("img")

    let saveButton = document.createElement("button")
    let removeButton = document.createElement("button")
    //B.Appending 

    document.querySelector("#cart").append(div)
    div.append(imageDiv,dataDiv)
    dataDiv(name,category,price,buttonDiv)
    imageDiv.append(imgSrc)
    buttonDiv.append(saveButton,removeButton)
    //C.Mapping 

    name.innerText = elem.name
    category.innerText=elem.category
    rating.innerText= elem.rating
    price.innerText = elem.price

    imagesSrc.src = elem.imagesSrc

    removeButton.innerText= "remove"
    saveButton.innerText= "Save For Later"
   


    //Adding the events(2)
    removeButton.addEventListener("click",removeMe())
    saveButton.addEventListener("click",saveMe())
   

})
let furnituredata=[
    {
        "name" : "Futzca Modern L-shaped Compact Convertible Sectional Sofa w/ Reversible Chaise",
        "category" : "Sofa",
        "price" : "41500",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/47c9ae93df558cc6a7214693e20c3b81a9dd4523/Futzca-Convertible-Sectional-Sofa-Couch-with-Reversible-Chaise%2C-Modern-Linen-Fabric-L-Shaped-Couch-for-Small-Space.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Rosevera Bjorn Chesterfield Settee",
        "category" : "Sofa",
        "price" : "31000",
        "rating": "5",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/696a26f965a1db3bf2c6b1db928a2931f0ad78d4/Rosevera-Bjorn-Chesterfield-Settee.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Jaxx Zipline Convertible Queen-size Sleeper Loveseat and Ottoman Set",
        "category" : "Sofa",
        "price" : "50000",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/10184613/Jaxx-Zipline-Queen-size-Convertible-Sleeper-Loveseat-and-Ottomans-Bed-8a51de72-6fd6-44ef-a536-8a24b970055d_600.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Yaheetech Modern Recliner Couch Faux Leather Futon Sofa Bed",
        "category" : "Sofa",
        "price" : "23.75",
        "rating": "3",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/420ef8e18a068fec06915fe947b54c5486b9033d/Yaheetech-Modern-Recliner-Couch-Faux-Leather-Futon-Sofa-Bed.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Futzca 63'' Small Modern Loveseat Couch, 2-Seat Couch Tufted Love Seat for Small Space",
        "category" : "Sofa",
        "price" : "50000",
        "rating": "2",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/d93481f12299c5dc484c1f4dbd7e40bc64cdf592/Futzca-63%E2%80%99%E2%80%99-Small-Modern-Loveseat-Couch%2C-2-Seat-Couch-Tufted-Love-Seat-for-Small-Space.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Knightsbridge Beige Chesterfield Sofa and Seating by iNSPIRE Q Artisan",
        "category" : "Sofa",
        "price" : "36000",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/f197e93d5efe0ca8a11726e86315e7c68bf39ef2/Knightsbridge-Beige-Fabric-Button-Tufted-Chesterfield-Sofa-and-Seating-by-iNSPIRE-Q-Artisan.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Barto Comfy 45 Loveseat with Tufted Back",
        "category" : "Sofa",
        "price" : "32000",
        "rating": "5",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/5fefa8fdc8f4b5e3e189538c6d53e0a04ec69288/Barto-Comfy-45%22Loveseat-with-Tufted-Back.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Arvilla Velvet Kitts Classic Chesterfield Sofa",
        "category" : "Sofa",
        "price" : "250000",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/4ac334b33f52e32abc23730bc8ed62ad3c173097/Arvilla-Velvet-Kitts-Classic-Chesterfield-Sofa.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Velvet Tufted Accent Sofa Modern Sofa Bed",
        "category" : "Sofa",
        "price" : "49000",
        "rating": "5",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/7b8a5d69328083a6e50612f4605f047a9884296c/Velvet-Tufted-Accent-Sofa-Modern-Sofa-Bed.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "W Linen Fabric Modern Convertible Sofa Bed with Removable Armrests",
        "category" : "Sofa",
        "price" : "60099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/8aff643553544320bf22ea6dbf19e026e39295f2/71.65%22W-Linen-Fabric-Modern-Convertible-Sofa-Bed-with-Removable-Armrests.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Silver Orchid Winters Glam Button-tufted Velvet Loveseat",
        "category" : "Sofa",
        "price" : "64020",
        "rating": "3",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/711f1daadf1cb93c90e0ab7b71a9c5fddda2ab50/Silver-Orchid-Winters-Velvet-Loveseat.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Sofa Bed Backrest Recline Three-speed Adjustment Backrest",
        "category" : "Sofa",
        "price" : "54000",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/f1269b1a3efaed2abd3da21069f46d659599fb66/Sofa-Bed-Backrest-Recline-Three-speed-Adjustment-Backrest.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Left Hand Facing Stationary Corner Velvet Sectional Sofa Set with Metal Legs, Black",
        "category" : "Sofa",
        "price" : "90025",
        "rating": "2",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/f605176b4d6a2184c4ec74c1abfbcf7eba4998ca/Left-Hand-Facing-Stationary-Corner-Velvet-Sectional-Sofa-Set-with-Metal-Legs%2C-Black.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Mordern Upholstery Sleeper Sectional Sofa Grey with Storage Space",
        "category" : "Sofa",
        "price" : "200000",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/c11f7bfad54dd5323917eb6e29cf62b784f826dd/Mordern-Upholstery-Sleeper-Sectional-Sofa-Grey-with-Storage-Space.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Linen Sectional Sofa, L-Shape With Wide Armrest-Beige",
        "category" : "Sofa",
        "price" : "150080",
        "rating": "1",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/3b051dd28f6c37293739ba0e61829ef08a9ea483/Linen-Sectional-Sofa%2C-L-Shape-With-Wide-Armrest-Beige.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Leo Dark Gray Woven 6 Seater Sofa and Ottoman",
        "category" : "Sofa",
        "price" : "159000",
        "rating": "3",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/a5b05323ab718c281ff2498222a6ef15f864a0e6/Leo-Dark-Gray-Woven-6-Seater-Sofa-and-Ottoman.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "90 L L-Shaped Reversible Pull out Sleeper,Sectional Storage Sofa Bed",
        "category" : "Sofa",
        "price" : "170050",
        "rating": "5",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/ce37b3a8bc3ae81222c1edbf7b4e9ae9ede1332e/90%22-L-L-Shaped-Reversible-Pull-out-Sleeper%2CSectional-Storage-Sofa-Bed.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "L-Shape Modern Linen Pillow Back Reversible Sectional Sofa with Ottoman, 2 Square Arms and 3 Toss Pillows",
        "category" : "Sofa",
        "price" : "187045",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/d9296cfbe657e5dde756e72ed6b9cad3c0a8b4f1/L-Shape-Modern-Linen-Pillow-Back-Reversible-Sectional-Sofa-with-Ottoman%2C-2-Square-Arms-and-3-Toss-Pillows.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Daybed with Trundle Upholstered Tufted Sofa Bed, with Button and Copper Nail on Arms，both Twin Size, PU Black",
        "category" : "Sofa",
        "price" : "62400",
        "rating": "3",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/7753aa3ca9a29009073447e283aca14e01e9a9fd/Daybed-with-Trundle-Upholstered-Tufted-Sofa-Bed%2C-with-Button-and-Copper-Nail-on-Arms%EF%BC%8Cboth-Twin-Size%2C-PU-Black.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Modern Style Fabric Tufted Sofa with 2 Pillows, Velvet Loveseat with Multiple Adjustable Positions for Living Roo",
        "category" : "Sofa",
        "price" : "188099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/8b52a388382bdd1c1906702ca12a9bccdfbdfdbc/Modern-Style-Fabric-Tufted-Sofa-with-2-Pillows%2C-Velvet-Loveseat-with-Multiple-Adjustable-Positions-for-Living-Roo.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    },
    {
        "name" : "Morden Style Sofa Set Couch Furniture Upholstered Armchair, Loveseat and Three Seat Sofa for Home or Office (1+2+3-Seat)",
        "category" : "Sofa",
        "price" : "288099",
        "rating": "4",
        "imgSrc" : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0d8c0749c643ad8580f8257c06ab5d75d552c76/Morden-Style-Sofa-Set-Couch-Furniture-Upholstered-Armchair%2C-Loveseat-and-Three-Seat-Sofa-for-Home-or-Office-%281%2B2%2B3-Seat%29.jpg?imwidth=480&impolicy=medium"
    }
]
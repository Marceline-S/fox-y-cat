fetch('https://randomfox.ca/floof')
    .then(response => response.json())
    .then(convertedData => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = convertedData.image
        }
    )

const fetchCat = async () => {
    const jsonObject = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false') //Link to pull from here!
    const objectFromJson = await jsonObject.json()
    const catImgElement = document.querySelector("#cat")
    catImgElement.src = objectFromJson[0]
}

fetchCat()
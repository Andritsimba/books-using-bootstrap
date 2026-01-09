fetch("elements/itemsGroups/activityWeekly.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            return response.json();
        }

    }).then(activityData => {
        loadActivity(activityData);

    }).catch(error => {
        console.error('Error fetching activity data:', error);
    }
    );


function loadActivity(activityData) {
  
    const cardItems = Array.isArray( activityData.activityWeekly) ?   activityData.activityWeekly : [];
    if (cardItems.length <= 0) {
        console.warn('No activity data found.');
        return;
    }

    const groupsBody = document.querySelector(".groups-body");
    const fragment = document.createDocumentFragment();
    const shuffledItems = shuffleArray(cardItems);
    shuffledItems.forEach(item => {
        let widthPx = 400;
        const cardItem = document.createElement("div");
        cardItem.classList.add("item-card", "d-flex", "border");
        cardItem.dataset.id = item.id;
        cardItem.style.width = `${widthPx}px`;
        const cardImage = createImg(item);
        const cardBody = getCardBody(item);
        cardItem.append(cardImage, cardBody);
        cardItem.dataset.aos = "zoom-in";
        cardItem.dataset.aos.duration = "150";
        cardItem.dataset.aos.easing = "ease-in-sine";
        cardItem.dataset.aos.delay = "0";
        fragment.appendChild(cardItem);
    })
    groupsBody.append(fragment);

    if(!activityData.hasNextPage){
        const showMoreBtn = document.getElementById('showMoreBtn');
        if(showMoreBtn){
            showMoreBtn.style.display = 'none';
            return;
        }
    }
}

function createImg(item) {
    const img = document.createElement("img");
    img.src = item.icon;
    img.alt = item.name;
    img.width = 100;
    img.height = 100;
    img.dataset.aos = "zoom-in";
    img.dataset.aos.easing = "ease-in-back";
    img.dataset.aos.delay = "150";
    img.classList.add("border");
    return img;
}

function getCardBody(item) {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "my-2", "px-3");
    const hLvl5 = document.createElement("h5");
    hLvl5.classList.add("card-title");
    hLvl5.textContent = item.name;
    hLvl5.dataset.aos = "zoom-in";
    hLvl5.dataset.aos.easing = "ease-in-sine";
    hLvl5.dataset.aos.delay = "150";
    cardBody.appendChild(hLvl5);

    let countMessage = item.count ?? 0;
    const spanCount = document.createElement("span");
    spanCount.classList.add("text-body-secondary", "d-block", "small");
    spanCount.textContent = `${countMessage} message this week`;
    spanCount.dataset.aos = "zoom-in";

    spanCount.dataset.aos.easing = "ease-in-back";
    spanCount.dataset.aos.delay = "350";
    cardBody.appendChild(spanCount);

    const para = document.createElement("p");
    para.classList.add("card-text");
    para.textContent = item.description;
    para.dataset.aos = "zoom-in";
    para.dataset.aos.easing = "ease-in-back";
    para.dataset.aos.delay = "600";
    cardBody.appendChild(para);

    return cardBody;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getUrlNextPage(){
    const linkElement = document.querySelector('link[rel="next-page"]');
    return linkElement ? linkElement.href : null;
}

function loadNextPageData(){
    const nextPageUrl = getUrlNextPage();
    if(!nextPageUrl){
        console.warn('URL next page not found.');
        return;
    }
    fetch(nextPageUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            return response.json();
        }

    }).then(activityData => {
        loadActivity(activityData);

    }).catch(error => {
        console.error('Error fetching activity data:', error);
    })
}

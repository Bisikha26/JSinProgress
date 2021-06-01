// How are the new cards getting cloned from the template?

const template = document.querySelector("template");

const copyTemplateCard = (resourceData) => {
    const resourceTemplate = document.importNode(template.content, true);
    const card = resourceTemplate.querySelector("#resource");

    // insert title info on card
    const title = card.querySelector("#title");
    title.innerText = resourceData.title;
    title.href = resourceData.link;

    // insert description information from array
    const description = card.querySelector("#description");
    description.innerText = resourceData.description;

    // insert tag info from array
    const tagsContainer = card.querySelector("#tagsContainer");
    resourceData.tags.map(resourceDataTag => {
        const individualTag = document.createElement("span");
        if (resourceDataTag !== 'all') {
            individualTag.innerHTML = `#${resourceDataTag}`;
            tagsContainer.appendChild(individualTag);
        }
    })
    return card;
}

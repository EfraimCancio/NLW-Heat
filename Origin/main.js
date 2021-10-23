const LinksSocialMedia = {
    github: "EfraimCancio",
    youtube: "watch?v=teUHaLjReQ0",
    facebook:"efraim.cancio",
    instagran: "efraimfonseca",
    twitter: "jakelinytec"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
       const social = li.getAttribute("class")
       li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => alert(data.id))
}

getGitHubProfileInfos()
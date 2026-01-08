// All Handles Data Object ****************************************************

let linktreeData = [
  {
    id: 1,
    handleName: "Download",
    handleText: "Contact vCard",
    handleLink:
      "assets/STVN.vcf",
    imgSrc: "images/icons/generic-community.svg",
    imgAlt: "Community",
  },
  {
    id: 2,
    handleName: "hi@stvnr.co",
    handleText: "Send Message",
    handleLink: "mailto:hi@stvnr.co?subject=Looking%20to%20connect",
    imgSrc: "images/icons/generic-email.svg",
    imgAlt: "eMail",
  },
  {
    id: 3,
    handleName: "Schedule",
    handleText: "Let's Chat",
    handleLink: "https://app.reclaim.ai/m/stvn",
    imgSrc: "images/icons/calendly.svg",
    imgAlt: "LinkedIn",
  },
  {
    id: 4,
    handleName: "Website",
    handleText: "Learn More About Steven",
    handleLink: "https://www.stevenarodriguez.com/?utm_source=hi.stvnr.co",
    imgSrc: "images/icons/generic-homepage.svg",
    imgAlt: "Community",
  },
  {
    id: 5,
    handleName: "Amazon",
    handleText: "Book - Exponential Individuals Playbook",
    handleLink: "https://amzn.to/3NsMQcF",
    imgSrc: "images/icons/generic-blog.svg",
    imgAlt: "Amazon",
  },
  {
    id: 6,
    handleName: "Amazon",
    handleText: "BOOK - Exponential Organizations 2.0",
    handleLink: "https://amzn.to/3XtfPBy",
    imgSrc: "images/icons/generic-blog.svg",
    imgAlt: "Youtube",
  },
  {
    id: 7,
    handleName: "LinkedIn",
    handleText: "Currículum Vitae",
    handleLink: "https://www.linkedin.com/in/stevenarodriguez",
    imgSrc: "images/icons/linkedin.svg",
    imgAlt: "LinkedIn",
  },
  {
    id: 8,
    handleName: "Steven's Blog",
    handleText: "Success Habits On Tap",
    handleLink: "https://www.stevenarodriguez.com/blog/?utm_source=hi.stvnr.co",
    imgSrc: "images/icons/generic-rss.svg",
    imgAlt: "Website",
  },
  {
    id: 9,
    handleName: "Global Entrepreneurship Network",
    handleText: "Start & Scale Globally",
    handleLink: "https://go.genglobal.org/?utm_source=hi.stvnr.co",
    imgSrc: "images/icons/generic-website.svg",
    imgAlt: "Website",
  },
  {
    id: 10,
    handleName: "BloomShift",
    handleText: "Turn On Your Lead Generation",
    handleLink: "https://www.bloomshift.com/?utm_source=hi.stvnr.co",
    imgSrc: "images/icons/generic-website.svg",
    imgAlt: "Website",
  },
  {
    id: 11,
    handleName: "OrangeUP",
    handleText: "Outsource Staff On Demand",
    handleLink: "https://orangeup.info/?utm_source=hi.stvnr.co",
    imgSrc: "images/icons/generic-website.svg",
    imgAlt: "Website",
  },
  {
    id: 12,
    handleName: "CrowdWork",
    handleText: "Business Transformation",
    handleLink: "https://crowdwork.coop/?utm_source=hi.stvnr.co",
    imgSrc: "images/icons/generic-website.svg",
    imgAlt: "Website",
  },
];

// All Handles Preview Mapping ****************************************************

let linktreeDiv = document.querySelector("#linktreeHandles");

Object.values(linktreeData).map((val) => {
  linktreeDiv.innerHTML += `
        <!-- Social Handle ${val.id} -->
        <div class="handle_card">
            <span><img src="${val.imgSrc}" class="watermark" alt="Watermark" /></span>
            <img src="${val.imgSrc}" alt="${val.imgAlt}" />
            <p>${val.handleText}</p>
            <a href="${val.handleLink}" target="_blank" rel="noopener">
                ${val.handleName}
            </a>
        </div>
    `;
});

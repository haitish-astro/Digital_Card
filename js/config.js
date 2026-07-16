/*
  Mobility Plus digital business card configuration.

  Replace every fictional placeholder below with approved public business
  information before launch. Do not put official company or representative
  details in index.html or app.js.
*/
window.CARD_CONFIG = Object.freeze({
  isPlaceholder: true,
  placeholderNotice:
    "Fictional placeholder information only. Replace all fields in js/config.js before launch.",

  // Replace this section with approved public company information.
  company: {
    name: "Fictional Mobility Demo Co.",
    initials: "FM",
    tagline: "Placeholder mobility support",
    description:
      "This is fictional placeholder copy for a static digital business card. Replace it with approved public company messaging.",
    websiteUrl: "https://example.com/fictional-mobility-demo",
    serviceArea: "Placeholder Service Area, Example State",
    publicCardUrl: "https://example.github.io/mobility-plus-digital-card/"
  },

  // Replace this section with approved public representative information.
  representative: {
    fullName: "Alex Placeholder",
    title: "Demo Accessibility Consultant",
    phoneDisplay: "(555) 010-1357",
    phoneHref: "+15550101357",
    smsHref: "+15550101357",
    email: "alex.placeholder@example.com"
  },

  // Replace this section with the approved public service location or map target.
  location: {
    label: "Placeholder Map",
    addressDisplay: "123 Example Avenue, Demo City, ST 00000",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=123%20Example%20Avenue%20Demo%20City%20ST%2000000"
  },

  // Edit these labels only when the planned public feature list changes.
  plannedFeatures: [
    "Save Contact vCard",
    "Share Card",
    "Copy Link",
    "Transferable QR Code"
  ]
});

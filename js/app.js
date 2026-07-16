(function () {
  "use strict";

  var config = window.CARD_CONFIG;

  if (!config) {
    document.body.classList.add("config-error");
    return;
  }

  var fields = {
    placeholderNotice: config.placeholderNotice,
    companyInitials: config.company.initials,
    companyTagline: config.company.tagline,
    representativeName: config.representative.fullName,
    representativeTitle: config.representative.title,
    companyName: config.company.name,
    companyDescription: config.company.description,
    serviceArea: config.company.serviceArea,
    publicCardUrl: config.company.publicCardUrl
  };

  Object.keys(fields).forEach(function (fieldName) {
    var nodes = document.querySelectorAll('[data-field="' + fieldName + '"]');
    nodes.forEach(function (node) {
      node.textContent = fields[fieldName] || "";
    });
  });

  document.title = config.company.name + " | Digital Business Card";

  renderContactActions(config);
  renderPlannedFeatures(config.plannedFeatures);

  function renderContactActions(cardConfig) {
    var container = document.getElementById("contact-actions");

    if (!container) {
      return;
    }

    var actions = [
      {
        label: "Call",
        detail: cardConfig.representative.phoneDisplay,
        href: "tel:" + cardConfig.representative.phoneHref
      },
      {
        label: "Text",
        detail: cardConfig.representative.phoneDisplay,
        href: "sms:" + cardConfig.representative.smsHref
      },
      {
        label: "Email",
        detail: cardConfig.representative.email,
        href: "mailto:" + cardConfig.representative.email
      },
      {
        label: "Website",
        detail: cardConfig.company.websiteUrl,
        href: cardConfig.company.websiteUrl
      },
      {
        label: "Map",
        detail: cardConfig.location.addressDisplay,
        href: cardConfig.location.mapUrl
      }
    ];

    actions.forEach(function (action) {
      var link = document.createElement("a");
      var label = document.createElement("span");
      var detail = document.createElement("span");

      link.className = "action-link";
      link.href = action.href;

      if (action.label === "Website" || action.label === "Map") {
        link.rel = "noopener";
      }

      label.textContent = action.label;
      detail.className = "action-type";
      detail.textContent = action.detail;

      link.append(label, detail);
      container.appendChild(link);
    });
  }

  function renderPlannedFeatures(features) {
    var list = document.getElementById("planned-features");

    if (!list || !Array.isArray(features)) {
      return;
    }

    features.forEach(function (feature) {
      var item = document.createElement("li");
      item.textContent = feature + " - planned, not implemented yet";
      list.appendChild(item);
    });
  }
})();

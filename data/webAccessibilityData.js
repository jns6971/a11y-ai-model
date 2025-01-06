const rawData = [
  {
    url: "example.com/page1",
    elements: [
      {
        type: "img",
        altText: "Description of image",
        contrastRatio: "4.5", // WCAG AA contrast for normal text
        hasAriaLabel: false,
        isInvisible: false, // If the element is hidden from screen readers
      },
      {
        type: "a",
        href: "#",
        textContent: "Link Text",
        contrastRatio: "7.0", // WCAG AAA contrast for normal text
        hasAriaLabel: false,
      },
      {
        type: "button",
        textContent: "Submit",
        contrastRatio: "3.0", // Below WCAG AA contrast ratio
        hasAriaLabel: true,
        ariaLabel: "Submit form",
      },
      {
        type: "div",
        textContent: "",
        role: "alert",
        contrastRatio: "2.0", // Very low contrast
        hasAriaLabel: false,
      }
    ]
  },
  // More pages or elements here...
];

export { rawData };
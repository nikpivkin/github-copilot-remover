const classesToRemove = [
  ".copilotPreview__container",
  ".AppHeader-CopilotChat"
];

classesToRemove.forEach((className) => {
  const element = document.querySelector(className);
  if (element) {
    element.remove();
    console.log(`Element with class '${className.substring(1)}' has been removed.`);
  }
});
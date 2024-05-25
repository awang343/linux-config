// The async modifier allows for the user of await, which converts a promise into an object, when not using await, async is not necessary.
(async function extension() {
  // The following code segment waits for platform to load before running the code, this is important to avoid errors. When using things such as Player or URI, it is necessary to add those as well.
  const { Platform } = Spicetify;
  if (!Platform) {
    setTimeout(extension, 300);
    return;
  }
  console.log('Hello world!');
  document.getElementsByClassName("Root__main-view")[0].focus()
})();

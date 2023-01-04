const button = document.getElementById("btn");
const image = document.getElementById("img");
const url = "http://aws.random.cat/meow";

async function func() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}
button.addEventListener("click", () => {
    let isLoaded = image.complete;
  
    if (isLoaded) {
      func();
    }
  });
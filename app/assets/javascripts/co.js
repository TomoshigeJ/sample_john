function previewImage() {
  const target = this.event.target;
  const file = target.files[0];
  const reader  = new FileReader();
  reader.onloadend = function () {
      const preview = document.querySelector("#preview")
      if(preview) {
          preview.src = reader.result;
      }
  }
  if (file) {
      reader.readAsDataURL(file);
  }

  console.log(target);
  console.log(file);
  console.log(reader);
}

function addButton() {
  const button = this.event.target;
  const buttonText = button.textContent
  const newElement = document.createElement('button');
  newElement.textContent = buttonText;

  const addTarget = document.querySelector('.add-button');
  addTarget.append(newElement);
}
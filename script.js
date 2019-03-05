const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // dataset is an object that combines all of the data- attributes
  // without || '', js will append undefined on the end
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

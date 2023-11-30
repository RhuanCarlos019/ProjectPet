let editMode = false;

function editProfile() {
  editMode = !editMode;
  const inputs = document.querySelectorAll('.user-info input[readonly]');
  inputs.forEach(input => input.removeAttribute('readonly'));

  const labels = document.querySelectorAll('.user-info label');
  labels.forEach(label => label.style.display = editMode ? 'block' : 'none');
}

function updateProfile() {
  editMode = false;
  const inputs = document.querySelectorAll('.user-info input');
  const data = {};

  inputs.forEach(input => {
    input.setAttribute('readonly', 'true');
    data[input.id] = input.value;
  });

  const feedbackMessage = document.getElementById('feedback-message');
  feedbackMessage.innerHTML = '';

  if (validateData(data)) {
    feedbackMessage.innerText = 'Dados atualizados com sucesso';
  } else {
    feedbackMessage.innerText = 'Dados incompletos, favor verificar';
  }
}

function loadProfilePic(event) {
  const input = event.target;
  const reader = new FileReader();

  reader.onload = function () {
    const img = document.getElementById("profile-pic");
    img.src = reader.result;
  };

  reader.readAsDataURL(input.files[0]);
}

function validateData(data) {
  // Adicione lógica de validação aqui
  // Por exemplo, você pode verificar se todos os campos obrigatórios estão preenchidos
  return data['user-name'] && data['vip-status'] && data['user-address'] && data['user-phone'];
}

function updateProfile() {
    editMode = false;
    const inputs = document.querySelectorAll('.user-info input');
    const data = {};
  
    inputs.forEach(input => {
      input.setAttribute('readonly', 'true');
      data[input.id] = input.value;
    });
  
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.innerHTML = '';
  
    if (validateData(data)) {
      feedbackMessage.classList.add('success-message');
      feedbackMessage.innerText = 'Dados atualizados com sucesso';
    } else {
      feedbackMessage.classList.add('error-message');
      feedbackMessage.innerText = 'Dados incompletos, favor verificar';
    }
  
    // Exibir a mensagem por 3 segundos
    setTimeout(() => {
      feedbackMessage.innerHTML = '';
      feedbackMessage.classList.remove('success-message', 'error-message');
    }, 3000);
  }

  function redirectToAccountPage() {
    window.location.href = 'conta.html';
  }
  
const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const fillFormField = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormField();

const onFormFieldInput = event => {
  // const formFieldEl = event.target;
  const { target: formFieldEl } = event;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  console.log(fieldName);
  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  const { currentTarget: formEl } = event;
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

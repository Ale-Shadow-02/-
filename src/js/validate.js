$(document).ready(function () {
  $("#headers-form").validate({
    rules: {
      user_name: 'required',
      user_phone: 'required'
    },
    messages: {
      user_name: 'Укажите своё имя',
      user_phone: 'Укажите свой телефон'
    }
  });
  $("#contacts-form").validate({
    rules: {
      user_name: 'required',
      user_phone: 'required'
    },
    messages: {
      user_name: 'Укажите своё имя',
      user_phone: 'Укажите свой телефон'
    }
  });
  $("#footer-form").validate({
    rules: {
      user_name: 'required',
      user_phone: 'required'
    },
    messages: {
      user_name: 'Укажите своё имя',
      user_phone: 'Укажите свой телефон'
    }
  });
  $("#modal-form").validate({
    rules: {
      user_name: 'required',
      user_phone: 'required'
    },
    messages: {
      user_name: 'Укажите своё имя',
      user_phone: 'Укажите свой телефон'
    }
  });
});
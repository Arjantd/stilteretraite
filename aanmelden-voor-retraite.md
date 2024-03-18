---
layout: sign-up
title: Aanmelden voor retraite
image: uploads/Page banner CONTACT.jpg
blocks:
- template: form
  submit_button_text: Verstuur
  submitting_button_text: Versturen...
  success_text: Het formulier is succesvol verstuurd.
  fail_text: Er is iets mis gegaan bij het versturen van het formulier.
  form_name: sign-up
  controls:
  - name: event
    label: ''
    placeholder: Evenement
    required: true
    type: Event select
    options: []
  - name: name
    label: ''
    required: true
    type: Text
    placeholder: Naam
    options: []
  - name: email
    placeholder: E-mail
    required: true
    type: E-mail
    label: ''
    options: []
  - type: Text area
    name: message
    label: ''
    placeholder: Vraag of opmerking
    required: false
  action: https://jxaxi5zqi1.execute-api.eu-central-1.amazonaws.com/beta/sendsignupform
script: "<script> $(() => { let event = getUrlParameter('event'); $('select[name=event]').val(event);
  $('input[name=name]').focus(); }); </script>"

---

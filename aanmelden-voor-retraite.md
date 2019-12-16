---
layout: sign-up
title: Aanmelden voor retraite
image: https://static.stilteretraite.nl/uploads/Event - retraite Italie 2.jpg
blocks:
- template: form
  submit_button_text: Verstuur
  submitting_button_text: Versturen...
  success_text: Het formulier is succesvol verstuurd.
  fail_text: Er is iets mis gegaan bij het versturen van het formulier.
  name: sign-up
  controls:
  - name: event
    label: ''
    placeholder: Evenement
    required: true
    type: Event select
    options: []
  - type: Text area
    name: Vraag of opmerking
    label: ''
    placeholder: Vraag of opmerking
    required: false
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
  action: https://jxaxi5zqi1.execute-api.eu-central-1.amazonaws.com/beta/sendsignupform
script: "<script> $(() => { let event = getUrlParameter('event'); $('select[name=event]').val(event);
  $('input[name=name]').focus(); }); </script>"

---

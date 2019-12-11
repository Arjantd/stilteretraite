---
layout: sign-up
title: Aanmelden voor retraite
image: https://static.stilteretraite.nl/uploads/Event - retraite Italie 2.jpg
blocks:
- template: form
  submit_button_text: Verzenden
  submitting_button_text: Verzenden...
  success_text: Het formulier is succesvol verstuurd.
  fail_text: Er is iets mis gegaan bij het versturen van het formulier.
  name: sign-up
  controls:
  - name: name
    label: ''
    required: true
    type: Text
    placeholder: Naam
  - name: email
    placeholder: E-mail
    required: true
    type: E-mail
    label: ''
  - name: event
    label: ''
    placeholder: Retraite
    required: true
    type: Text
  action: ''

---

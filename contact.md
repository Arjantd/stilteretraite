---
title: Contact
description: Contact Belkirk College
publish_date: '2017-12-01T04:00:00.000+00:00'
layout: contact
image: uploads/Page banner CONTACT.jpg
blocks:
- template: form
  success_text: Het formulier is succesvol verstuurd.
  fail_text: Er is iets mis gegaan bij het versturen van het formulier.
  action: https://jxaxi5zqi1.execute-api.eu-central-1.amazonaws.com/beta/sendContactForm
  controls:
  - type: Text
    label: ''
    name: name
    placeholder: Naam
    required: true
  - type: E-mail
    label: ''
    name: email
    placeholder: E-mail
    required: true
  - name: message
    label: ''
    type: Text area
    placeholder: Bericht
    required: true
  form_name: contact
  submit_button_text: Verzend
  fields: []
  submitting_button_text: Verzenden...
meta:
  title: Contact
  keywords: contact, formulier, mail, bericht
  description: Voor vragen en aanmeldingen kunt u gebruikmaken van ons contactformulier
  author: Robbert van Bruggen
menu:
  footer:
    weight: 4
  navigation:
    identifier: _contact
    weight: 7

---

---
title: Contact
description: Contact Belkirk College
publish_date: '2017-12-01T04:00:00.000+00:00'
layout: page
image: https://static.stilteretraite.nl/uploads/357.jpg
blocks:
- template: form
  success_text: Het formulier is succesvol verstuurd.
  fail_text: Er is iets mis gegaan bij het versturen van het formulier.
  action: https://jxaxi5zqi1.execute-api.eu-central-1.amazonaws.com/beta/sendContactForm
  fields:
  - name: message
    label: Bericht
    type: Text area
  - name: name
    label: Naam
    type: Text
  - name: email
    label: E-mail
    type: E-mail
menu:
  footer:
    weight: 4
  navigation:
    identifier: _contact
    weight: 7

---

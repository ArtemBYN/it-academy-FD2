"use strict";
const form = document.forms.info;

let authorField = form.elements.author;
authorField.addEventListener('blur', validAuthor, false);
let authorRow = document.getElementById('authorRow');
let newAuthorRow = document.createElement('span');
newAuthorRow.setAttribute('style', 'color:red');
authorRow.appendChild(newAuthorRow);

let titleSiteField = form.elements.titleSite;
titleSiteField.addEventListener('blur', validSite, false);
let siteRow = document.getElementById('siteRow');
let newSiteRow = document.createElement('span');
newSiteRow.setAttribute('style', 'color:red');
siteRow.appendChild(newSiteRow);

let urlSiteField = form.elements.urlSite;
urlSiteField.addEventListener('blur', validUrl, false);
let urlRow = document.getElementById('urlRow');
let newUrlRow = document.createElement('span');
newUrlRow.setAttribute('style', 'color:red');
urlRow.appendChild(newUrlRow);

let startDateField = form.elements.startDate;
startDateField.addEventListener('blur', validDate, false);
let dateRow = document.getElementById('startDateRow');
let newDateRow = document.createElement('span');
newDateRow.setAttribute('style', 'color:red');
dateRow.appendChild(newDateRow);

let personsField = form.elements.persons;
personsField.addEventListener('blur', validPersons, false);
let personsRow = document.getElementById('personsRow');
let newPersonsRow = document.createElement('span');
newPersonsRow.setAttribute('style', 'color:red');
personsRow.appendChild(newPersonsRow);

let mailField = form.elements.mail;
mailField.addEventListener('blur', validMail, false);
let mailRow = document.getElementById('mailRow');
let newMailRow = document.createElement('span');
newMailRow.setAttribute('style', 'color:red');
mailRow.appendChild(newMailRow);

let rubricField = form.elements.rubric;
rubricField.addEventListener('change', validRubric, false);
let rubricRow = document.getElementById('rubricRow');
let newRubricRow = document.createElement('span');
newRubricRow.setAttribute('style', 'color:red');
rubricRow.appendChild(newRubricRow);
let value = false;


let publicField = form.elements.public;
for (let i = 0; i < publicField.length; i++) {
  publicField[i].addEventListener('change', validPublic, false);
}

let publicRow = document.getElementById('publicRow');
let newPublicRow = document.createElement('span');
newPublicRow.setAttribute('style', 'color:red');
publicRow.appendChild(newPublicRow);

let commentsField = form.elements.comments;
commentsField.addEventListener('change', validComments, false);
let commentsRow = document.getElementById('commentsRow');
let newCommentsRow = document.createElement('span');
newCommentsRow.setAttribute('style', 'color:red');
commentsRow.appendChild(newCommentsRow);

let articleField = form.elements.article;
articleField.addEventListener('blur', validArticle, false);
let articleRow = document.getElementById('articleRow');
let newArticleRow = document.createElement('span');
newArticleRow.setAttribute('style', 'color:red');
articleRow.appendChild(newArticleRow);

form.addEventListener('submit', validateInfoForm, false);

function validAuthor(EO) {
  EO = EO || window.event;

  if (!authorField.value) {
    newAuthorRow.textContent = ' Вы не ввели Разработчиков!';
  } else newAuthorRow.textContent = null;
}

function validSite(EO) {
  EO = EO || window.event;
  if (!titleSiteField.value) {
    newSiteRow.textContent = ' Вы не ввели Название сайта!';
  } else if (titleSiteField.value.length > 30) {
    newSiteRow.textContent = ' Слишком длинное название!';
  } else newSiteRow.textContent = null;

}

function validUrl(EO) {
  EO = EO || window.event;
  if (!urlSiteField.value) {
    newUrlRow.textContent = ' Вы не ввели URL сайта!';
  } else newUrlRow.textContent = null;
}

function validDate(EO) {
  EO = EO || window.event;
  if (!startDateField.value) {
    newDateRow.textContent = ' Вы не ввели дату!';
  } else newDateRow.textContent = null;
}

function validPersons(EO) {
  EO = EO || window.event;
  if (!parseInt(personsField.value.trim())) {
    newPersonsRow.textContent = ' Вы не ввели количество посетителей!';
  } else newPersonsRow.textContent = null;
}

function validMail(EO) {
  EO = EO || window.event;
  if (!mailField.value) {
    newMailRow.textContent = ' Вы не ввели E-mail!';
  } else newMailRow.textContent = null;
}

function validRubric(EO) {
  EO = EO || window.event;
  value = true;
  if (rubricField.value == 3) {
    newRubricRow.textContent = ' Эта рубрика недоступна!';

  } else {
    newRubricRow.textContent = null;

  }
}

function validPublic(EO) {
  EO = EO || window.event;
  if (publicField.value === '') {
    newPublicRow.textContent = ' Размещение не выбрано!';
  } else newPublicRow.textContent = null;
}

function validComments(EO) {
  EO = EO || window.event;
  if (!commentsField.checked) {
    newCommentsRow.textContent = ' Пустое поле!';
  } else newCommentsRow.textContent = null;
}

function validArticle(EO) {
  EO = EO || window.event;
  if (!articleField.value) {
    newArticleRow.textContent = ' Нет описания сайта!';
  } else newArticleRow.textContent = null;
}

function validateInfoForm(EO) {
  EO = EO || window.event;
  validAuthor();
  validSite();
  validUrl();
  validDate();
  validPersons();
  validMail();

  validComments();
  validArticle();
  validPublic();

  if (value === false) {
    newRubricRow.textContent = ' Выберите рубрику!';
  }


  try {


    if (newAuthorRow.textContent) {
      authorField.focus();
      EO.preventDefault();
      return;
    }

    if (newSiteRow.textContent) {
      titleSiteField.focus();
      EO.preventDefault();
      return;
    }

    if (newUrlRow.textContent) {
      urlSiteField.focus();
      EO.preventDefault();
      return;
    }

    if (newDateRow.textContent) {
      startDateField.focus();
      EO.preventDefault();
      return;
    }

    if (newPersonsRow.textContent) {
      personsField.focus();
      EO.preventDefault();
      return;
    }

    if (newMailRow.textContent) {
      mailField.focus();
      EO.preventDefault();
      return;
    }

    if (newRubricRow.textContent) {
      rubricField.focus();
      EO.preventDefault();
      return;
    }

    if (newPublicRow.textContent) {
      document.getElementById('public1').scrollIntoView();
      EO.preventDefault();
      return;
    } else newPublicRow.textContent = null;

    if (newCommentsRow.textContent) {
      commentsField.focus();
      EO.preventDefault();
      return;
    }

    if (newArticleRow.textContent) {
      articleField.focus();
      EO.preventDefault();
      return;
    }

  } catch (ex) {
    EO.preventDefault();
  }
}
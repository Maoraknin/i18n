'use strict'

var gTrans = {
   'main-title': {
        en: 'Welcome to my Bookshop',
        he: 'ברוכים הבאים לחנות הספרים שלי'
    },
    'search-by-rate': {
        en: 'Rate',
        he: 'דירוג'
    },
    'search-by-price': {
        en: 'Price',
        he: 'מחיר'
    },
    'search-by-title': {
        en: 'Title',
        he: 'כותרת'
    },
    'search-by-ruller': {
        en: 'Search By',
        he: 'מיין לפי'
    },
    'search-book-btn': {
        en: 'Search',
        he: 'חפש'
    },
    'add-book-btn': {
        en: 'Add',
        he: 'הוסף'
    },
    'close-btn': {
        en: 'Close',
        he: 'סגור'
    },
    Descending: {
        en: 'Descending',
        he: 'בסדר יורד'
    },
    'id': {
        en: 'Id',
        he: 'מספר רשום'
    },
    'book-title': {
        en: 'Title',
        he: 'כותרת'
    },
    'price': {
        en: 'Price',
        he: 'מחיר'
    },
    'actions': {
        en: 'Actions',
        he: 'פעולות'
    },
    'rate': {
        en: 'Rate',
        he: 'דירוג'
    },
    'read-btn': {
        en: 'Read',
        he: 'קרא'
    },
    'update-btn': {
        en: 'Update',
        he: 'עדכן'
    },
    'delete-btn': {
        en: 'Delete',
        he: 'מחק'
    },
    'add-book-name': {
        en: 'Book Name',
        he: 'שם הספר'
    },
    'add-book-price': {
        en: 'Price',
        he: 'מחיר'
    },
    'search-book-name': {
        en: 'Book Name',
        he: 'שם הספר'
    },
    'book-description': {
        en: 'Book Description',
        he: 'תיאור הספר'
    }
}



var gCurrLang

function getLang() {
    const queryStringParams = new URLSearchParams(window.location.search)
    gCurrLang = queryStringParams.get('lang')
    return gCurrLang
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const translation = getTrans(transKey)
        el.innerText = translation

        if (el.placeholder) el.placeholder = translation
    })
}

function getTrans(transKey) {
    const key = gTrans[transKey]
    // console.log('key:',key)
    if (!key) return 'UNKNOWN'
    var translation = key[gCurrLang]
    if (!translation) translation = key.en
    return translation
}


const arrayOfQuotes = [
    {'name': '--Oscar Wilde', 
     'body': '"Be yourself; everyone else is already taken."'
    },
    {'name': '--Frank Zappa', 
     'body': '"So many books, so little time."'
    },
    {'name': '--Marcus Tullius Cicero', 
     'body': '"A room without books is like a body without a soul."'
    },
    {'name': '--Mae West', 
     'body': '"You only live once, but if you do it right, once is enough."'
    },
    {'name': '--Elbert Hubbard', 
     'body': '"A friend is someone who knows all about you and still loves you."'
    },
    {'name': '--Mahatma Gandhi', 
     'body': '"Live as if you were to die tomorrow. Learn as if you were to live forever."'
    },
]

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#bodyOutPut').textContent = `${arrayOfQuotes[random].body}`;
    document.querySelector('#nameOutPut').textContent = `${arrayOfQuotes[random].name}`;
    
}
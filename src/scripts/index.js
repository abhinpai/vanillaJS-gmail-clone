const mails = [
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },

  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
  {
    from: 'Stackoverflow',
    desc:
      'I have removed every flex property except display:flex on the  contianer. You need the basic implementation with all default values.',
    date: 'Aug 4',
  },
];


const onMailSelect =(parent, checked) =>{
    checked?  parent.classList.add('mail-selected'): parent.classList.remove('mail-selected')
} 

// Get the table
const inbox = document.getElementById('inbox');

mails.map((mail, index) => {
  // get the current row count
  var rowCount = inbox.rows.length;
  // Inset add total row and get it
  var row = inbox.insertRow(rowCount);
  row.classList.add('mail__row');
  row.setAttribute("data-row-id", index)

  //Column 1  for checkbox
  var cell1 = row.insertCell(0);
  cell1.innerHTML = `<td onselect="onMailSelect(event)"> <input type="checkbox" /></td>`;
  cell1.classList.add('mail__col__checkbox');
  var checkBox = cell1.firstElementChild;
  checkBox.onchange = function(){onMailSelect(cell1.parentElement, checkBox.checked);};

  //Column 2  for recipient
  var cell2 = row.insertCell(1);
  cell2.innerHTML = `<td>${mail.from}</td>`;
  cell2.classList.add('mail__col__from');

  //Column 3  for description
  var cell3 = row.insertCell(2);
  cell3.innerHTML = ` <td >${mail.desc} </td>`;
  cell3.classList.add('mail__col__desc');

  //column 4 for date
  var cell4 = row.insertCell(3);
  cell4.innerHTML = ` <td>${mail.date}</td>`;
  cell4.classList.add('mail__col__time');
});


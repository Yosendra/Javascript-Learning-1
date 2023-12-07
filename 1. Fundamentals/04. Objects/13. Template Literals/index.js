
// Old way
const message = 
 "This is my\n" + 
 "first message";

// With tempelate literal, not needed escape character
const another = 
`This is my 
first message`;

const receiver = "William";
const sender = "Smith";
const mail = 
`Hi ${receiver}

Thank you for joining my mailing list

Regards
${sender}`;

console.log(mail)

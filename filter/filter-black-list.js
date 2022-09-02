function filter(allEmails, blackListEmails) {
  let permitEmails = [];
  for (let i = 0; i < allEmails.length; i++) {
    if (blackListEmails.includes(allEmails[i]) === false) {
      permitEmails.push(allEmails[i]);
    }
  }
  return permitEmails;
}

export default filter;

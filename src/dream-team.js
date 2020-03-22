module.exports = function createDreamTeam(members) {

  let membersNames = [];
  if (Array.isArray(members)) {
    for (let item of members) {
      if (typeof item == 'string') membersNames.push(item);
    }
  }

  return membersNames.map(elem => elem = elem.trim())
                     .map(elem => elem[0].toUpperCase())
                     .sort()
                     .join('');
};
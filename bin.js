#!/usr/bin/env node

const { parse } = require('comment-json');
const fs = require('fs');

const getProfiles = () => {
  try {
    const file = fs.readFileSync('app.config.json');
    const obj = parse(file.toString());

    return (Object.keys(obj));
  } catch (e) {
    throw Error('No local app.config fing here');
  }
};

const complete = (node, scriptCall, grunt, toComplete, command) => {
  let values = ['serve', 'package'];
  if (command === 'grunt' || values.includes(command)) {
    // ntd
  } else if (command === '-p') {
    values = getProfiles();
  }

  return (values.filter((x) => x.startsWith(toComplete)));
};

if (require.main === module) {
  const [node, scriptCall, grunt, toComplete, command] = process.argv;
  const values = complete(node, scriptCall, grunt, toComplete, command);

  console.info(values.join('\n')); // eslint-disable-line no-console
}

exports.complete = complete;
exports.getProfiles = getProfiles;

import config from "./../config";

const handler = {};

//for /
handler.root = (data, callback) => {
  const acceptedVerbs = [config.verbs.GET];

  if (!acceptedVerbs.includes(data.method)) {

    callback(405);

  } else {

    callback(200, {
      welcome: "Hello World!"
    });

  }

};

//for /receive
handler.receive = (data, callback) => {

  const acceptedVerbs = [config.verbs.POST];

  if (!acceptedVerbs.includes(data.method)) {

    callback(405);

  } else {

    callback(200, {
      welcome: "Hello World!"
    });

  }

};

//for /check
handler.check = (data, callback) => {

  const acceptedVerbs = [config.verbs.GET];

  if (!acceptedVerbs.includes(data.method)) {

    callback(405);

  } else {

    callback(200, {
      welcome: "Hello World!"
    });

  }
};

//for /details
handler.details = (data, callback) => {

  const acceptedVerbs = [config.verbs.GET];

  if (!acceptedVerbs.includes(data.method)) {

    callback(405);

  } else {

    callback(200, {
      welcome: "Hello World!"
    });

  }
};

handler.request = (data, callback) => {

  const acceptedVerbs = [config.verbs.GET];

  if (!acceptedVerbs.includes(data.method)) {

    callback(405);
  } else {

    callback(200, {
      welcome: "Hello World!"
    });
  }

};

handler.notFound = (data, callback) => {
  callback(404);
};

export default handler;

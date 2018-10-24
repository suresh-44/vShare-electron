import config from "../config/index";

const handler = {};

//for /
handler.root = (data, callback) => {
  const acceptedVerbs = [config.verbs.GET];

  if (!acceptedVerbs.includes(data.method)) {

    callback(405);

  } else {

    callback(200, {
      welcome: "/"
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
      welcome: "/receive "
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
      welcome: "/check"
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
      welcome: "/details"
    });

  }
};

// /request
handler.request = (data, callback) => {

  const acceptedVerbs = [config.verbs.GET];

  if (!acceptedVerbs.includes(data.method)) {

    callback(405);
  } else {

    callback(200, {
      welcome: "/request"
    });
  }

};

handler.notFound = (data, callback) => {
  callback(404);
};

export default handler;

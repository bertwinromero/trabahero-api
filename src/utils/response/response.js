const responseObject = function(error, data, req) {
  var metadata = {};

  if (req) {
    metadata = {
      items: data ? data.length : 0,
      url: req.originalUrl || null,
      method: req.method || null,
      body: req.body || null,
      params: req.params || null,
    };
  }

  return {
    data: data || {},
    metadata: metadata,
    error: error || {},
  };
};

module.exports.response = {
  ok: function(data, req, res) {
    res.status(200).json(Object.freeze(responseObject(null, data, req)));
  },

  badRequest: function(error, req, res) {
    res.status(400).json(responseObject(error, null, req));
  },

  exists: function(error, req, res) {
    res.status(409).json(responseObject(error, null, req));
  },

  serverError: function(error, req, res) {
    res.status(500).json(responseObject(error, null, req));
  },

  notFound: function(error, req, res) {
    res.status(404).json(responseObject(error, null, req));
  },
}
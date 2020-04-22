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
  ok: function(code, data, req, res) {
    res.status(code).json(Object.freeze(responseObject(null, data, req)));
  },

  error: function(code, error, req, res) {
    res.status(code).json(responseObject(error, null, req));
  },

  exists: function(error, req, res) {
    res.status(409).json(responseObject(error, null, req));
  },
}
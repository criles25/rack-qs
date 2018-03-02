const encodeFormParams = require('jquery-param');

function parse(remainingPiece, encodedString, pieces) {
  if (Array.isArray(remainingPiece)) {
    return remainingPiece.forEach(piece => parse(piece, `${encodedString}[]`, pieces));
  }

  if (remainingPiece === Object(remainingPiece)) { // is object
    return Object.keys(remainingPiece)
                 .forEach(key => parse(remainingPiece[key], `${encodedString}[${key}]`, pieces));
  }

  // base case
  pieces[pieces.length] = `${encodeURIComponent(encodedString)}=${encodeURIComponent((remainingPiece == null) ? "" : remainingPiece)}`;
}

function encodeNonFormParams(params) {
  let pieces = [];

  Object.keys(params).forEach(key => parse(params[key], `${key}`, pieces));

  return pieces.sort().join('&');
}

export const stringify = function(params, options = { form: false }) {
  let encodedString;
  if (!options.form) {
    encodedString = encodeNonFormParams(params);
  } else {
    encodedString = encodeFormParams(params);
  }

  return encodedString;
}

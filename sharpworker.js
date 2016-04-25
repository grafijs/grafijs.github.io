importScripts('grafi.js')

self.onmessage = function (message) {
  var processed = grafi.sharpen(message.data)
  self.postMessage(processed, [processed.data.buffer])
}
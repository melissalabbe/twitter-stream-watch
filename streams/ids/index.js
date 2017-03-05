const streamIDs = {

  STREAM_IDS: [
    {
      name: 'TheAtlantic',
      id: 35773039
    }
  ]
};

streamIDs.getStreamIDs = function () {
  const ids = [];

  this.STREAM_IDS.forEach((el) => {
    ids.push(el.id);
  });

  return ids.toString();
};

module.exports = streamIDs;
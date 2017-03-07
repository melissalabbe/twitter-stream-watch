const streamIDs = {

  STREAM_IDS: [
    {
      name: 'TheAtlantic',
      id: 35773039
    },
    {
      name: 'realTrumpVoodoo',
      id: 838828190692945920
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

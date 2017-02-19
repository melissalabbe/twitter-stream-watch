const streamIDs = {

  STREAM_IDS: [
    {
      name: 'washingtonpost',
      id: 2467791
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

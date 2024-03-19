const get4to3ResolutionConstraints = (width) => ({
  width: { ideal: width },
  height: { ideal: width * 0.75 },
  aspectRatio: { exact: 1.333333 }, // width:height = 4:3
});

const INITIAL_WIDTH = 640;

const update = async (width) => {
  const video = document.getElementById("video");
  if (!(video.srcObject instanceof MediaStream)) {
    return;
  }
  const mediaStream = video.srcObject;
  const track = mediaStream.getVideoTracks()[0];
  if (!track) {
    return;
  }
  try {
    console.log("Update resolution to", width);
    await track.applyConstraints(get4to3ResolutionConstraints(width));
  } catch {
    // do nothing
  }
};

const main = async () => {
  const video = document.getElementById("video");
  try {
    video.srcObject = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: { ideal: "environment" },
        ...get4to3ResolutionConstraints(INITIAL_WIDTH),
      },
    });
  } catch (err) {
    console.log("error", err);
  }

  video.onloadedmetadata = async () => {
    const mediaStream = video.srcObject;
    const track = mediaStream.getVideoTracks()[0];
    video.play();

    for (const width of [896, 1152, 1408, 1664, 1920]) {
      await update(width);
      const constraint = track.getConstraints();
      alert(`width: ${JSON.stringify(constraint.width)}, height: ${JSON.stringify(constraint.height)}`);
    alert(`videoWidth: ${video.videoWidth}, videoHeight: ${video.videoHeight}`)
    }
  };
};

main();

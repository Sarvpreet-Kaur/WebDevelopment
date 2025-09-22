let stream;
const localVideoRef = document.querySelector("#local-video");

const getStream = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        console.log("STREAM", stream);
        localVideoRef.srcObject = stream;
    } catch (error) {
    console.error("STREAM ERROR", error);
    }
};
getStream();
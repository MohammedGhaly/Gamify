function getCroppedUrl(url: string, width: number = 600, height: number = 400) {
  if (!url) return "";
  const taregt = "media/";
  const index = url.indexOf(taregt) + taregt.length;
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
}

export default getCroppedUrl;

// Para sa credentials ko :>
function downloadcred() {
  const link = document.createElement("a");
  link.href = "resume/vin.xyz-resume.pdf";
  link.download = "MARAÑO VINZEL JAMES PADILLA";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

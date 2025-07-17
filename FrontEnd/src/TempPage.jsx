import TempPhoto from "./assets/temp.png";
function TempPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={TempPhoto}
          style={{
            height: "250px",
            width: "600px",
          }}
        ></img>
      </div>
    </>
  );
}
export default TempPage;

//Context Providers
import { ModalContextProvider } from "../../context/ModalContext";
import { UploadContextProvider } from "../../context/UploadContext";

//Page components
import Grid from "./Grid";
import Header from "./Header";
import UploadForm from "./UploadForm";
import ProgressBar from "./ProgressBar";
import DeleteForm from "./DeleteForm";
import ImageModal from "./ImageModal";

/*
   Search
   Autologout
*/
function Template(props) {
  return (
    <section className="mx-[6%]">
      <ModalContextProvider>
        <UploadContextProvider>
          <Header />
          <ProgressBar />
          <UploadForm />
          <DeleteForm/>
          <ImageModal/>
          <Grid />
        </UploadContextProvider>
      </ModalContextProvider>
    </section>
  );
}

export default Template;

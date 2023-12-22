import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { NotReadLayout } from "./NotReadLayout";

const page = (): JSX.Element => {
  return (
    <div>
      <div style={{ width: "40%" }}>
        <BtnBackSection
          label="Volver a Chats"
          dir="/chats"
          withStyles={false}
        />
      </div>
      <NotReadLayout />
    </div>
  );
};

export default page;

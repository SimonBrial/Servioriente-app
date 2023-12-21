import { AsideSearch } from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";

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
      <AsideSearch />
    </div>
  );
};

export default page;

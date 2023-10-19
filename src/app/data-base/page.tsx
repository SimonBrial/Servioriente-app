import ListDataBase from "@/components/base-de-datos/ListDataBase";
import ListLayout from "./layout";
import { UtilsBar } from "@/components/UtilsBar";
import { FilterContainer } from "@/components/FilterContainer";

function page() {
    return (
        <ListLayout>
            <UtilsBar />
            <FilterContainer />
            <ListDataBase />
        </ListLayout>
    );
}

export default page;

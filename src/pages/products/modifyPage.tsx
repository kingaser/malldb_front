import { useLoaderData } from "react-router";
import MoidfyComponent from "../../components/products/modifyComponent";


function ModifyPage() {

  const product: ProductDTO = useLoaderData()

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">
        Products Modify Page
      </div>
      <MoidfyComponent product={product} />
    </div>
  );
}

export default ModifyPage;
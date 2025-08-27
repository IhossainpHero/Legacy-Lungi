import dbConnect from "@/lib/dbConnect";
import ProductCard from "./ProductCard";

const PremiumCollections = async () => {
  // Connect to DB
  const collection = await dbConnect("all-products");

  // Fetch only existing products
  const data = await collection
    .find({ category: "Premium Collections" })
    .toArray();

  const safeData = data?.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-6">Premium Collections</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {safeData?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PremiumCollections;

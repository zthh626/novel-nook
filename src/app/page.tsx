import { SearchInput } from "@/components/SearchInput";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-center bg-cover h-[90vh] bg-splash">
      <section className="flex flex-col items-center py-24 px-10 -mt-20 w-full max-w-3xl bg-gray-200 bg-opacity-90 rounded-xl">
        <h1 className="text-5xl font-bold">NovelNook</h1>
        <p className="pb-5 text-lg">Discover your next favorite book</p>
        <SearchInput searchType="book" />
      </section>
    </div>
  );
}

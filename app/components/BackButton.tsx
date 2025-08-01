import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";

export function BackButton() {
  const router = useRouter();
  return (
    <>
      <button
      style={{
        backgroundColor: "var(--lightbackground)",
        color: "var(--foreground)",
      }}
        type="button"
        className="flex items-center gap-2 px-8 py-2 bg-white text-black shadow-md hover:shadow-lg dark:bg-dark-blue md:text-400 shadow-focus-dark w-fit cursor-pointer rounded-sm transition-shadow duration-300 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 md:rounded-md md:px-10"
        onClick={() => router.back()}
      >
        <HiArrowLeft className="w-5 h-5" />
        <span className="text-base font-medium">Back</span>
      </button>
    </>
  );
}

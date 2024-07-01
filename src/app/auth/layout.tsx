export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center my-20 mx-10 w-full">
      <div className="p-5 w-1/2 max-w-xl bg-gray-100 rounded-xl border h-[25rem]">
        {children}
      </div>
    </div>
  );
}

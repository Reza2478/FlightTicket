'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-lg sm:text-xl">خطایی پیش آمده لطفا مجدد تلاش کنید!</h2>
      <button className="text-white bg-red-500  p-2 sm:p-3 shadow-sm  rounded-lg" onClick={() => reset()}>تلاش مجدد</button>
    </div>
  )
}
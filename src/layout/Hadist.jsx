import dataHadist from '../data/hadist.json';

export default function Hadist() {
  return (
    <div className="min-h-screen items-center justify-center bg-primary pt-22">
        <h1 className='text-xl font-semibold ml-4 text-center underline-offset-1 underline'>Hadist-Hadist Singkat</h1>
      <div className="w-full gap-4 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {dataHadist.map((hadist, index) => (
          <div key={index} className="bg-white text-gray-800 p-4 py-5 rounded-lg shadow-md">
            <p className="text-right text-2xl font-bold font-quicksand">{hadist.arabic}</p>
            <p className="text-right text-sm text-gray-500">{hadist.riwayat}</p>
            <p className="mt-2">{hadist.arti}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client'

export default function Home() {
  
  return (
    <>    
    {/* Text color in tailwind CSS */}
    <p className="text-blue-50">Text color (blue) - 50</p>
    <p className="text-blue-100">Text color (blue) - 100</p>
    <p className="text-blue-200">Text color (blue) - 200</p>
    <p className="text-blue-300">Text color (blue) - 300</p>
    <p className="text-blue-400">Text color (blue) - 400</p>
    <p className="text-blue-500">Text color (blue) - 500</p>
    <p className="text-blue-600">Text color (blue) - 600</p>
    <p className="text-blue-700">Text color (blue) - 700</p>
    <p className="text-blue-800">Text color (blue) - 800</p>
    <p className="text-blue-900">Text color (blue) - 900</p>
    <p className="text-blue-950">Text color (blue) - 950</p>
    
    {/* Background color in tailwind CSS */}
    <div className="bg-blue-50 p-5">Div color (blue) - 50</div>
    <div className="bg-blue-100 p-5">Div color (blue) - 100</div>
    <div className="bg-blue-200 p-5">Div color (blue) - 200</div>
    <div className="bg-blue-300 p-5">Div color (blue) - 300</div>
    <div className="bg-blue-400 p-5">Div color (blue) - 400</div>
    <div className="bg-blue-500 p-5">Div color (blue) - 500</div>
    <div className="bg-blue-600 p-5">Div color (blue) - 600</div>
    <div className="bg-blue-700 p-5">Div color (blue) - 700</div>
    <div className="bg-blue-800 p-5">Div color (blue) - 800</div>
    <div className="bg-blue-900 p-5">Div color (blue) - 900</div>
    <div className="bg-blue-950 p-5">Div color (blue) - 950</div>
    <h3 className="mt-4">Marging & Padding in tailwind</h3>
    <div className="bg-red-600 p-1 m-1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iusto repellat, qui commodi deleniti laborum, vitae quis ex fuga totam, libero sint nam eum veniam hic et voluptates neque aliquid.
      </p>
    </div>
    <div className="bg-red-600 p-2 m-2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iusto repellat, qui commodi deleniti laborum, vitae quis ex fuga totam, libero sint nam eum veniam hic et voluptates neque aliquid.
      </p>
    </div>
    <div className="bg-red-600 p-3.5 m-3.5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iusto repellat, qui commodi deleniti laborum, vitae quis ex fuga totam, libero sint nam eum veniam hic et voluptates neque aliquid.
      </p>
    </div>
    <div className="bg-red-600 p-4 m-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iusto repellat, qui commodi deleniti laborum, vitae quis ex fuga totam, libero sint nam eum veniam hic et voluptates neque aliquid.
      </p>
    </div>
    </>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <h2>Hello world</h2>
    //     <button type="button" className="bg-blue-500 hover:bg-red-300 text-white font-bold py-3 px-4 rounded" onClick={() => showMsg("Welcome Ronak")}>Tom Click</button>
    //     <InnerComp />
    //     {/* {InnerComp()} */}
    //   </main>
    // </div>
  );
}

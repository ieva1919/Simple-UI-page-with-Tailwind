// import background from './background.jpg';

function App() {
  return (
    <div className="flex flex-row h-screen bg-gray-200">
        <div className="flex flex-col justify-between items-center flex-none w-16 bg-gray-200">
        <div className="flex flex-col space-y-4 w-full items-center pt-5">
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a className="relative w-full h-16 flex justify-center items-center">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
              <div className="absolute top-0 right-0 mr-3 mt-3 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center">5</div>
            </a>
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        </div>
        <div className="flex flex-col space-y-4">
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
            <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        </div>
        </div>
        <div className="w-64 flex-none bg-gray-100 p-4 flex-col space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-semibold text-2xl">Inbox</h1>
            <svg class=" flex-none w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div className="bg-red-400 h-64">

            </div>
            <div className="bg-red-400 h-64">

            </div>

        </div>
        <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
            <div className="flex flex-col w-1/5">
              <div className="flex-none h-24 bg-red-200">top</div>

              <div className="flex-auto overflow-y-auto">
                { [...Array(100)].map(() => (
                  <a className="block border-b">
                    <div className="border-l-2 border-blue-500 p-3 space-y-4">
                      <div className="flex flex-row items-center space-x-2">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                          <strong className="flex-grow text-sm">Nikola Tesla</strong>
                          <div className="text-sm text-gray-600">5hr</div>
                      </div>
                      <div className="flex flex-row items-center space-x-1">
                        <svg class="flex-none w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                        <div className="flex-grow truncate text-xs">Some message content hgfdgdgsgdfssfdgdfsfdsghgfdgdgsgdfssfdgd</div>
                      </div>
                    </div>
                  </a>
                )) }
              </div>
            </div>
            <div className="w-3/5 border-l border-r border-gray-400 flex flex-col">
                  <div className="flex-none h-20 flex flex-row justify-between items-center p-4 border-b">
                    <div className="flex flex-col space-y-1 ">
                      <strong>Nikola</strong>
                      <input type="text" placeholder="add conversation title" className="text-sm border-b border-dashed text-black placeholder-gray-600"/>
                    </div>
                    <div className="flex flex-row items-center"> 
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                  </div>
                  <div className="flex-auto overflow-y-auto p-5 space-y-4 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/image/background.jpg)' }}>
                  { [...Array(10)].map((x, i) => (
                    i % 2 ?
                      <div className="flex flex-row space-x-2">
                        <svg className="flex-none w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                        <div className="flex flex-col">
                          <div className="bg-gray-200 rounded p-5">
                            Some message text
                          </div>
                          <div className="text-sm text-black">5hr ago</div>
                        </div>
                      </div>
                      :
                      <div className="flex flex-row-reverse space-x-2">
                        <svg className="flex-none w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                        <div className="flex flex-col">
                          <div className="bg-gray-200 rounded p-5">
                            Some message text 2
                          </div>
                          <div className="text-sm text-black flex flex-row-reverse">5hr ago</div>
                        </div>
                      </div>
                     )) }
                  </div>
                  <div className="flex-none h-40 p-4 pt-0">
                    <textarea className="w-full h-full outline-none border focus:border-blue-600 rounded p-4 shadow-lg">Hii</textarea>
                  </div>
            </div>

            <div className="w-1/5 bg-gray-200 overflow-y-auto flex-flex-col">
                <div className="h-64 flex-none border-b border-gray-400 flex flex-col">
                  Ieva
                </div>
                <div className="flex flex-col space-y-4">
                  { [...Array(10)].map(() => (
                    <div className="flex flex-none h-64 bg-white border rounded m-4 justify-center items-center"> 
                      card content
                    </div>
                    )) }
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

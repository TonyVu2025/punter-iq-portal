export const FeedCardFavorite = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center bg-gradient-pink-main text-white rounded-t-lg py-6 px-7 font-helveticaNowDisplay text-xl">
        <div className="font-extrabold">
          Coffs Harbour - Race 2 <span className="font-normal">1400m</span>
        </div>
        <div className="font-extrabold">Favourites</div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-left text-xs font-normal py-2">Open</th>
              <th className="text-left text-xs font-normal py-2">Current</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className="border-t">
                <td>
                  <div className="pl-2 lg:pl-7 py-3 flex space-x-4">
                    <img
                      src="/img/icons/t-shirt-orange.svg"
                      alt="Shirt Icon"
                      className="w-8 h-8"
                    />

                    <div>
                      <div>4. Lucas the Younger</div>
                      <div className="text-Font_SubColor_1 text-xs">
                        T: Wendy Kelly <br />
                        J: Joe Bowditch (58kg)
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <button className="px-5 py-2 bg-Font_SubColor_1 text-white font-semibold rounded-lg">
                    $250
                  </button>
                </td>

                <td className="text-right pr-7 w-16">
                  <button className="px-5 py-2 bg-Font_SubColor_1 text-white font-semibold rounded-lg">
                    $250
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

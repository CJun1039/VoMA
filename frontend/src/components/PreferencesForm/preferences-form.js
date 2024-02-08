export default function PreferencesForm() {
  return (
    <form className="mx-10">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
            <div className="sm:col-span-4">
              <label
                htmlFor="primary-lang"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Primary language
              </label>
              <div className="mt-2">
                <select
                  type="lang"
                  name="primary-lang"
                  id="primary-lang"
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
